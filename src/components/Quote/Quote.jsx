export default function Quote({ text, author, className }) {
    const blockquoteClassName = `${className} h-fit`;

    return (
        <blockquote className={blockquoteClassName}>
            <div className="w-full h-fit mb-2 md:mb-4 text-[32px] md:text-[64px] text-mib-brown-dark font-crimson-text font-semibold leading-[.95em] tracking-tight">{text}</div>
            <div className="w-full h-fit text-[20px] tracking-tight text-mib-brown-light ">{author}</div>
        </blockquote>
    );
}