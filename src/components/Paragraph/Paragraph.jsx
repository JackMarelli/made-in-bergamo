export default function Paragraph({ text, className }) {
    const paragraphClassName = `my-2 ${className} font-crimson-text text-xl md:text-3xl tracking-tight leading-[1.2em]`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}