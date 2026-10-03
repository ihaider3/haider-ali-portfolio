import React from "react";

interface BrandIconProps {
  name:
    | "facebook"
    | "instagram"
    | "google-ads"
    | "youtube"
    | "tiktok"
    | "linkedin"
    | "whatsapp"
    | "meta"
    | "canva"
    | "google-analytics"
    | "google-tag-manager"
    | "wordpress"
    | "shopify"
    | "google"
    | "analytics"
    | "email"
    | "phone"
    | "photoshop"
    | "illustrator"
    | "premiere";
  className?: string;
  size?: number;
  mode?: "authentic" | "monochrome" | "gold";
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  name,
  className = "w-5 h-5",
  size = 20,
  mode = "authentic"
}) => {
  switch (name) {
    case "facebook": {
      const bgFill = mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#1877F2";
      const fFill = mode === "monochrome" ? "#020612" : "#FFFFFF";
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill={bgFill} />
          <path
            fill={fFill}
            d="M16.67 15.543l.532-3.47H13.874V9.823c0-.949.465-1.874 1.956-1.874h1.514V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.47h3.047v8.385a12.1 12.1 0 003.75 0v-8.385h2.796z"
          />
        </svg>
      );
    }

    case "instagram":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#E4405F"}
          />
        </svg>
      );

    case "google-ads":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.738 15.614l5.334-9.243a3.528 3.528 0 014.82-1.29l.006.004a3.528 3.528 0 011.29 4.82L9.854 19.148a3.528 3.528 0 01-4.82 1.29l-.006-.004a3.528 3.528 0 01-1.29-4.82z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#4285F4"}
          />
          <path
            d="M20.262 15.614l-5.334-9.243a3.528 3.528 0 00-4.82-1.29l-.006.004a3.528 3.528 0 00-1.29 4.82l5.334 9.243a3.528 3.528 0 004.82 1.29l.006-.004a3.528 3.528 0 001.29-4.82z"
            fill={mode === "gold" ? "#E5C378" : mode === "monochrome" ? "currentColor" : "#FBBC04"}
          />
          <circle
            cx="6.28"
            cy="17.41"
            r="3.52"
            fill={mode === "gold" ? "#9B7832" : mode === "monochrome" ? "currentColor" : "#34A853"}
          />
        </svg>
      );

    case "youtube":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#FF0000"}
          />
        </svg>
      );

    case "tiktok":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.04a8.27 8.27 0 0 0 4.82 1.55v-3.5a4.78 4.78 0 0 1-1-.4z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#FE2C55"}
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#0A66C2"}
          />
        </svg>
      );

    case "whatsapp":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.586-.494-.507-.678-.516-.176-.008-.377-.01-.578-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.229 3.111.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.119.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.042 21.879h-.008c-1.776 0-3.518-.478-5.043-1.381l-.362-.215-3.748.983 1-3.655-.236-.375a10.024 10.024 0 0 1-1.536-5.352c0-5.556 4.52-10.076 10.082-10.076 2.693 0 5.226 1.049 7.131 2.955a10.03 10.03 0 0 1 2.95 7.127c-.002 5.558-4.522 10.078-10.078 10.078zm8.544-18.625C18.305 1.002 15.301 0 12.042 0 5.402 0 .003 5.399.003 12.04c0 2.12.553 4.19 1.606 6.012L0 24l6.113-1.604a11.96 11.96 0 0 0 5.925 1.564h.005c6.64 0 12.04-5.399 12.04-12.04 0-3.217-1.252-6.242-3.497-8.486z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#25D366"}
          />
        </svg>
      );

    case "meta":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.924 3.018c-2.392 0-4.328 1.488-5.187 3.327-.858-1.839-2.795-3.327-5.187-3.327C2.923 3.018 0 5.864 0 10.384c0 4.908 3.518 9.387 7.234 10.598.665.217 1.444-.06 1.708-.737.264-.678-.052-1.455-.717-1.672C5.074 17.514 2.4 13.905 2.4 10.384c0-3.197 1.956-5.166 4.15-5.166 1.835 0 3.398 1.34 3.963 3.376.182.656.786 1.106 1.487 1.106.702 0 1.305-.45 1.487-1.106.565-2.036 2.128-3.376 3.963-3.376 2.194 0 4.15 1.969 4.15 5.166 0 3.521-2.674 7.13-5.825 8.189-.665.217-.981.994-.717 1.672.264.677 1.043.954 1.708.737 3.716-1.211 7.234-5.69 7.234-10.598 0-4.52-2.923-7.366-6.526-7.366z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#0081FB"}
          />
        </svg>
      );

    case "canva":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="12"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#00C4CC"}
          />
          <path
            d="M12.98 16.71c-3.13 0-5.14-2.18-5.14-5.06 0-3.32 2.61-5.65 6.07-5.65 1.86 0 3.23.63 3.98 1.44l-1.19 1.41c-.6-.58-1.52-.98-2.67-.98-2.13 0-3.83 1.5-3.83 3.72 0 1.93 1.3 3.32 3.44 3.32 1.25 0 2.21-.46 2.87-1.02l1.09 1.39c-.93.92-2.37 1.43-4.62 1.43z"
            fill={mode === "gold" ? "#080808" : "#FFFFFF"}
          />
        </svg>
      );

    case "google-analytics":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="13"
            width="4.5"
            height="8"
            rx="2.25"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#F9AB00"}
          />
          <rect
            x="9.75"
            y="8"
            width="4.5"
            height="13"
            rx="2.25"
            fill={mode === "gold" ? "#D4AF67" : mode === "monochrome" ? "currentColor" : "#E37400"}
          />
          <rect
            x="16.5"
            y="3"
            width="4.5"
            height="18"
            rx="2.25"
            fill={mode === "gold" ? "#E5C378" : mode === "monochrome" ? "currentColor" : "#F9AB00"}
          />
        </svg>
      );

    case "google-tag-manager":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 12l10 10 10-10L12 2zm0 3.828L18.172 12 12 18.172 5.828 12 12 5.828z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#246FDB"}
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill={mode === "gold" ? "#E5C378" : mode === "monochrome" ? "currentColor" : "#4285F4"}
          />
        </svg>
      );

    case "wordpress":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.2c5.964 0 10.8 4.836 10.8 10.8 0 2.502-.857 4.806-2.298 6.643l-5.694-15.65c.677-.035 1.348-.057 1.637-.057.24 0 .428.02.428.02l.061-.643h-4.32l.062.643s.187-.02.428-.02c.288 0 .96.022 1.637.057l-2.441 6.708-1.583-4.348c.382-.023.774-.038.935-.038.24 0 .428.02.428.02l.061-.643H7.568l.062.643s.187-.02.428-.02c.288 0 .762.019 1.258.046L5.32 17.157A10.74 10.74 0 0 1 1.2 12C1.2 6.036 6.036 1.2 12 1.2zm-7.697 12.3c0 .324.032.64.094.946l3.528-9.673c-.027-.002-.054-.004-.082-.004-1.954 0-3.54 1.586-3.54 3.54v5.191zm14.12 4.417c.925-1.282 1.492-2.827 1.571-4.498l-3.376 9.256c.741-1.398 1.39-3.086 1.805-4.758zm-9.355 4.675l3.226-9.387 2.057 5.647-2.927 8.044a10.75 10.75 0 0 1-2.356-4.304z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#21759B"}
          />
        </svg>
      );

    case "shopify":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.78 4.79l-2.12-.66c-.02-.01-.05-.01-.07-.01-.17-.03-.35.03-.46.16l-.88 1.05-.72-.34c-.2-.09-.43-.07-.61.05l-1.07.72c-.17.11-.27.3-.27.5v.52l-2.58-1.02c-.13-.05-.28-.05-.41 0L3.18 8.43c-.22.09-.36.3-.36.54 0 .04.01.07.02.11l2.5 12.5c.04.22.21.39.43.42h.05c.04 0 .08 0 .12-.02l14.4-4.5c.21-.07.36-.26.36-.48V5.31c0-.26-.17-.48-.42-.52zM12.9 6.84l.65-.44.53.25-.8 1.07-.38-.88zm-2.07 1.36l1.37.54v.66l-1.37-.54v-.66zm1.9 12.39L4.47 9.17l5.26-1.74v.85c0 .24.13.45.34.55l1.64.65v10.11l-1.98.01zm6.9-4.88l-4.5 1.41V8.62l1.03-1.38 3.47 1.08v7.39z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#96BF48"}
          />
        </svg>
      );

    case "google":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#4285F4"}
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill={mode === "gold" ? "#D4AF67" : mode === "monochrome" ? "currentColor" : "#34A853"}
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            fill={mode === "gold" ? "#E5C378" : mode === "monochrome" ? "currentColor" : "#FBBC05"}
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill={mode === "gold" ? "#9B7832" : mode === "monochrome" ? "currentColor" : "#EA4335"}
          />
        </svg>
      );

    case "email":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={mode === "gold" ? "#C8A45D" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case "phone":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={mode === "gold" ? "#C8A45D" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case "analytics":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Axis / Chart frame */}
          <path
            d="M3 3v16a2 2 0 0 0 2 2h16"
            stroke={mode === "gold" ? "#C8A45D" : mode === "monochrome" ? "currentColor" : "#F3CF7A"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ascending Trend Line */}
          <path
            d="M7 14.5l4-4 4 3.5 5-6"
            stroke={mode === "gold" ? "#FFF4C2" : mode === "monochrome" ? "currentColor" : "#FFF4C2"}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data Points */}
          <circle cx="11" cy="10.5" r="1.6" fill="#F3CF7A" />
          <circle cx="15" cy="14" r="1.6" fill="#F3CF7A" />
          <circle cx="20" cy="8" r="1.8" fill="#FFF4C2" />
        </svg>
      );

    case "photoshop":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.2" />
          <text
            x="12"
            y="16.5"
            fill="#31A8FF"
            fontSize="11.5"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Ps
          </text>
        </svg>
      );

    case "illustrator":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#330000" stroke="#FF9A00" strokeWidth="1.2" />
          <text
            x="12"
            y="16.5"
            fill="#FF9A00"
            fontSize="11.5"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Ai
          </text>
        </svg>
      );

    case "premiere":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#1A0A2A" stroke="#9999FF" strokeWidth="1.2" />
          <text
            x="12"
            y="16.5"
            fill="#9999FF"
            fontSize="11.5"
            fontWeight="900"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            Pr
          </text>
        </svg>
      );

    default:
      return null;
  }
};
