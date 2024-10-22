import { Project } from "@/types/project"
import Header from "@/public/header.png"
import Button from "@/components/ui/buttonv2"

export const PROJECT: Project = {
    leftImage: {
        src: Header,
        alt: "Yallah",
    },
    rightImage: {
        src: Header,
        alt: "Yallah",
    },
    children: (
        <article className="space-y-6 text-center">
            <h2 className="w-[50vw] font-serif text-6xl text-secondary-400">
                Des services graphiques adaptés à vos besoins et vos envies.
            </h2>
            <p>
                De votre stratégie de marque à la réalisation de vos supports
                visuels, Studio Aïe vous accompagne dans le développement de
                votre image de marque. Pour que votre concept soit
                professionnel,cohérent et ne ressemble à aucun autre !
            </p>
            <Button variant="white-outlined" size="xl">
                SERVICES GRAPHIQUES
            </Button>
        </article>
    ),
}
