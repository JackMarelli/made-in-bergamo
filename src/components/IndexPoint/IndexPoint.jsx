export default function IndexPoint({ children, className}) {
    const containerClassName = `w-fit h-fit pt-1 mb-4 flex flex-row justify-start items-start gap-2 ${className} text-mib-brown-dark`;

    return (
        <div className={containerClassName}>
            <div className={`hidden md:block w-[14px] h-[14px] rounded-full bg-mib-brown-dark mt-[2px]`}></div>
            <div className="h-full w-fit uppercase text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[1.2rem] tracking-[0px] select-none pointer-events-none">{children}</div>
        </div>
    );
}