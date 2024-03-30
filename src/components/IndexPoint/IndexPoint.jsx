export default function IndexPoint({ children, className }) {
    const containerClassName = `w-fit h-fit flex flex-row justify-start items-start gap-2 ${className}`;

    return (
        <div className={containerClassName}>
            <div className="hidden md:block w-4 h-4 mt-[2px] bg-mib-brown-dark rounded-full"></div>
            <div className="h-full w-fit uppercase text-[14px] md:text-[.8vw] font-semibold">{children}</div>
        </div>
    );
}