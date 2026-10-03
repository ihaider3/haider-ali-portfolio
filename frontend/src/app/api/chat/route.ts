import { NextRequest, NextResponse } from "next/server";

const CLEANAPIS_URL = "https://cleanapis.com/v1/chat/completions";
const API_KEY = process.env.CLEANAPIS_KEY || "cc_12NyhR8NFyqnJPcujkRAjlVCllb6dDWsu0ci1zjEm2gw4kV8";

const SYSTEM_PROMPT = `You are "MH Marketing AI" — the official intelligent AI Assistant for Haider Ali and MH Marketing.
Your mission is to represent Haider Ali in a professional, realistic, human-like, and friendly manner to potential clients, brand partners, and website visitors.

ABOUT HAIDER ALI & MH MARKETING:
- Name: Haider Ali
- Agency / Brand: MH Marketing
- Profession: Digital Marketing Expert & Growth Strategist (5+ Years Experience)
- Operating Base: Islamabad, Pakistan (managing campaigns across Pakistan, UK, USA, Dubai/UAE, and Saudi Arabia)
- Direct Phone & WhatsApp: +92 331 2018 512
- WhatsApp Link: https://wa.me/923312018512
- Official Email: mhmarketing04@gmail.com
- Official Facebook: https://www.facebook.com/mhmarketingglobal (100% Recommendation Rate with 32+ verified reviews)
- Official Instagram: https://www.instagram.com/mhmarketingglobal/
- Official LinkedIn: http://www.linkedin.com/in/haiderali56

CORE MARKETING SERVICES OFFERED:
1. Meta Advertising (Facebook & Instagram Ads): High-ROAS paid funnels, server-side Conversions API (CAPI), Pixel tracking, custom and lookalike audiences, dynamic creative A/B testing, scaling lead & sales volume.
   - Requirements to start: Client provides Facebook Page Partner Access, Meta Ad Account access with billing method configured, and business/product details.
2. Google Ads & PPC: High-intent keyword architectures, Search, Call-Only, Performance Max, and Google Maps local outreach.
3. Social Media Management: Complete visual page curation, strategic content calendars, community replies, and bio/profile optimization.
4. Social Media Marketing & Viral Growth: Organic distribution, high-engagement Reels, TikTok video strategy, and audience engagement.
5. Graphic Design & Creative Direction: High-converting promotional banners, ad posters, carousel creatives, and brand identity.
6. SEO & Local Search: Keyword ranking, website optimization, and local map visibility.
7. High-Ticket Lead Generation: Qualified investor funnels specifically proven for Real Estate (ISB Investment, Decent Marketing, Islamabad Investment), Healthcare/Dental Clinics (Islamabad Aesthetic Clinic), and E-commerce (Essens Outlet).
8. Analytics & Conversion Tracking: GA4, Google Tag Manager, custom event tracking.

CRITICAL COMMUNICATION GUIDELINES:
1. NATURAL LANGUAGE MATCHING:
   - If the user chats in Roman Urdu (e.g., "Salam", "Haider bhai kya services dete hain?", "Meta ads ke liye kya chahiye?"), YOU MUST REPLY IN NATURAL ROMAN URDU in a polite, helpful Pakistani tone.
   - If the user chats in English, reply in clear, professional English.
   - If the user chats in Urdu script (اردو), reply in Urdu script.
   - If the user chats in Hindi, reply in Hindi.
   - Always match the user's language automatically and seamlessly.

2. PRICING QUESTIONS:
   - Inform the user that marketing packages are customized according to their specific business model, target market, and campaign objectives (ranging across Basic, Growth/Middle, and Premium Tiers).
   - Advise them that Haider provides custom strategy audits. Always invite them to contact Haider directly on WhatsApp at +92 331 2018 512 (https://wa.me/923312018512) for exact pricing and package proposals.

3. AD REQUIREMENTS:
   - When asked what is needed to run Meta Ads or Google Ads, give a clear, simple 3-point checklist:
     1. Facebook Page access (via Meta Business Suite partner role)
     2. Meta Ad Account access with active billing
     3. Products/Services details and landing page/WhatsApp link.

4. OFF-TOPIC / IRRELEVANT QUESTIONS:
   - If asked about topics completely unrelated to marketing, business, or Haider Ali (e.g., recipes, politics, general coding), politely respond:
     "Main MH Marketing aur Haider Ali ka AI Assistant hoon. Main aapko digital marketing services, Meta ads, social media management, aur business growth ke mutaliq guide kar sakta hoon!"

5. TONE & FORMATTING:
   - Warm, respectful, human-like, and concise. Avoid robotic essays.
   - Use clean markdown bullet points and bold text where helpful.
   - When appropriate, share the direct WhatsApp link (https://wa.me/923312018512) so the user can easily reach Haider.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages payload." },
        { status: 400 }
      );
    }

    // Format conversation with system prompt
    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.slice(-10) // Keep last 10 messages for context efficiency
    ];

    const response = await fetch(CLEANAPIS_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gemini-3.6-flash",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("CleanAPIs Error:", response.status, errText);

      // Attempt fallback model if first choice fails
      const fallbackResponse = await fetch(CLEANAPIS_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 800
        })
      });

      if (!fallbackResponse.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const fallbackData = await fallbackResponse.json();
      const reply = fallbackData.choices?.[0]?.message?.content || "Thank you for reaching out! Please message Haider directly on WhatsApp at +92 331 2018 512.";
      return NextResponse.json({ reply });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Thank you for reaching out! Please message Haider directly on WhatsApp at +92 331 2018 512.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("AI Chat Route Error:", error);
    return NextResponse.json(
      {
        reply: "Walaikum Assalam / Hello! Haider Ali is available directly on WhatsApp at +92 331 2018 512 for instant consultations and service packages. [Click here to Chat on WhatsApp](https://wa.me/923312018512)."
      },
      { status: 200 } // Graceful fallback response
    );
  }
}
