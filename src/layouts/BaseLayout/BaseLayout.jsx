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
        <ReactLenis root>
            <div className="w-full h-fit bg-mib-beige-light">
                <Navbar />
                {children}
            </div>
        </ReactLenis>
    )
}

/*

about this... i will need to position the images as i like, so i cant give them all the same class. i was thinking about a layout where i can put my text and children as images, then tell the text where to hook, or state it directly in the layout and let the layout get the images as children and position them as i like, while the text is stuck to the layout top and to the bottom of the screen untile the bottom of the layout doesnt pick it up and bring it up with him*/