export default function Paragraph({ text, className }) {
    const paragraphClassName = `${className} font-crimson-text text-2xl md:text-3xl tracking-tight leading-[1.2em]`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}