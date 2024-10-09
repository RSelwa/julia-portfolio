import Link from 'next/link'

const Navigation = () => {
    const className =
        'text-secondary-500 border-secondary-500 rounded-full border px-4 py-1 hover:bg-secondary-700/20'

    return (
        <nav className="flex justify-around px-6 py-2">
            <section className="flex flex-1 items-center gap-2">
                <Link href="/" className={className}>
                    Services
                </Link>
                <Link href="/" className={className}>
                    Projets
                </Link>
                <Link href="/" className={className}>
                    Qui suis-je ?
                </Link>
            </section>
            <section className="flex-auto text-center font-serif text-base">
                Julia Caro
            </section>
            <section className="flex flex-1 items-center justify-end">
                <Link href="/">Email</Link>
                <button>F/24</button>
            </section>
        </nav>
    )
}

export default Navigation
