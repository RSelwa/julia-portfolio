import { ButtonProps, buttonStyle } from "@/utils/style"
import { cn } from "@/utils/tailwind"
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

const Button = ({
    children,
    variant,
    size,
    rounded,
    className,
    ...props
}: Props) => {
    return (
        <button
            {...props}
            className={cn(buttonStyle({ variant, size, rounded }), className)}
        >
            {children}
        </button>
    )
}

export default Button
