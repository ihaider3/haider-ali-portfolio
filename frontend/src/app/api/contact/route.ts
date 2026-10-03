import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, phone, email, service, message, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
      return NextResponse.json({ status: "success" }, { status: 200 });
    }

    // Strict validation
    if (!full_name || full_name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || phone.trim().length < 6) {
      return NextResponse.json(
        { error: "Please enter a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@example.com)." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { error: "Please select a required service." },
        { status: 400 }
      );
    }

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
    const randSuffix = Math.floor(1000 + Math.random() * 9000);
    const submissionId = `INQ-${dateStr}-${randSuffix}`;

    const formattedDate = now.toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
      dateStyle: "medium",
      timeStyle: "short"
    });

    const newInquiry = {
      id: submissionId,
      timestamp: now.toISOString(),
      submittedAt: formattedDate,
      fullName: full_name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service: service.trim(),
      message: (message || "").trim(),
      status: "New"
    };

    // Safely persist to local inquiries directory when writable, with /tmp fallback for serverless
    try {
      const isVercel = process.env.VERCEL === "1" || !!process.env.AWS_LAMBDA_FUNCTION_NAME;
      const localDir = isVercel
        ? path.join("/tmp", "inquiries")
        : path.join(process.cwd(), "src", "data", "inquiries");

      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
      }
      const localJson = path.join(localDir, "submissions.json");
      let submissionsList: any[] = [];
      if (fs.existsSync(localJson)) {
        try {
          submissionsList = JSON.parse(fs.readFileSync(localJson, "utf8"));
          if (!Array.isArray(submissionsList)) submissionsList = [];
        } catch {
          submissionsList = [];
        }
      }
      submissionsList.unshift(newInquiry);
      fs.writeFileSync(localJson, JSON.stringify(submissionsList, null, 2), "utf8");

      // In local dev, also mirror to project root inquiries folder
      if (!isVercel) {
        const rootDir = path.join(process.cwd(), "..", "inquiries");
        if (fs.existsSync(rootDir)) {
          const rootJson = path.join(rootDir, "submissions.json");
          fs.writeFileSync(rootJson, JSON.stringify(submissionsList, null, 2), "utf8");

          const logPath = path.join(rootDir, "INQUIRIES_LOG.md");
          const logItem = `\n### 📩 Inquiry: ${submissionId}\n- **Date:** ${formattedDate}\n- **Client:** ${newInquiry.fullName}\n- **Phone / WhatsApp:** ${newInquiry.phone}\n- **Email:** ${newInquiry.email}\n- **Service:** ${newInquiry.service}\n- **Details:** ${newInquiry.message || "N/A"}\n---\n`;
          fs.appendFileSync(logPath, logItem, "utf8");
        }
      }
    } catch (fsErr) {
      console.warn("Filesystem notice (expected on read-only serverless):", fsErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry saved successfully",
        inquiry: newInquiry
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API /api/contact handler error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
