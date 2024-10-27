import { cva, VariantProps } from "class-variance-authority"

export const buttonStyle = cva("transition-colors", {
    variants: {
        variant: {
            "white-filled": "bg-white text-neutral-900 border-white border",
            filled: "bg-secondary-500 text-neutral-900 border-secondary-500 border",
            "white-outlined":
                "border-palette-white text-palette-white border hover:bg-palette-white/20",
            outlined:
                "border-secondary-500 text-secondary-500 border hover:bg-secondary-700/20",
        },
        rounded: { full: "rounded-full" },
        size: {
            default: "px-3 py-1",
            lg: "px-4 py-2 font-medium",
            xl: "px-12 py-2 font-medium",
        },
    },
    defaultVariants: { variant: "outlined", size: "default", rounded: "full" },
})

export type ButtonProps = VariantProps<typeof buttonStyle>
