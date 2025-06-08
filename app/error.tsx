"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// Error boundaries must be Client Components

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => router.push("/")}>Try again</button>
    </div>
  )
}

export default Error
