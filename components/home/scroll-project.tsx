"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const ScrollProject = () => {
    useGSAP(() => {
        gsap.to(".box", {
            rotation: 1000,
            scrollTrigger: {
                trigger: ".c",
                start: "top top",
                scrub: 1,
                end: "bottom bottom",
            },
        })
    })

    return (
        <section className="container">
            {/* <Image
                priority={false}
                src={Header}
                alt="header"
                className="opacity-30"
            />
            <Image
                priority={false}
                src={Header}
                alt="header"
                className="opacity-30"
            /> */}
            <div className="c">
                <article className="box bg-red-600">
                    <h2>
                        Des services graphiques adaptés à vos besoins et vos
                        envies.
                    </h2>
                    <p>
                        De votre stratégie de marque à la réalisation de vos
                        supports visuels, Studio Aïe vous accompagne dans le
                        développement de votre image de marque. Pour que votre
                        concept soit professionnel,cohérent et ne ressemble à
                        aucun autre !
                    </p>
                    <button>SERVICES GRAPHIQUES</button>
                </article>
            </div>
        </section>
    )
}

export default ScrollProject
