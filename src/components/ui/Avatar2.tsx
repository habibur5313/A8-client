import * as React from "react"
import { cn } from "../../lib/utils"
interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}
const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = "md", alt = "Avatar", ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-16 w-16",
      xl: "h-24 w-24",
      "2xl": "h-32 w-32",
    }
    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(
          "rounded-full object-cover border-2 border-white shadow-sm bg-gray-100",
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Avatar.displayName = "Avatar"
export { Avatar }