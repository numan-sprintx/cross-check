import type React from "react"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "outline-top"
    | "outline-bottom"
    | "outline-left"
    | "outline-right"
    | "outline-diagonal"
    | "outline-reverse"
  size?: "xs" | "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: GradientButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"

  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs gap-1.5 rounded-full",
    sm: "px-4 py-2 text-sm gap-2 rounded-full",
    md: "px-5 py-3 text-base gap-2 rounded-full",
    lg: "px-6 py-4 text-lg gap-3 rounded-full",
  }

  const variantStyles = {
    primary: "bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 text-white hover:shadow-lg hover:scale-105",
    secondary: "bg-gray-800 text-white border-2 border-transparent bg-clip-padding hover:bg-gray-700",
    outline: "bg-transparent text-white border-2 hover:bg-white/10",
    "outline-top": "",
    "outline-bottom": "",
    "outline-left": "",
    "outline-right": "",
    "outline-diagonal": "",
    "outline-reverse": ""
  }

  const gradientVariants = {
    outline: "bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500",
    "outline-top": "bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500",
    "outline-bottom": "bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500",
    "outline-left": "bg-gradient-to-b from-orange-500 via-purple-600 to-blue-500",
    "outline-right": "bg-gradient-to-b from-blue-500 via-purple-600 to-orange-500",
    "outline-diagonal": "bg-gradient-to-br from-orange-500 via-purple-600 to-blue-500",
    "outline-reverse": "bg-gradient-to-l from-orange-500 via-purple-600 to-blue-500",
  }

  const combineClasses = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  // For all outline variants, we need the gradient border effect
  if (variant?.startsWith("outline")) {
    return (
      <div className="relative inline-flex">
        {variant === "outline-top" ? (
          <>
            {/* Top gradient border only */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 rounded-t-full" />
            <button
              className={combineClasses(
                baseStyles,
                sizeStyles[size],
                "relative bg-gray-900 text-white hover:bg-gray-800 border-t-[2.5px] border-transparent",
                className,
              )}
              {...props}
            >
              {children}
            </button>
          </>
        ) : variant === "outline-bottom" ? (
          <>
            {/* Bottom gradient border only */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 rounded-b-full" />
            <button
              className={combineClasses(
                baseStyles,
                sizeStyles[size],
                "relative bg-gray-900 text-white hover:bg-gray-800 border-b-[2.5px] border-transparent",
                className,
              )}
              {...props}
            >
              {children}
            </button>
          </>
        ) : variant === "outline-left" ? (
          <>
            {/* Left gradient border only */}
            <div className="absolute top-0 bottom-0 left-0 w-[2.5px] bg-gradient-to-b from-orange-500 via-purple-600 to-blue-500 rounded-l-full" />
            <button
              className={combineClasses(
                baseStyles,
                sizeStyles[size],
                "relative bg-gray-900 text-white hover:bg-gray-800 border-l-[2.5px] border-transparent",
                className,
              )}
              {...props}
            >
              {children}
            </button>
          </>
        ) : variant === "outline-right" ? (
          <>
            {/* Right gradient border only */}
            <div className="absolute top-0 bottom-0 right-0 w-[2.5px] bg-gradient-to-b from-blue-500 via-purple-600 to-orange-500 rounded-r-full" />
            <button
              className={combineClasses(
                baseStyles,
                sizeStyles[size],
                "relative bg-gray-900 text-white hover:bg-gray-800 border-r-[2.5px] border-transparent",
                className,
              )}
              {...props}
            >
              {children}
            </button>
          </>
        ) : (
          <>
            {/* Full gradient border (original outline + new variants) */}
            <div
              className={`absolute inset-0 rounded-full ${gradientVariants[variant as keyof typeof gradientVariants]}`}
            />
            <button
              className={combineClasses(
                baseStyles,
                sizeStyles[size],
                "relative bg-gray-900 text-white hover:bg-gray-800 m-[2.5px]",
                className,
              )}
              {...props}
            >
              {children}
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <button className={combineClasses(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {children}
    </button>
  )
}
