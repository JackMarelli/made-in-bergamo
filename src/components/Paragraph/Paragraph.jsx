export default function Paragraph({ text, className }) {
    const paragraphClassName = `mb-2 md:mb-4 lg:mb-6 ${className} font-crimson-text text-xl md:text-2xl tracking-tight leading-[1.2em] select-none pointer-events-none`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}