import ScrollProject from "@/components/home/scroll-project"
import { PROJECT } from "@/constants/projects"

const Page = () => {
    const projects = [PROJECT, PROJECT, PROJECT]

    return (
        <main className="flex flex-col items-center gap-8">
            <h1 className="mt-40 text-center font-serif text-9xl text-secondary-300">
                Mes projets
            </h1>
            <p className="mb-40 w-1/2 text-center text-primary-50">
                Photography immortalizes fleeting moments, etching them into
                124.14 x 29 pries. Each photo captures our unique vision of the
                world, shaping who we are. These experiences are irreplaceable,
                forever treasured.
            </p>
            {projects.map((p, i) => (
                <ScrollProject key={i} {...p} />
            ))}
        </main>
    )
}

export default Page
