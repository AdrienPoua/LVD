import Image from "next/image"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

interface CardProps {
    title: string
    description: string
    image: string
    index: number
    svg?: React.ReactNode
}

export const Card = ({ image, index, title, description, svg }: CardProps) => {
    const isEven = index % 2 === 0

    return (
        <div
            className={cn(
                "mx-auto w-full max-w-7xl max-h-[700px]",
                "flex flex-col md:flex-row items-center",
                "rounded-xl bg-foreground shadow-lg transition-shadow hover:shadow-xl",
                "overflow-hidden mb-8 md:mb-12",
            )}
        >
            <div className={cn("w-full h-full md:w-1/2", isEven ? "md:order-1" : "md:order-2")}>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-cover h-full w-full"
                />
            </div>
            <div
                className={cn(
                    "w-full md:w-1/2",
                    isEven ? "md:order-2" : "md:order-1",
                    "p-6 md:p-8 flex flex-col justify-center",
                    "text-background"
                )}
            >
                <h3 className="mb-6 text-3xl font-bold text-center">{title}</h3>
                <p className="mb-6 font-secondary text-xl text-background">{description}</p>
                {svg && <div className="mt-4">{svg}</div>}
            </div>
        </div>
    )
}

