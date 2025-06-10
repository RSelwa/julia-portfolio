"use client"

import { CONTACT_EMAIL } from "@/constants"
import { CopyIcon } from "lucide-react"
import { useCopyToClipboard } from "react-use"
import { toast } from "sonner"

const CopyButton = () => {
  const [, copyToClipboard] = useCopyToClipboard()

  return (
    <button
      className="text-cobalt"
      onClick={() => {
        copyToClipboard(CONTACT_EMAIL)

        toast("Email copié dans le presse-papier !", {
          duration: 2000,

          position: "bottom-right"
        })
      }}
    >
      <CopyIcon />
    </button>
  )
}

export default CopyButton
