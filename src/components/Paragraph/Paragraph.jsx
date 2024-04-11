export default function Paragraph({ text, className }) {
    const paragraphClassName = `mb-0 md:mb-4 lg:mb-6 font-crimson-text text-xl md:text-2xl tracking-tight leading-[1.2em] select-none pointer-events-none ${className}`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}