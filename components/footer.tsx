import TransitionLink from "@/components/transition-link"
import { LINKS } from "@/constants/navigation"

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <section className="flex justify-between">
        <article>
          <p>( SITEMAP )</p>
          <ul className="space-y-1 my-2">
            {Object.values(LINKS).map((link, i) => (
              <li key={i}>
                <TransitionLink
                  href={link.url}
                  className="group relative text-white/80 transition-colors hover:text-white text-sm"
                >
                  {link.label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="aaa w-full text-[9vw] text-center font-serif">
        La source
      </section>
    </footer>
  )
}

export default Footer
