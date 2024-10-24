import Footer from "@/components/footer"
import Gallery from "@/components/home/gallery"
import GridCard from "@/components/home/grid-card"
import ScrollProject from "@/components/home/scroll-project"
import Button from "@/components/ui/buttonv2"
import Link from "@/components/ui/link"
import { JULIA_EMAIL } from "@/constants"
import { PROJECT } from "@/constants/projects"
import Header from "@/public/header.png"
import Image from "next/image"

export default function Home() {
    const projects = [PROJECT]

    return (
        <main className="space-y-16 pb-16">
            <section className="relative mx-auto mb-72 mt-8 flex w-11/12 flex-col items-center justify-center py-64 text-center">
                <Image
                    priority={false}
                    src={Header}
                    alt=""
                    className="absolute left-0 top-0 -z-10 h-full w-full rounded-4xl bg-no-repeat object-cover object-center opacity-55"
                />
                <article className="space-y-6">
                    <h1 className="font-serif text-8xl text-secondary-500">
                        Julia CARO <br /> Directrice artistique
                    </h1>
                    <p className="m-auto w-1/2 text-center text-lg">
                        Spécialisé en design d’identités de marque, je donne vie
                        à vos idées avec des créations uniques, modernes et
                        originales qui reflètent vos valeurs et votre
                        personnalité. Gagnez en visibilité, en impact et soyez
                        fier(e) d’avoir une image qui vous correspond totalement
                        !
                    </p>
                    <div className="mx-auto flex w-fit gap-4">
                        <Button>Voir les services</Button>
                        <Link variant="filled">C'est partiiiii !</Link>
                    </div>
                </article>
            </section>
            <section className="space-y-16 text-center">
                <h2 className="font-serif text-8xl">
                    Un petit coinn où tout a commencé
                </h2>
                <p className="mx-auto w-2/3 text-center text-lg font-medium">
                    Je suis Julia Caro, directrice artistique originaire de
                    l'île de La Réunion. Mon travail s'inspire des paysages
                    bruts et des couleurs vibrantes de mon île, où la nature est
                    une véritable source de créativité. À travers mes créations
                    visuelles, je cherche à raconter des histoires qui capturent
                    l'essence du moment, en mêlant émotion et esthétisme. Mon
                    art est un équilibre entre simplicité et profondeur, un
                    regard personnel sur le monde qui m'entoure.
                </p>
                <Button variant="white-filled" size="xl">
                    Lire la suite
                </Button>
            </section>
            <section className="mx-auto grid w-1/2 grid-cols-2 grid-rows-2 gap-4">
                <GridCard title="Identité visuelle">
                    Élaborer l’ADN profond de votre marque, pour communiquer
                    efficacement et gagner en cohérence.
                </GridCard>
                <GridCard color="primary" title="Identité visuelle">
                    Créer l’univers visuel de votre marque : logotype, couleurs,
                    typographies et éléments visuels.
                </GridCard>
                <GridCard color="primary" title="Supports de com’">
                    Design et mise en page de vos supports de communication
                    imprimés et numériques.
                </GridCard>
                <GridCard title="Illustration">
                    Réalisation d’illustrations sur-mesure pour tous vos
                    projets.
                </GridCard>
            </section>
            {projects.map(({ children, leftImage, rightImage }, i) => (
                <ScrollProject
                    key={i}
                    leftImage={leftImage}
                    rightImage={rightImage}
                >
                    {children}
                </ScrollProject>
            ))}
            <Gallery />
            <section className="mx-auto flex w-fit flex-col items-center gap-10 rounded-2xl bg-primary-600 px-44 py-12">
                <h3 className="text-4xl font-light">
                    Prêt(e) à donner vie à votre projet ?
                </h3>
                <Button variant="white-filled" size="lg" className="font-light">
                    Contacter le studio
                </Button>
            </section>
            <button>{JULIA_EMAIL}</button>
            <Footer />
        </main>
    )
}
