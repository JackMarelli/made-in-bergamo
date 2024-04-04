export default function Heading({ text, colorClass }) {
  return (
    <h1
      className={`col-span-4 md:col-span-12 h-fit mb-8 md:mb-36 text-center text-5xl md:text-[16vw] md:leading-[166px] lg:text-[12vw] font-crimson-pro select-none pointer-events-none ${colorClass}`}
    >
      {text}
    </h1>
  );
}
