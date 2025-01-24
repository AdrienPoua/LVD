import TitleEffect from "./titleEffect";

export default function H2({ children, className }: Readonly<{ children: React.ReactNode, className?: string }>) {
    return (
        <h2 className={`relative text-6xl mb-12 text-center ${className} `}>
            {children}
            <TitleEffect />
        </h2>
    )
}