import Button from "@/components/ui/buttonv2"
import { ReactNode } from "react"

type Props = {
    title: string
    children: ReactNode
    color?: "primary" | "secondary"
}

const GridCard = ({ title, children, color = "secondary" }: Props) => {
    return (
        <article
            data-style={color}
            className="group space-y-4 rounded-2xl bg-secondary-100 px-4 pb-12 pt-20 text-black data-[style=primary]:bg-primary-600 data-[style=primary]:text-secondary-50"
        >
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="w-3/4 font-light">{children}</p>
            <div className="flex items-center gap-4">
                <Button
                    size="lg"
                    className="border border-primary-500 bg-primary-500 text-secondary-100 group-data-[style=primary]:border-secondary-50 group-data-[style=primary]:bg-secondary-50 group-data-[style=primary]:text-neutral-900"
                >
                    C'est parti
                </Button>
            </div>
        </article>
    )
}

export default GridCard
