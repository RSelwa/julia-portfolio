/* eslint-disable react/no-unescaped-entities */
import { CONTACT_EMAIL } from "@/constants"

const Page = () => {
  return (
    <main className="min-h-full-height p-9">
      <h1 className="text-size-h1 font-serif font-bold text-cobalt">Contact</h1>

      <article className="text-size-h3 mt-20 ml-auto flex flex-col justify-center gap-20 leading-110 lg:w-1/2">
        <p className=" text-center lg:w-2/3 lg:text-start">
          Souhaitez-vous un projet à prix unique ? Un autre souci ?
          <span className="text-foreground/50">
            N'hésitez pas à nous contacter.
          </span>
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
          className="lg:text-size-h2 text-size-h3 mx:auto text-center lg:text-start font-serif font-semibold text-cobalt"
        >
          {CONTACT_EMAIL}
        </a>
      </article>
    </main>
  )
}

export default Page
