import Button from "@/components/ui/buttonv2"
import Header from "@/public/header.png"
import Image from "next/image"

const Gallery = () => {
    return (
        <section className="flex flex-col items-center gap-10">
            <h2 className="text-center font-serif text-6xl text-secondary-400">
                Découvrez les dernières réalisations
            </h2>

            <article className="grid grid-cols-4 grid-rows-2 gap-2">
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
                <Image src={Header} alt="" />
            </article>
            <Button variant="white-outlined" size="xl">
                Voir toutes les réalisations
            </Button>
        </section>
    )
}

export default Gallery
