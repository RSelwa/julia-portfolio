import Link from "@/components/ui/link"
import NextLink from "next/link"

const Navigation = () => (
    <nav className="flex items-center justify-around bg-primary-900 px-6 py-2">
        <section className="flex flex-1 items-center gap-2">
            <Link href="/">Services</Link>
            <Link href="/">Projets</Link>
            <Link href="/">Qui suis-je ?</Link>
        </section>
        <NextLink
            href="/"
            className="flex-auto text-center font-serif text-base uppercase tracking-wide"
        >
            Julia Caro
        </NextLink>
        <section className="flex flex-1 items-center justify-end">
            <Link href="/">Email</Link>
            <button>F/24</button>
        </section>
    </nav>
)

export default Navigation
