import { ButtonProps, buttonStyle } from "@/utils/style"
import { cn } from "@/utils/tailwind"
import NextLink from "next/link"
import { AnchorHTMLAttributes } from "react"

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps

const Link = ({
    href,
    children,
    variant,
    rounded,
    size,
    className,
    ...props
}: Props) => {
    return (
        <NextLink
            {...props}
            className={cn(buttonStyle({ variant, size, rounded }), className)}
            href={href || "#"}
        >
            {children}
        </NextLink>
    )
}

export default Link
