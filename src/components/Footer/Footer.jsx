import { useLenis } from '@studio-freight/react-lenis';

export default function Footer() {
  const lenis = useLenis();

  const handleScrollToTop = () => {
    lenis.scrollTo(0);
  };

  return (
    <div
      className="w-full border-t-2 border-mib-brown-dark h-[60px] flex justify-center items-center p-4 cursor-pointer transition duration-300 hover:bg-mib-brown-dark hover:text-mib-beige-light"
      onClick={handleScrollToTop}
    >
      <span className="text-md font-semibold">Back to top</span>
    </div>
  );
}
