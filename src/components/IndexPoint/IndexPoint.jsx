export default function IndexPoint({ children, className, colorClass }) {
    const containerClassName = `w-fit h-fit pt-1 flex flex-row justify-start items-start gap-2 ${className} text-${colorClass}`;

    return (
        <div className={containerClassName}>
            <div className={`hidden md:block w-[14px] h-[14px] rounded-full bg-${colorClass}`}></div>
            <div className="h-full w-fit uppercase text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-none select-none pointer-events-none">{children}</div>
        </div>
    );
}