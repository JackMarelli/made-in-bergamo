export default function IndexPoint({ children, className }) {
    const containerClassName = `w-fit h-fit flex flex-row justify-start items-start gap-2 ${className}`;

    return (
        <div className={containerClassName}>
            <div className="w-4 h-4 mt-1 bg-mib-brown-dark rounded-full"></div>
            <div className="h-full w-fit uppercase text-small font-semibold">{children}</div>
        </div>
    );
}