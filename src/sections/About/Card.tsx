"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

interface CardProps {
    label: string
    index: number
    description?: string
}


export const Card = ({ label, index, animation, description }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false)


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "flex items-center justify-center relative overflow-hidden",
                "w-full h-44 mb-10 rounded-lg cursor-pointer",
                "group animate-view",
                index % 2 === 0 ? "animate-from-left" : "animate-from-right",
            )}
        >
            <p
                className={cn(
                    "text-center tracking-wide text-4xl text-accent",
                    "basis-1/3 h-full flex items-center justify-center",
                    "bg-foreground",
                )}
            >
                {label}
            </p>
            <div className={cn(
                "basis-2/3 h-full bg-foreground",
                "scale-x-0 origin-left cursor-pointer",
                "group-hover:scale-x-100 duration-100",
                "flex items-center justify-center"
            )}>
                <p className="text-center text-4xl text-accent">
                    {description}
                </p>
            </div>
        </div>
    )
}
