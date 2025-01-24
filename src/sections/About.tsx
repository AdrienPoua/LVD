"use client"

import H2 from "@/components/ui/H2"

export default function About() {
    return (
        <section className="py-24 bg-background">
            <H2 className="text-stroke-white  w-fit mx-auto ">
                Qui Sommes-Nous ?
            </H2>
            <Container>
                <Content />
            </Container>
        </section>

    )
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center max-w-3xl ">
            {children}
        </div >
    )
}

const Content = () => {
    return (
        <p>
            Notre équipe de professionnels qualifiés assure un service personnalisé, répondant aux exigences les plus strictes des galeries, musées, artistes et collectionneurs. Nous comprenons la valeur inestimable de chaque œuvre qui nous est confiée.
        </p>
    )
}
