export default function Heading({ text }) {
  return (
    <h1 className="col-span-4 md:col-span-12 h-fit mb-8 md:mb-24 text-center text-6xl leading-loose md:text-[16vw] md:leading-[166px] font-crimson-pro">
      {text}
    </h1>
  );
}
