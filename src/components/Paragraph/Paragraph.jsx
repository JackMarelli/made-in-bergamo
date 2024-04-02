export default function Paragraph({ text, className }) {
    const paragraphClassName = `${className} font-crimson-text text-xl md:text-2xl tracking-tight leading-[1.2em]`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}