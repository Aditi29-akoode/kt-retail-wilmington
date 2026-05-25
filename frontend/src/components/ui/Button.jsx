import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "default",
      icon: Icon,
      iconPlacement = "left",
      iconClassName,
      iconWrapperClassName,
      children,
      type = "button",
      rotate = false,
      loading = false,
      disabled = false,
      href,
      ...props
    },
    ref
  ) => {
    const isLoading = loading;
    const isDisabled = disabled || isLoading;

    const variants = {
      primary:
        "bg-[#0077B6] text-white hover:bg-[#005F91] border-transparent shadow-lg shadow-[#0077B6]/20",
      outline:
        "bg-white border-[1.5px] border-black text-black hover:bg-gray-100",
      nav:
        "bg-[#BCDFFE] text-black hover:bg-[#A5C9ED] border border-black transition-all",
    };

    const sizes = {
      default: "h-12 px-1 py-2.5 text-base",
      sm: "h-10 px-1 py-2 text-sm",
      lg: "h-14 md:pl-1.5 pl-2 pr-3 md:pr-6 text-[14px] md:text-[18px] tracking-tight",
    };

    const getIconWrapper = () => {
      const base = "flex items-center justify-center rounded-full transition-transform duration-300";
      
      const isLarge = size === "lg";
      const wrapperSize = isLarge ? "w-[30px] h-[30px] md:w-[38px] md:h-[38px]" : "w-7 h-7";

      if (variant === "primary") {
        return cn(base, "bg-white text-black", wrapperSize);
      }
      
      if (variant === "outline") {
        return cn(base, "bg-gray-100 text-black border border-gray-200", wrapperSize);
      }

      if (variant === "nav") {
        return cn(base, "bg-white text-black", wrapperSize);
      }

      return cn(base, "w-6 h-6", iconWrapperClassName);
    };

    const isLarge = size === "lg";
    const iconSize = isLarge ? "w-[18px] h-[18px] md:w-[20px] md:h-[20px]" : "w-4 h-4";
    const strokeWidth = isLarge ? 2 : 1.2;

    const commonClasses = cn(
      "group inline-flex cursor-pointer items-center justify-center gap-2 md:gap-2 whitespace-nowrap rounded-full font-inter font-semibold md:font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 active:scale-95",
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!isLoading && Icon && iconPlacement === "left" && (
          <span className={cn(getIconWrapper(), iconWrapperClassName, rotate && "group-hover:rotate-45")}>
            <Icon className={cn(iconSize, iconClassName)} strokeWidth={strokeWidth} />
          </span>
        )}

        <span>{isLoading ? "Loading..." : children}</span>

        {!isLoading && Icon && iconPlacement === "right" && (
          <span className={cn(getIconWrapper(), iconWrapperClassName, rotate && "group-hover:rotate-45")}>
            <Icon className={cn(iconSize, iconClassName)} strokeWidth={strokeWidth} />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={commonClasses} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={commonClasses}
        disabled={isDisabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };