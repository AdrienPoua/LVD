"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ clients }: { clients: { label: string, type: string, image: string }[] }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(clients.length / 3);

    const firstPart = clients.slice(0, third);
    const secondPart = clients.slice(third, 2 * third);
    const thirdPart = clients.slice(2 * third);

    return (
        <div
            className={cn("h-[50rem] scrollbar-hidden overflow-hidden items-start overflow-y-auto w-full no-scrollbar")}
            ref={gridRef}
        >
            <CardContainer>
                <div className="grid gap-10">
                    {firstPart.map((client, index) => (
                        <Card key={"grid-1" + index} el={client} index={index} image={client.image} type={client.type} label={client.label} translate={translateFirst} />
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((client, idx) => (
                        <Card key={"grid-2" + idx} el={client} index={idx} image={client.image} type={client.type} label={client.label} translate={translateSecond} />
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((client, idx) => (
                        <Card key={"grid-3" + idx} el={client} index={idx} image={client.image} type={client.type} label={client.label} translate={translateThird} />
                    ))}
                </div>
            </CardContainer>
        </div>
    );
};

const Card = ({ el, index, image, type, label, translate }: { el: { label: string, type: string, image: string }, index: number, image: string, type: string, label: string, translate: MotionValue<number> }) => {
    return (
        <motion.div
            style={{ y: translate }}
            className="relative overflow-hidden"
        >
            <ImageCustom src={image} alt={label} />
            <TypeBand>{type}</TypeBand>
            <Title>{label}</Title>
        </motion.div>
    );
};

const ImageCustom = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <Image src={src} alt={alt} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" height="400" width="400" />
    );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 px-10 ">
            <SmoothShadow />
            {children}
        </div>
    );
};

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-center text-xl font-bold">{children}</p>
    );
};

const TypeBand = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="bg-accent absolute top-0 inset-x-0 w-full h-10 flex items-center justify-center font-bold text-xl rounded-t-lg">{children}</p>
    );
};

const SmoothShadow = () => {
    return (
        <div className="absolute inset-0"></div>
    );
};
