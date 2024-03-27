import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import IndexPoint from "../../components/IndexPoint/IndexPoint";
import Quote from "../../components/Quote/Quote";
import ImageRect from "../../components/ImageRect/ImageRect";
import Paragraph from "../../components/Paragraph/Paragraph";

export default function Home() {
    return (
        <BaseLayout>
            <div className="h-fit m-4 mt-8 md:m-8 grid grid-cols-4 md:grid-cols-12 gap-4">
                <div className="col-span-4 md:col-span-12 mt-24 md:mt-44"><img className="w-full" src="/assets/images/svg/madeinbergamo_fold.svg" alt="Made In Bergamo full width logotype" /></div>
            </div>
            <div className="w-full h-[80vh] -mt-4 sm:-mt-5 md:-mt-12 lg:-mt-14 xl:-mt-16 mb-24 md:mb-44"><img className="w-full h-full object-cover" src="assets/images/fullsize/8_1.jpg" alt="" /></div>
            <div className="h-fit m-4 mt-8 md:m-8 grid grid-cols-4 md:grid-cols-12 gap-4">
                <IndexPoint className="col-span-4 md:col-span-6">Introduzione</IndexPoint>
                <Quote
                    className="col-span-4 md:col-start-7 md:col-span-6 mb-24"
                    text="“L’artigianato ci fa sentire radicati, ci dà un senso di appartenenza e ci connette con la nostra storia.” "
                    author="Phyllis George"
                />
                <ImageRect
                    className="col-span-2 md:col-span-6"
                    imageUrl="assets/images/fullsize/1.jpeg"
                    dida="TEST DIDA 111"
                />
                <ImageRect
                    className="col-span-2 md:col-start-10 md:col-span-3"
                    imageUrl="assets/images/fullsize/6_2.jpg"
                    dida="TEST DIDA 222"
                />
                <Paragraph
                    className="col-span-4 md:col-start-5 md:col-span-6"
                    text="La mia tesi nasce da un interesse personale verso il mondo dell’artigianalità nel settore della moda."
                />
            </div>
        </BaseLayout>

    );
}       