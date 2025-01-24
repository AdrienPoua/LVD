
import { LampContainer } from "@/components/ui/lamp"

export default function H2({ children, className }: Readonly<{ children: React.ReactNode, className?: string }>) {
    return (
        <h1 className={`relative text-6xl mb-12 text-center ${className}max-w-7xl mx-auto my-20`}>
            <LampContainer>
                {children}
            </LampContainer>
        </h1>
    )
}