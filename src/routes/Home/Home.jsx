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
            <div className="w-full h-[80vh] -mt-4 sm:-mt-5 md:-mt-12 lg:-mt-14 xl:-mt-16"><img className="w-full h-full object-cover" src="assets/images/fullsize/8_1.jpg" alt="" /></div>
            <div className="w-full h-fit py-24 px-4 md:py-32 md:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 bg-mib-beige-dark">
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
                    className="col-span-4 md:col-start-5 md:col-span-6 mt-16"
                    text="La mia tesi nasce da un interesse personale verso il mondo dell’artigianalità nel settore della moda."
                />
                <Paragraph
                    className="col-span-4 md:col-start-5 md:col-span-6"
                    text="L'elaborato andrà innanzitutto ad indagare, attraverso uno sguardo tecnico, come avviene la
                    produzione di un prodotto di moda artigianale, analizzandone ogni sua fase lungo la filiera, con
                    l’obiettivo di approfondire un tema che ormai da sempre contraddistingue l’Italia nel mondo: il
                    savoir-faire artigianale italiano. Oltre a voler condurre un'analisi del processo produttivo, il fine ultimo sarà quello di andare a
                    valorizzarlo, promuoverlo e preservarlo.
                     La ricerca si concentrerà poi in un luogo specifico dell’Italia, ovvero nel territorio bergamasco.
                    Verrà svolto un approfondimento dei vari aspetti e ambiti che caratterizzano questa zona, insieme ad uno studio di alcuni brand di moda artigianali che si sono sviluppati nel territorio di Bergamo. Il primo focus del mio lavoro verterà sul concetto di artigianalità e sulla figura dell'artigiano, con un excursus diacronico sul peso culturale del suo lavoro e sulla sua evoluzione, dall’antichità ad oggi, fino a proporne una possibile prospettiva futura.
                    Di pari passo con l’analisi delle fasi della filiera produttiva, delle tecniche e delle materie prime
                    utilizzate, verrà trattata anche la questione della sostenibilità, giacché in ragione di essa sono
                    stati realizzati nuovi metodi di produzione, basati su un’idea di riciclaggio e di recupero dei
                    materiali.
                    "
                />
                <Paragraph
                    className="col-span-4 md:col-start-5 md:col-span-6"
                    text="Infine, mediante delle interviste ai brand artigianali del territorio bergamasco, in particolare Nei Miei Panni e Sophie Stique*, si analizzerà l’argomento della tesi da un punto di vista interno, fondamentale per comprendere al meglio quelle che sono la maestria e la sapienza artigiana che differenziano questi brand."
                />
            </div>
            <div className="w-full h-fit py-24 px-4 md:py-32 md:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 bg-mib-beige-light">
                <h1 className="col-span-4 md:col-span-12 h-fit text-center text-4xl md:text-[190px] leading-[166px] font-crimson-pro">Artigianalità</h1>  
            </div>
        </BaseLayout>

    );
}       