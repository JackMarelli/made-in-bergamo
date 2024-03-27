import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function BaseLayout({ children }) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    //set lerp value after lenis init
    useEffect(() => {
        if (lenis) {
            lenis.options.lerp = 0.07;
        }
    }, [lenis]);

    return (
        <ReactLenis className="w-full" root>
            <Navbar />
            {children}
        </ReactLenis>
    )
}