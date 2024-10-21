import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
    'text-secondary-500 border-secondary-500 rounded-full border px-3 py-1 hover:bg-secondary-700/20',
    {
        variants: {
            filled: {
                secondary: 'bg-secondary-500 text-neutral-900',
            },
        },
        defaultVariants: { filled: 'secondary' },
    }
)
