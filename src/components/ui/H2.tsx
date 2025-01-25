import type React from "react"

export default function H2Design2({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
    return (
        <h2 className={`relative text-4xl md:text-6xl font-extrabold mb-12 text-center w-fit mx-auto ${className}`}>
            <span className="relative z-10">{children}</span>
            <span className="absolute -inset-x-10 -inset-y-5 placeholder:inset-0 transform -skew-x-12 bg-accent z-0"></span>
        </h2>
    )
}

