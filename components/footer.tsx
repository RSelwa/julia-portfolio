import Link from "@/components/ui/link"
import {
    JULIA_EMAIL,
    JULIA_INSTAGRAM,
    JULIA_LINKEDIN,
    JULIA_YOUTUBE,
} from "@/constants"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const socials = [JULIA_LINKEDIN, JULIA_INSTAGRAM, JULIA_YOUTUBE]

    return (
        <section className="flex flex-col gap-8">
            <button className="mx-auto w-fit rounded border border-dashed border-neutral-300 bg-primary-900 px-10 py-4 font-serif text-3xl uppercase transition-colors hover:bg-primary-800">
                {JULIA_EMAIL}
            </button>
            <footer className="flex items-center justify-around px-6 py-2">
                <p className="flex flex-1">JULIA CARO © {currentYear}</p>
                <article className="flex flex-auto justify-center gap-4">
                    {socials.map(({ label, url }, i) => (
                        <Link
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            variant="white-outlined"
                        >
                            {label}
                        </Link>
                    ))}
                </article>
                <p className="flex flex-1 justify-end uppercase">
                    Design & Dev Raphael SELWA
                </p>
            </footer>
        </section>
    )
}

export default Footer
