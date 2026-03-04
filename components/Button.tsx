"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { Loader2, ArrowRight, Mic, Calendar, MessageCircle, Phone } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "gold" | "navy" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: "arrow" | "mic" | "calendar" | "message" | "phone" | "none";
  fullWidth?: boolean;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  motionProps?: MotionProps;
}

const responsiveSizeClasses = {
  sm: {
    mobile: "padding: 8px 14px; font-size: 11px; line-height: 1.4; min-height: 36px; border-radius: 8px;",
    desktop: "padding: 10px 18px; font-size: 12px; line-height: 1.4; min-height: 40px; border-radius: 8px;",
  },
  md: {
    mobile: "padding: 10px 18px; font-size: 12px; line-height: 1.4; min-height: 44px; border-radius: 10px;",
    desktop: "padding: 12px 24px; font-size: 14px; line-height: 1.4; min-height: 48px; border-radius: 12px;",
  },
  lg: {
    mobile: "padding: 12px 22px; font-size: 13px; line-height: 1.4; min-height: 48px; border-radius: 12px;",
    desktop: "padding: 14px 28px; font-size: 15px; line-height: 1.4; min-height: 52px; border-radius: 12px;",
  },
  xl: {
    mobile: "padding: 14px 26px; font-size: 14px; line-height: 1.4; min-height: 52px; border-radius: 14px;",
    desktop: "padding: 16px 36px; font-size: 16px; line-height: 1.4; min-height: 58px; border-radius: 16px;",
  },
};

const iconSizes = {
  sm: { mobile: "14px", desktop: "16px" },
  md: { mobile: "16px", desktop: "18px" },
  lg: { mobile: "18px", desktop: "20px" },
  xl: { mobile: "20px", desktop: "22px" },
};

const icons = {
  arrow: <ArrowRight />,
  mic: <Mic />,
  calendar: <Calendar />,
  message: <MessageCircle />,
  phone: <Phone />,
  none: null,
};

const variantStyles = {
  primary: {
    bg: "linear-gradient(135deg, #e8c547 0%, #d4af37 100%)",
    color: "#0a1628",
    border: "none",
    shadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
  },
  secondary: {
    bg: "transparent",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    shadow: "none",
  },
  outline: {
    bg: "transparent",
    color: "#334155",
    border: "2px solid #e2e8f0",
    shadow: "none",
  },
  gold: {
    bg: "linear-gradient(135deg, #e8c547 0%, #d4af37 100%)",
    color: "#0a1628",
    border: "none",
    shadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
  },
  navy: {
    bg: "linear-gradient(160deg, #0a1628 0%, #1e3a5f 50%, #2d4a7c 100%)",
    color: "white",
    border: "none",
    shadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  },
  whatsapp: {
    bg: "linear-gradient(to right, #22c55e, #16a34a)",
    color: "white",
    border: "none",
    shadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon = "none",
  fullWidth = false,
  isLoading = false,
  href,
  motionProps = {},
  className = "",
  ...props
}: ButtonProps) {
  const sizeClass = responsiveSizeClasses[size];
  const iconSize = iconSizes[size];
  const variantStyle = variantStyles[variant];
  const iconElement = icons[icon];

  const MotionComponent = motion.a as any;
  const MotionButton = motion.button as any;

  const content = (
    <>
      {isLoading && (
        <Loader2
          style={{ width: iconSize.mobile, height: iconSize.mobile }}
          className="animate-spin sm:hidden"
        />
      )}
      {isLoading && (
        <Loader2
          style={{ width: iconSize.desktop, height: iconSize.desktop }}
          className="animate-spin hidden sm:block"
        />
      )}
      {!isLoading && iconElement && (
        <span
          className="icon-wrapper"
          style={{
            width: iconSize.mobile,
            height: iconSize.mobile,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span className="sm:hidden" style={{ fontSize: iconSize.mobile }}>
            {iconElement}
          </span>
          <span className="hidden sm:block" style={{ fontSize: iconSize.desktop }}>
            {iconElement}
          </span>
        </span>
      )}
      <span className="button-text">{children}</span>
    </>
  );

  const commonMotionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    ...motionProps,
  };

  const baseComponent = (Component: any) => (
    <Component
      href={href}
      target={props.target}
      rel={props.rel}
      disabled={isLoading}
      className={`button-component ${variant} ${size} ${className}`}
      {...commonMotionProps}
      {...props}
    >
      {content}
    </Component>
  );

  const ComponentToUse = href ? MotionComponent : MotionButton;

  return (
    <>
      <style jsx>{`
        .button-component {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          background: ${variantStyle.bg};
          color: ${variantStyle.color};
          border: ${variantStyle.border};
          box-shadow: ${variantStyle.shadow};
          ${sizeClass.mobile}
        }

        .button-component:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: ${variantStyle.shadow === "none"
            ? "none"
            : "0 8px 25px rgba(212, 175, 55, 0.5)"};
        }

        .button-component:active:not(:disabled) {
          transform: scale(0.98);
        }

        .button-component:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button-component.full-width {
          width: 100%;
        }

        @media (min-width: 640px) {
          .button-component {
            ${sizeClass.desktop}
          }
        }

        .icon-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-text {
          flex: 1;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
      {baseComponent(ComponentToUse)}
    </>
  );
}
