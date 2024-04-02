export default function Heading({ text, colorClass }) {
  return (
    <h1 className={`col-span-4 md:col-span-12 h-fit mt-16 mb-8 md:mb-36 text-center text-5xl leading-loose md:text-[16vw] md:leading-[166px] lg:text-[12vw] font-crimson-pro ${colorClass}`}>
      {text}
    </h1>
  );
}
