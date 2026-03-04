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

const sizeClasses = {
  sm: "px-4 py-2 text-xs font-semibold rounded-lg",
  md: "px-6 py-2.5 text-sm font-bold rounded-xl",
  lg: "px-8 py-3 text-base font-bold rounded-xl",
  xl: "px-10 py-4 text-lg font-bold rounded-2xl",
};

const responsiveSizeClasses = {
  sm: "px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-lg",
  md: "px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl",
  lg: "px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-xl",
  xl: "px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl",
};

const iconSizes = {
  sm: "w-3 h-3 sm:w-3.5 sm:h-3.5",
  md: "w-3.5 h-3.5 sm:w-4 sm:h-4",
  lg: "w-4 h-4 sm:w-5 sm:h-5",
  xl: "w-5 h-5 sm:w-6 sm:h-6",
};

const icons = {
  arrow: <ArrowRight className="ml-2" />,
  mic: <Mic className="mr-2" />,
  calendar: <Calendar className="mr-2" />,
  message: <MessageCircle className="mr-2" />,
  phone: <Phone className="mr-2" />,
  none: null,
};

const variantClasses = {
  primary:
    "bg-gradient-gold text-navy-deep hover:shadow-gold border-none",
  secondary:
    "bg-transparent text-white border-2 border-white/30 hover:border-gold-400 hover:text-gold-400 hover:bg-white/5",
  outline:
    "bg-transparent text-slate-700 border-2 border-slate-200 hover:border-gold-400 hover:text-gold-600",
  gold:
    "bg-gradient-gold text-navy-deep hover:shadow-gold border-none",
  navy:
    "bg-gradient-navy text-white hover:shadow-xl border-none",
  whatsapp:
    "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 border-none",
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
  const iconClass = iconSizes[size];
  const iconElement = icon !== "none" ? icons[icon] : null;
  const variantClass = variantClasses[variant];

  const MotionComponent = motion.a as any;
  const MotionButton = motion.button as any;

  const baseClasses = `
    ${sizeClass}
    ${variantClass}
    ${fullWidth ? "w-full" : ""}
    inline-flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300
    cursor-pointer
    disabled:opacity-60
    disabled:cursor-not-allowed
    whitespace-nowrap
    ${className}
  `.replace(/\s+/g, " ").trim();

  const content = (
    <>
      {isLoading && <Loader2 className={`animate-spin ${iconClass}`} />}
      {!isLoading && iconElement && <span className={iconClass}>{iconElement}</span>}
      <span>{children}</span>
    </>
  );

  const commonMotionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    ...motionProps,
  };

  if (href) {
    return (
      <MotionComponent
        href={href}
        target={props.target}
        rel={props.rel}
        className={baseClasses}
        {...commonMotionProps}
        {...props}
      >
        {content}
      </MotionComponent>
    );
  }

  return (
    <MotionButton
      className={baseClasses}
      disabled={isLoading}
      {...commonMotionProps}
      {...props}
    >
      {content}
    </MotionButton>
  );
}
