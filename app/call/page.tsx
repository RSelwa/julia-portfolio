import Calendly from "@/components/calendly"

const Page = () => {
  return (
    <main className="min-h-full-height">
      <Calendly />
    </main>
  )
}

export const metadata = {
  title: "Prendre rendez-vous – Julia CARO",
  description:
    "Planifiez un appel avec Julia CARO, directrice artistique à Paris, pour discuter de votre projet de communication visuelle ou digitale.",
  openGraph: {
    title: "Prendre rendez-vous – Julia CARO",
    description:
      "Planifiez un appel avec Julia CARO, directrice artistique à Paris, pour discuter de votre projet de communication visuelle ou digitale."
  }
}

export default Page
