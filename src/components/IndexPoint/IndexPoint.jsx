export default function IndexPoint({ children, className }) {
    const containerClassName = `w-fit h-fit flex flex-row justify-start items-center gap-2 scale-[.9] md:scale-100 lg:scale-[1.1] ${className}`;

    return (
        <div className={containerClassName}>
            <div className="w-4 h-4 bg-mib-brown-dark rounded-full"></div>
            <div className="h-full w-fit uppercase text-small font-semibold">{children}</div>
        </div>
    );
}