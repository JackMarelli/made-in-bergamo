/* Layouts */
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import SpyTextGalleryLayout from "../../layouts/SpyTextGalleryLayout/SpyTextGalleryLayout";

/* Components */
import IndexPoint from "../../components/IndexPoint/IndexPoint";
import Quote from "../../components/Quote/Quote";
import ImageRect from "../../components/ImageRect/ImageRect";
import Paragraph from "../../components/Paragraph/Paragraph";
import Heading from "../../components/Heading/Heading";
import FloatingText from "../../components/FloatingText/FloatingText";

export default function Home() {
  return (
    <BaseLayout>
      <div className="h-fit m-4 mt-8 md:m-8 grid grid-cols-4 md:grid-cols-12 gap-4">
        <div className="col-span-4 md:col-span-12 mt-24 md:mt-44">
          <img
            className="w-full"
            src="/assets/images/svg/madeinbergamo_fold.svg"
            alt="Made In Bergamo full width logotype"
          />
        </div>
      </div>
      <div className="w-full h-[80vh] -mt-4 sm:-mt-5 md:-mt-12 lg:-mt-14 xl:-mt-16">
        <img
          className="w-full h-full object-cover"
          src="assets/images/fullsize/8_1.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-fit py-24 px-4 md:py-32 md:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 bg-mib-beige-dark">
        <IndexPoint className="col-span-4 md:col-span-6">
          Introduzione
        </IndexPoint>
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
        <Heading text="Artigianalità" />
        <IndexPoint className="col-span-4 md:col-span-4">
          L’importanza dell’artigianalità e la figura dell’artigiano
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’artigianalità è un metodo produttivo che caratterizza una
                creazione basata sul lavoro manuale, ovvero sulle abilità tecniche dell’artigiano, colui che fin dall’antichità si occupa di creare prodotti dal valore inestimabile, ove per “valore” si intende non solo – e non principalmente – quello economico,
                ma piuttosto quello culturale, in quanto ciascun prodotto conserva uno specifico savoir-faire tramandato di generazione in generazione, con la sua bellezza ed unicità, ma anche con i suoi errori e le sue imperfezioni. Proprio a sottolineare questo carico culturale, si dice che quando si acquista un prodotto artigianale è come se nello stesso tempo ci si appropriasse di
                una fetta di storia; dunque si può affermare che è proprio grazie agli artigiani se tuttora l’artigianalità rappresenta un tratto distintivo di vari Paesi, come quello italiano. (1)"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 my-8 md:my-0"
          imageUrl="assets/images/fullsize/1.jpg"
          dida="TEST DIDA 333" />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’immaginario immediatamente evocato dal termine “artigiano” trova il suo perno nella figura dell’uomo che lavora con i suoi vecchi arnesi all’interno della sua bottega, la quale permette essa stessa di percepire l’elevato grado di conoscenze e abilità manuali dell’uomo che la vive e le dona vita.
                Una prima celebrazione di questa particolare figura di lavoratore era già comparsa all’interno dell’inno omerico al dio protettore degli artigiani, Efesto, il quale concepiva questa professione come portatrice di pace all’interno della civiltà,
                arrivando ad attribuirle il suo stesso inizio. La verità storica è,
                ovviamente, un’altra: gli uomini fabbricavano già da tempo gli
                attrezzi necessari alla produzione, ma l’artigiano celebrato da
                Efesto lavorava per il bene collettivo della società, rendendola
                sedentaria, ed è per questo motivo che i Greci consideravano
                l’artigianato e la comunità due elementi indissolubili. (2)"
        />
        <SpyTextGalleryLayout
          text='L’importanza dell’artigianalità e la figura dell’artigiano"'
          textColor="text-mib-beige-dark"
          backgroundColor="bg-transparent">
          <ImageRect
            className="col-span-4 md:col-start-6 md:col-span-7 my-8 md:my-0 md:my-32"
            imageUrl="assets/images/fullsize/4_2.jpg"
            dida="TEST DIDA 333" />
          <ImageRect
            className="col-span-4 md:col-span-7 my-8 md:my-0"
            imageUrl="assets/images/fullsize/3_1.jpg"
            dida="TEST DIDA 333" />
        </SpyTextGalleryLayout>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’immaginario immediatamente evocato dal termine “artigiano” trova il suo perno nella figura dell’uomo che lavora con i suoi vecchi arnesi all’interno della sua bottega, la quale permette essa stessa di percepire l’elevato grado di conoscenze e abilità manuali dell’uomo che la vive e le dona vita.
                Una prima celebrazione di questa particolare figura di lavoratore era già comparsa all’interno dell’inno omerico al dio protettore degli artigiani, Efesto, il quale concepiva questa professione come portatrice di pace all’interno della civiltà,
                arrivando ad attribuirle il suo stesso inizio. La verità storica è,
                ovviamente, un’altra: gli uomini fabbricavano già da tempo gli
                attrezzi necessari alla produzione, ma l’artigiano celebrato da
                Efesto lavorava per il bene collettivo della società, rendendola
                sedentaria, ed è per questo motivo che i Greci consideravano
                l’artigianato e la comunità due elementi indissolubili. (2)"
        />
      </div>
    </BaseLayout >
  );
}
