"use client"

/* eslint-disable react/no-unescaped-entities */
import { CONTACT_EMAIL } from "@/constants"
import { CopyIcon } from "lucide-react"
import { useCopyToClipboard } from "react-use"
import { toast } from "sonner"

const Page = () => {
  const [, copyToClipboard] = useCopyToClipboard()

  return (
    <main className="min-h-full-height p-9">
      <h1 className="text-size-h1 text-cobalt font-serif font-bold">Contact</h1>

      <article className="text-size-h3 mt-20 ml-auto flex flex-col justify-center gap-20 leading-110 lg:w-1/2">
        <p className="text-center lg:w-2/3 lg:text-start">
          Souhaitez-vous un projet à prix unique ? Un autre souci ?
          <span className="text-foreground/50">
            N'hésitez pas à nous contacter.
          </span>
        </p>

        <span className="flex items-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            className="lg:text-size-h2 text-size-h3 mx:auto text-cobalt text-center font-serif font-semibold lg:text-start"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            className="text-cobalt"
            onClick={() => {
              copyToClipboard(CONTACT_EMAIL)
              console.log("Email copied to clipboard:", CONTACT_EMAIL)

              toast("Email copié dans le presse-papier !", {
                duration: 2000,

                position: "bottom-right"
              })
            }}
          >
            <CopyIcon />
          </button>
        </span>
      </article>
    </main>
  )
}

export default Page
