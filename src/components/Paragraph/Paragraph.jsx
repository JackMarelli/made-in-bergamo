export default function Paragraph({ text, className }) {
    const paragraphClassName = `my-16 ${className} font-crimson-text text-3xl tracking-tight leading-none`;

    return (
        <div className={paragraphClassName}>
            {text}
        </div>
    )
}