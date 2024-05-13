/* Layouts */
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import SpyTextGalleryLayout from "../../layouts/SpyTextGalleryLayout/SpyTextGalleryLayout";

/* Components */
import IndexPoint from "../../components/IndexPoint/IndexPoint";
import Quote from "../../components/Quote/Quote";
import ImageRect from "../../components/ImageRect/ImageRect";
import Paragraph from "../../components/Paragraph/Paragraph";
import Heading from "../../components/Heading/Heading";

export default function Home() {
  return (
    <BaseLayout>
      <div className="h-fit mx-4 mb-8 md:mx-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0">
        <div className="col-span-4 md:col-span-12 mt-24 md:mt-44">
          <img
            className="w-full"
            src="assets/images/svg/madeinbergamo_fold.svg"
            alt="Made In Bergamo full width logotype"
          />
        </div>
      </div>
      <div className="w-full h-[80vh] -mt-4 sm:-mt-5 md:-mt-12 lg:-mt-14 xl:-mt-16">
        <img
          className="w-full h-full object-cover"
          src="assets/images/webp/8_1.webp"
          alt=""
        />
      </div>
      <div className="w-full h-fit py-16 md:py-24 px-4 md:py-32 md:px-8 xl:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-dark">
        <Quote
          className="col-span-4 md:col-start-4 md:col-span-6 mb-12 text-center"
          text="“L’artigianato ci fa sentire radicati, ci dà un senso di appartenenza e ci connette con la nostra storia.” "
          author="Phyllis George"
        />
        <ImageRect
          className="col-span-2 md:col-start-2 md:col-span-5 md:mb-24 md:mt-24 max-h-[27rem]"
          imageUrl="assets/images/webp/home/intro/1.webp"
          dida="Strumenti di sartoria"
        />
        <ImageRect
          className="col-span-2 md:col-span-5 md:mb-32 max-h-[27rem]"
          imageUrl="assets/images/webp/home/intro/2.webp"
          dida="Bergamo alta"
        />
        <IndexPoint className="col-span-4 md:col-span-3">
          Presentazione
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 "
          text="Grazie ad un interesse personale verso il mondo dell’artigianalità nel settore della moda e
          al legame con il mio luogo di nascita, Bergamo, per il progetto di tesi in Fashion
          communication allo IED di Milano ho scelto di creare questo sito web dedicato
          all’artigianalità nella moda bergamasca.
          Il mio desiderio ed obiettivo è quello di promuovere e valorizzare le realtà bergamasche
          che lavorano in questa direzione, ampliando anche le conoscenze dei lettori sul tema
          preso in questione."
        />
        <IndexPoint className="col-span-4 md:col-span-3">
          Introduzione
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Gli argomenti trattati di seguito hanno un obiettivo divulgativo, essi vogliono informare su
          quanto concerne il mondo dell’artigianalità, indagando sul suo sviluppo e sulla sua
          evoluzione nel tempo, fino ad arrivare ad oggi.
          Particolare attenzione è posta anche sulla figura dell’artigiano, con un excursus diacronico
          sul peso culturale del suo lavoro dall’antichità ad oggi, fino a proporne una possibile
          prospettiva futura.
          Dopo un’introduzione generale all’argomento, è presente un capitolo dedicato al territorio
          di Bergamo, il quale tratta le sue peculiarità a livello morfologico e a livello tessile, con un
          approfondimento dei vari aspetti e ambiti che caratterizzano questa zona.
          Infine c’è una sezione che si concentra sulla produzione e sulla sostenibilità, all’interno
          della quale attraverso uno sguardo tecnico, viene spiegato come si produce un capo
          artigianalmente, prendendo come esempio alcuni brand bergamaschi che lavorano in
          questo modo. Di pari passo con l’analisi delle fasi della filiera produttiva, delle tecniche e
          delle materie prime utilizzate, viene trattata anche la questione della sostenibilità, giacché
          in ragione di essa sono stati realizzati nuovi metodi di produzione, basati su un’idea di
          riciclaggio e di recupero dei materiali.
          Oltre a ciò, nel menù del sito, potete trovare una sezione interamente dedicata alle realtà
          presenti sul territorio bergamasco che operano e realizzano le loro collezioni mediante
          questi principi. Qui potete scoprire tutte le loro caratteristiche, la maestria e la sapienza
          artigiana che li differenziano, con interviste insieme alle fondatrici e designer dei brand."
        />
      </div>
      <div className="w-full h-fit py-16 px-4 md:py-32 md:px-8 xl:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <Heading text="L'artigianalità" />
        <IndexPoint className="col-span-4 md:col-span-2">
          L’importanza della artigianalità e la figura dell’artigiano
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’artigianalità è un metodo produttivo che caratterizza una 
          creazione basata sul lavoro manuale, ovvero sulle abilità tecniche
          dell’artigiano, colui che fin dall’antichità si occupa di creare 
          prodotti dal valore inestimabile, ove per “valore” si intende non 
          solo – e non principalmente – quello economico, ma piuttosto quello
          culturale, in quanto ciascun prodotto conserva uno specifico savoir-faire
          tramandato di generazione in generazione, con la sua bellezza 
          ed unicità, ma anche con i suoi errori e le sue imperfezioni.
          Proprio a sottolineare questo carico culturale, si dice che 
          quando si acquista un prodotto artigianale è come se nello stesso 
          tempo ci si appropriasse di una fetta di storia; dunque si può 
          affermare che è proprio grazie agli artigiani se tuttora l’artigianalità
          rappresenta un tratto distintivo di vari Paesi, come quello italiano."
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:-mb-[24rem] md:-mt-[12rem]"
          imageUrl="assets/images/webp/home/cap1/1.webp"
          dida="Test Didascalia 333"
          parallax={false}
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’immaginario immediatamente evocato dal termine “artigiano” trova il suo perno nella figura dell’uomo che lavora con i suoi vecchi arnesi all’interno della sua bottega, la quale permette essa stessa di percepire l’elevato grado di conoscenze e abilità manuali dell’uomo che la vive e le dona vita.
          Una prima celebrazione di questa particolare figura di lavoratore era già comparsa all’interno dell’inno omerico al dio protettore degli artigiani, Efesto, il quale concepiva questa professione come portatrice di pace all’interno della civiltà, arrivando ad attribuirle il suo stesso inizio. La verità storica è, ovviamente, un’altra: gli uomini fabbricavano già da tempo gli attrezzi necessari alla produzione, ma l’artigiano celebrato da Efesto lavorava per il bene collettivo della società, rendendola sedentaria, ed è per questo motivo che i Greci consideravano l’artigianato e la comunità due elementi indissolubili. 2
          "
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Ma anche la cultura giudaica e la successiva cristiana valorizzava la figura dell’artigiano: basti pensare che Gesù Cristo era figlio di Giuseppe, un falegname di umili origini, ed anche questo elemento, assieme al corredo di simboli ed allegorie che lo caratterizza, concorre a definire la sacralità già del Gesù Bambino.	
        Durante il Medioevo, nonostante la mancanza di un’espressione univoca per identificare il mestiere dell’artigiano, nondimeno esso ricopriva un ruolo di grande importanza all’interno della società, giacché creava oggetti per il popolo, dunque la sua era una figura di tutto rispetto.
        "
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’aspirante artigiano, fin dalla tenera età, si doveva iscrivere all’interno di un’associazione, detta Corporazione, volta a tutelare questo mestiere e tutto ciò che lo caratterizzava, e, dopo aver scelto il percorso “specialistico” che più faceva al caso suo, iniziava l’iter di apprendistato, che aveva una durata minima di sette anni, per diventare un artigiano a tutti gli effetti. Per prima cosa il giovane allievo veniva affidato all’insegnamento di un maestro artigiano, il quale gli avrebbe trasmesso i trucchi del mestiere e la maestria. La maestria tecnica, però, non si riferisce solamente all’abilità manuale, poiché si fonda su qualcosa di più profondo, che comprende il pensiero creativo e il sentimento speso e profuso durante il procedimento produttivo, eseguito – si badi bene – con lentezza, ritenuta un valore, poiché permette di dare spazio all’immaginazione e alla riflessione dell’artigiano."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Le idee creative dell’artigiano prendevano vita all’interno della bottega, la sua casa a tutti gli effetti, un piccolo spazio in cui egli viveva con la propria famiglia e svolgeva il proprio mestiere. All’interno del laboratorio erano le competenze tecniche dell’individuo a definirne la collocazione gerarchica, per questo il maestro artigiano aveva il compito di comandare, dettare i parametri di qualità, stabilire i criteri per la promozione dei suoi dipendenti e i ruoli dei lavoratori."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-2 my-4 md:-mt-[12rem]"
          imageUrl="assets/images/webp/home/cap1/2.webp"
          dida="Test Didascalia 333"
          parallax={false}
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Il suo lavoro era considerato prezioso dalla comunità e questo faceva sì che avesse una certa rilevanza, ma dal Quattrocento, con i trattati di Leon Battista Alberti, artista rinascimentale, quest’idea iniziò a scomparire e l’artigiano cominciò a perdere l’importanza che aveva all’inizio, in quanto si cominciò a darne di più all’intelletto rispetto che alla manualità; questo cambiamento proseguì anche in seguito alla nascita delle Accademie, le quali misero in risalto il sapere accademico, evidenziandone le differenze con il mestiere manuale dell’artigiano, fino ad arrivare alle macchine della Rivoluzione Industriale. 6 "
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-5 md:mt-40"
          imageUrl="assets/images/webp/home/cap1/3.webp"
          dida="Test Didascalia 333"
          parallax={true}
        />
        <ImageRect
          className="col-span-4 md:col-start-7 md:col-span-5 md:mt-16 md:mb-24"
          imageUrl="assets/images/webp/home/cap1/4.webp"
          dida="Test Didascalia 333"
          parallax={true}
        />
        <IndexPoint className="col-span-4 md:col-span-2">
          L’artigianato dalla industrializzazione ad oggi
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Durante il periodo della Rivoluzione Industriale, con la nascita delle prime industrie e con l’arrivo delle macchine, l’artigianalità perse in parte il suo valore e prestigio, entrando in una crisi. Queste innovazioni crearono un certo timore negli artigiani, in quanto resero il lavoro più meccanico, con un conseguente depauperamento delle loro abilità tecniche, del loro estro creativo e della qualità alla percezione del proprio lavoro. 
          Nel settore moda, da un’idea di produzione esclusivamente haute couture, in cui i sarti couturier creavano interamente a mano e su misura i vari capi d’abbigliamento, intorno agli anni Sessanta si passò al prêt-à-porter o “moda pronta”, in cui i capi venivano prodotti industrialmente in serie, mantenendo comunque un’idea di qualità, e venduti nei sempre più numerosi negozi e grandi magazzini delle città. Ci fu così una rapida crescita dell’industria di questo settore, con un conseguente aumento delle vendite dei prodotti moda e un cambiamento della percezione di essi, dato anche dalla nascente società dei consumi, in cui i prodotti avevano un ciclo di vita breve e c’era la necessità di fare continui acquisti.
          La nuova produzione di massa, con la conseguente crescita del numero di macchine all’interno del settore produttivo e la diminuzione dei prezzi dei prodotti, portò varie criticità: da allora si è continuato sempre di più a perdere il valore della produzione artigianale e dell’alta manodopera qualificata, in favore di una sempre crescente produzione seriale."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Il valore che l’artigiano conferiva ai prodotti non era però raggiungibile attraverso questo metodo produttivo, perciò, nonostante l’ingresso di nuovi strumenti e tecnologie, la figura dell’artigiano non scomparve mai ed iniziò a coesistere con essi; ciò anche grazie alle iniziative di alcune case di moda italiane, come Brunello Cucinelli, che hanno deciso di istituire delle scuole in cui si insegnano le tecniche produttive artigianali, al fine di introdurre nuove figure all’interno delle sedi produttive e di preservare così il mestiere dell’artigiano."
        />
        <ImageRect
          className="col-span-4 md:col-start-1 md:col-span-3 md:-mt-[32rem]"
          imageUrl="assets/images/webp/home/cap1/5.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Oggi si sta tornando pian piano a dare valore al prodotto artigianale fatto a mano e non in serie, abbracciando l’idea di unicità, originalità e personalizzazione. Anche la figura dell’artigiano odierno si è andata a modificare: oggi è un imprenditore che ha saputo integrare al meglio il sapere manuale con le nuove tecnologie digitali e con i nuovi mezzi per curare la parte di comunicazione e di marketing."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Nel mondo dell’artigianato, alcune zone del territorio italiano, come quella bergamasca, giocano da sempre un ruolo importante grazie alle loro caratteristiche  e ciò ha permesso nel tempo di mettere in risalto questo settore all’interno del panorama internazionale."
        />
        <ImageRect
          className="col-span-4 md:col-start-1 md:col-span-12 md:mt-24"
          imageUrl="assets/images/webp/home/cap1/6.webp"
          dida="Test Didascalia"
        />
      </div>
      <div className="w-full h-fit px-4 py-16 md:py-32 md:px-8 xl:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-dark">
        <Heading text="La territorialità" colorClass="text-mib-brown-dark" />
        <IndexPoint
          className="col-span-4 md:col-span-3"
          colorClass="mib-brown-dark"
        >
          Il territorio bergamasco
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Il territorio bergamasco è una delle zone geografiche maggiormente sviluppate in Europa grazie alla sua posizione strategica vicina a Milano, capoluogo della regione lombarda, e ad altre città come Sondrio, Como, Brescia e Cremona. Inoltre esso si trova sull’asse di comunicazione che collega la Lombardia con il Veneto, diventando così un importante snodo in grado di consentire, ormai da diverso tempo, un ampliamento dei rapporti con vari mercati e Paesi europei."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Questo territorio si può dire essere morfologicamente diversificato, in quanto è composto da zone alpine, lacustri, collinari e pianeggianti. Si alternano paesaggi naturali ed antropizzati, a causa della presenza di distretti produttivi e luoghi infrastrutturati, i quali rendono la zona una delle più rilevanti all’interno del Paese e al di fuori di esso."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-3 md:mt-48"
          imageUrl="assets/images/webp/home/cap2/1.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-4 md:mb-16"
          imageUrl="assets/images/webp/home/cap2/2.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:mt-24"
          imageUrl="assets/images/webp/home/cap2/3.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Altri tratti distintivi del territorio bergamasco sono la sua tradizione imprenditoriale e la sua cultura del lavoro, divenuti con il tempo dei valori radicati all’interno della società, i quali hanno permesso di creare un’identità e un tessuto sociale in grado di unire i suoi abitanti costruendo una comunità che opera in un’ottica di associazionismo, volontariato e aggregazione in vari ambiti. Qui il lavoro oltre ad essere economia, è soprattutto identità e cultura, due aspetti che contribuiscono ad arricchire un territorio all’interno del quale l’impegno e la dedizione del cittadino bergamasco fanno sì che la Bergamasca abbia raggiunto il livello di sviluppo con il quale la ri-conosciamo oggi.
          Tale forma mentis ed il conseguente modus operandi sono stati tramandati di generazione in generazione, radicandosi così in quella che oggi possiamo definire come la cultura del lavoro nella Bergamasca."
        />
        <ImageRect
          className="col-span-4 md:col-start-3 md:col-span-3 md:mt-32"
          imageUrl="assets/images/webp/home/cap2/4.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/webp/home/cap2/5.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:mt-48 md:mb-16"
          imageUrl="assets/images/webp/home/cap2/6.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Le connessioni geografiche e il sistema imprenditoriale sono due punti chiave che hanno consentito anche lo sviluppo di un sistema economico locale di rilievo all’interno del Paese e dell’Unione Europea, grazie all’andamento demografico costante e al tasso di occupazione nel settore terziario. 16
          Questi tratti caratterizzanti del territorio bergamasco hanno portato ad uno sviluppo in ambiti come quello turistico e culturale: Bergamo, insieme a Brescia, ha assunto il ruolo di Capitale italiana della Cultura per il 2023, grazie al suo impegno verso la valorizzazione, la promozione e la preservazione del patrimonio culturale ed artistico."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Una problematica che coinvolge questa zona geografica è però l’inquinamento ambientale, infatti risulta essere una tra le più inquinanti in Italia e in Europa. Questo è causato per una serie di motivi, come ad esempio la sua vicina collocazione alla Pianura Padana, il consumo di suolo, il traffico veicolare e il riscaldamento domestico. Nel tempo, per contrastare questo fenomeno, sono state adottate diverse misure, in costante aggiornamento."
        />
        <SpyTextGalleryLayout
          text="Il territorio Bergamasco"
          textColor="text-mib-beige-light"
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-span-5"
            imageUrl="assets/images/webp/home/cap2/7.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-7 md:col-span-5"
            imageUrl="assets/images/webp/home/cap2/8.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-2 md:col-span-5"
            imageUrl="assets/images/webp/home/cap2/9.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-8 md:col-span-5 md:-mt-20"
            imageUrl="assets/images/webp/home/cap2/10.webp"
            dida="Test Didascalia"
          />
        </SpyTextGalleryLayout>
        <IndexPoint className="col-span-4 md:col-span-3">
          La produzione tessile nella Bergamasca
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Grazie al solido sistema produttivo, alla forte cultura del lavoro e alle connessioni geografiche, si sono sviluppate, fin dai tempi più lontani, numerose aziende artigiane, le quali ad oggi rappresentano il trentasei percento circa del totale delle imprese produttive che si trovano nel territorio bergamasco.
          L’artigianato ha da sempre avuto un ruolo fondamentale e in base alla zona, grazie alle caratteristiche territoriali e culturali, si svilupparono varie produzioni, tra cui quelle della seta e della lana, con la conseguente costruzione di edifici destinati all’attività tessile. 
          L’allevamento dei bachi da seta per la produzione dei bozzoli da cui ricavare il filo di seta portò allo sviluppo dell’industria serica e di due delle principali attività, quelle di filatura e di tessitura, sviluppatesi in gran parte del territorio bergamasco. Inizialmente la seta veniva lavorata a mano, fino a quando, nel Seicento, arrivò il primo filatoio idraulico il quale aumentò la produzione e la commercializzazione, in particolare con i Veneziani, i quali acquistavano soprattutto sete, bozzoli e velluti, con una conseguente crescita dell’attività serica bergamasca; iniziò così ad esserci richiesta di lavoratori anche da Milano e da Paesi esteri. Proprio dall’estero si iniziarono ad importare nel Settecento sete grezze e lane, che venivano lavorate e trasformate nel prodotto finito da esportare, ad esempio in Inghilterra e in Francia. Con il passare del tempo il lavoro e la qualità delle lane e delle sete bergamasche aumentavano e i lavoratori cercavano di emulare le più pregiate esistenti, come quelle orientali."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-4 md:mt-24"
          imageUrl="assets/images/webp/home/cap2/11.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-7 md:col-span-5 md:mb-16"
          imageUrl="assets/images/webp/home/cap2/12.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Si contavano centinaia di filatoi e migliaia di operai, ma intorno alla fine del Settecento si iniziò a registrare un calo dell’attività serica e della produzione di lana; questo calo fu dovuto sia alla concorrenza estera sia alla diminuzione della pastorizia di pecore ed agnelli, causato dall’aumento dei prezzi del fieno e dalla nascente filatura di lino e canapa, che si sviluppò nel nord di Bergamo.
          La diffusione di fabbriche in tutta la provincia continuò nonostante i periodi di declino: ad esempio intorno agli anni Settanta dell'Ottocento nacquero importanti industrie tessili, tra le quali la fabbrica di Cristoforo Crespi, costruita a Crespi d’Adda, uno dei più antichi villaggi operai, il “Cotonificio Val Seriana” a Cene e “l’Honegger-Spoerry” ad Albino."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Il settore tessile bergamasco ha sicuramente visto periodi di declino, ma non ha mai smesso di esistere, nemmeno con l’arrivo della globalizzazione intorno agli anni Duemila.
            Attualmente vari componenti del settore tessile bergamasco lavorano adottando un’ottica di sostenibilità e di cura del territorio in cui operano, continuando a fare ricerca ed introducendo innovazioni per la produzione, sempre a tutela dell’ambiente."
        />
        <SpyTextGalleryLayout
          text="La produzione tessile nella Bergamasca"
          textColor="text-mib-beige-light"
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-start-3 md:col-span-5"
            imageUrl="assets/images/webp/home/cap2/14.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-9 md:col-span-3 md:mb-16"
            imageUrl="assets/images/webp/home/cap2/13.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-0 md:col-span-3 md:-mt-16"
            imageUrl="assets/images/webp/home/cap2/16.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-5 md:col-span-4 md:mt-40"
            imageUrl="assets/images/webp/home/cap2/15.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-10 md:col-span-3 md:mb-16"
            imageUrl="assets/images/webp/home/cap2/17.webp"
            dida="Test Didascalia"
          />
        </SpyTextGalleryLayout>
      </div>
      <div className="w-full h-fit">
        <img src="assets/images/webp/home/cap3/3.webp" alt="" />
      </div>
      <div className="w-full h-fit px-4 py-16 md:px-8 xl:px-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <Heading text="La produzione e la sostenibilità" />
        <IndexPoint className="col-span-4 md:col-span-3">
          La filiera produttiva: dallo sviluppo del prodotto moda al negozio
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="La produzione di un capo d’abbigliamento artigianale segue una filiera produttiva composta da più fasi, le quali in vari casi hanno visto, nel corso del tempo, l’ingresso di innovazioni legate alla tecnologia e alla sostenibilità, fino a farne aspetti fondanti e costituenti della progettazione stessa. Le innovazioni si presentano, infatti, fin dall’inizio della progettazione del prodotto, a partire dalla scelta dei materiali tessili da utilizzare, dalle tecniche di tessitura, di finissaggio, di stampa e di tintura, fondamentali per garantire un elevato livello di qualità. 
          Numerose aziende produttrici e numerosi brand di abbigliamento che operano nella Bergamasca hanno iniziato a lavorare seguendo questa direzione nella loro produzione, la quale segue delle fasi precise che a volte possono variare leggermente in base al brand. Innanzitutto l’ideatore della collezione, dopo aver ideato e disegnato i capi da realizzare, inizia a collaborare con i fornitori selezionati, conducendo uno studio attento e un’analisi meticolosa dei tessuti da utilizzare.
          Brand bergamaschi come Nei Miei Panni – il quale verrà trattato più approfonditamente in seguito, scelgono di utilizzare tessuti di origine naturale, perseguendo un’idea di alta qualità e di sostenibilità, le quali necessitano dell’impiego di materiali che siano salutari per la persona che li indossa e per l’ambiente."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-4 md:mt-24"
          imageUrl="assets/images/webp/home/cap3/2.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-7 md:col-span-5 md:max-h-96"
          imageUrl="assets/images/webp/home/cap3/1.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-6 md:col-span-5 md:-mt-24 md:ms-16 md:mb-16"
          imageUrl="assets/images/webp/home/cap3/3.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="L’ideazione dei capi da realizzare si esprime attraverso degli schizzi realizzati a mano con foglio e matita, tecnica utilizzata ancora oggi in numerose realtà aziendali, oppure, tramite l’ausilio di un computer, con programmi di disegno vettoriale. Qui vengono rappresentate in modo essenziale le linee del capo, le sue cuciture ed i suoi dettagli mediante disegni tecnici, mentre per mostrare la silhouette, il volume e la rotondità si utilizzano disegni tridimensionali che poi si tramutano in figurini d’immagine, i quali rappresentano i capi su una figura."
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:-mt-20"
          imageUrl="assets/images/webp/home/cap3/4.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="I figurini selezionati vengono poi numerati ed inviati alla produzione, dopodiché si realizzano delle copie dei figurini da allegare alla scheda prodotto, la quale viene poi distribuita ai modellisti per la realizzazione dei cartamodelli e del prototipo. Successivamente, i modellisti, tramite l’utilizzo del manichino, provano i tessuti, verificano le silhouette, la vestibilità e, in caso di difetti da correggere effettuano le necessarie modifiche. Una volta terminata questa procedura, il lavoro arriva in sartoria, dove i sarti realizzano a mano le rifiniture e i bordi, applicano eventuali bottoni e simili, spesso anche tramite l’ausilio di macchine da cucire industriali, per garantire una maggiore precisione. Avere dei sarti esperti che lavorano alla realizzazione dei propri capi è fondamentale, in quanto essi sono in grado di conferire l’unicità e la qualità che contraddistinguono i prodotti artigianali.
          Verso la fine della fase produttiva, si tiene la prima prova dei capi: l’ideatore della collezione verifica se gli schizzi sono stati interpretati nel modo corretto e se il risultato raggiunge le aspettative. Infine i capi vengono adattati dalla taglia standard alle diverse taglie richieste per la vendita.
          Una volta che i capi sono pronti si effettua un’analisi dei costi di produzione e di confezione, nonché del tessuto utilizzato e di eventuali accessori per stabilire il prezzo di vendita."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="I capi vengono consegnati al brand da cui sono stati richiesti per essere venduti in negozio o online in base ai canali di vendita, oppure presentati in show-room o in sfilata, ciò dipende dalle dimensioni e delle possibilità economiche del brand.
          Questo specifico processo di sviluppo e realizzazione del prodotto si contraddistingue per il savoir-faire di alta sartorialità riconosciuto in tutto il mondo: valore fondante è proprio la volontà di tramandare il know-how di generazione in generazione, affinché la conoscenza di particolari tecniche non vada perduta nel tempo e, anzi, si arricchisca sempre di più."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-5 md:mt-56 md:mb-16"
          imageUrl="assets/images/webp/home/cap3/5.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-7 md:col-span-5 md:mt-16"
          imageUrl="assets/images/webp/home/cap3/6.webp"
          dida="Test Didascalia"
        />
        <IndexPoint className="col-span-4 md:col-span-3">
          Le tecniche produttive sostenibili
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Negli ultimi anni il tema della sostenibilità si è rivelato una questione particolarmente dibattuta, poiché esso rileva criticità ed individua necessità sempre più urgenti, in quanto l’inquinamento ambientale registra una crescita vertiginosa, causata anche e soprattutto dalle industrie, comprese quelle della moda. Per far fronte a questo problema, all’interno della filiera produttiva sono state introdotte, dalla ricerca delle materie prime fino alla distribuzione del prodotto finito, numerose innovazioni volte a ridurre l’impatto sulle persone e sull’ambiente; per esempio nel territorio di Bergamo, uno tra i più inquinati d’Europa come citato in precedenza, varie realtà aziendali hanno iniziato a perseguire questo orizzonte, adottando specifiche misure."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Per combattere lo sfruttamento delle risorse naturali utilizzate per la produzione delle materie prime, lo spreco dei tessuti avanzati e dei capi dismessi, si è iniziato a lavorare mediante i principi della moda circolare, basata sul riciclo, sulla rigenerazione e sulla riparazione, per donare una nuova vita ai prodotti. Vari brand Bergamaschi – e non solo – hanno iniziato a lavorare adottando questi principi, dunque prestando attenzione all’impiego di materiali sostenibili, prediligendo quelli locali, sui quali è anche possibile effettuare un controllo ed una tracciabilità della filiera, fondamentali per dare ai consumatori consapevolezza di ciò che stanno acquistando ed utilizzando. Si prediligono, ad esempio, fibre biologiche naturali, riciclate o ottenute da risorse rinnovabili, come il lino, esso è infatti uno dei tessuti più scelti per produrre le collezioni, comprese quelle di alcuni brand del territorio di Bergamo."
        />
        <SpyTextGalleryLayout
          text="Le tecniche produttive sostenibili"
          textColor="text-mib-beige-dark"
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-span-5 md:-mt-48"
            imageUrl="assets/images/webp/home/cap3/7.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-7 md:col-span-6"
            imageUrl="assets/images/webp/home/cap3/8.webp"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-3 md:col-span-8 md:mt-20 md:max-h-[40rem]"
            imageUrl="assets/images/webp/home/cap3/9.webp"
            dida="Test Didascalia"
          />
        </SpyTextGalleryLayout>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="In termini di sostenibilità ambientale, gli scarti all’interno della filiera produttiva rappresentano uno dei maggiori punti critici, perché, se non vengono smaltiti correttamente, possono diventare un grande rischio di inquinamento per il territorio, perciò alcune aziende si impegnano a riciclare i tessuti avanzati o scartati, affinché vengano impiegati per realizzare nuovi prodotti. 
          Sono sempre di più i brand che, durante la fase di ricerca delle materie prime da utilizzare per la produzione dei capi, scelgono di utilizzare i tessuti deadstock, ovvero rimanenze di materiali avanzati o invenduti di stock e di precedenti produzioni, i quali, se non venissero riutilizzati, finirebbero nelle discariche. Solitamente si tratta di tessuti di qualità, perché, essendo delle rimanenze, sono già stati sottoposti a controlli che ne garantiscono il pregio, ma un fattore importante è anche quello dell’unicità, in quanto il re-stock non è sempre possibile."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Chi idealizza un capo che segue queste direzioni, inoltre, si pone come ulteriore obiettivo di sensibilizzare gli acquirenti: fa loro comprendere la storia del capo e li esorta ad impegnarsi affinché esso duri nel tempo."
        />
        <IndexPoint className="col-span-4 md:col-span-3">
          Metodi di produzione del brand Nei Miei Panni di Cristina Gamberoni
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="All’interno del territorio bergamasco ci sono vari brand di moda artigianale che lavorano seguendo un metodo produttivo specifico, prestando attenzione anche alla sostenibilità: tra questi è stato preso in analisi Nei Miei Panni, un brand fondato e disegnato da Cristina Gamberoni. Esso nasce come blog e successivamente inizia a produrre capi per bambino, fino ad arrivare a quelli per la donna. Il brand si basa su una produzione esclusivamente artigianale, con principi sostenibili fin dal momento in cui la sua stilista sceglie i tessuti, la cui valutazione rappresenta una fase fondamentale, che caratterizza la qualità dei suoi capi: presso fornitori selezionati, Cristina Gamberoni tocca con mano i tessuti e ne fa un’accurata selezione alla luce delle caratteristiche esaminate. I tessuti in questione sono quasi esclusivamente deadstock e raramente nuovi, ciò si deve alla volontà programmatica di perseguire una linea di produzione che non comprometta il benessere del pianeta, contrastando sprechi ed inquinamento. La stilista bergamasca, infatti, non segue i ritmi dettati da un mercato troppo spesso viziato dal frenetico consumismo, ma decide di produrre con un’idea di moda lenta. Le creazioni sono frutto della sua maestria e del savoir-faire delle sarte. Questa specifica competenza è un fattore determinante per la qualità del prodotto, in quanto esso si fa veicolo di trasmissione del know-how artigianale, il che gli conferisce un valore aggiunto."
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:-mt-64"
          imageUrl="assets/images/webp/home/cap3/10.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Cristina Gamberoni produce i suoi capi in varie taglie e li personalizza in base alla necessità e alla richiesta della cliente (la quale è mediamente una donna di età adulta con un’alta capacità di spesa) e anche in base alla disponibilità del tessuto, infatti, nel caso in cui quello scelto non fosse disponibile, alla cliente ne vengono proposti diversi altri ed il capo diventa così un pezzo realizzato in modo unico, ovvero appositamente per lei. Inoltre, i fornitori e i collaboratori sono tutti situati poco distanti dal suo atelier, così da contenere le emissioni di Co2, ottimizzare i tempi di produzione ed avere un maggiore controllo sulla stessa."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-5 md:mt-36 md:mb-16"
          imageUrl="assets/images/webp/home/cap3/11.webp"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-5 md:mt-16"
          imageUrl="assets/images/webp/home/cap3/12.webp"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Uno dei principi fondamentali sul quale si basa la stilista Cristina Gamberoni di Nei Miei Panni è impegnarsi anche da un punto di vista etico, fissando delle corrette retribuzioni per le persone che si occupano della produzione, così da valorizzare concretamente quanti operano nel settore artigianale.
          La produzione è seguita con grande cura mediante delle particolari lavorazioni artigianali, come ad esempio alcune tipologie di cuciture. Le clienti comprendono l’importanza ed il valore intrinseco del capo, assumendo una maggiore consapevolezza di ciò che acquistano. In linea con questo concetto di cura verso la cliente è anche la scelta dei materiali, infatti si opta per tessuti naturali, come il lino e la lana, che, oltre ad essere garanzia di qualità, sono salutari per la pelle. I tessuti utilizzati da Nei Miei Panni vengono selezionati dalla stilista presso i suoi fornitori, i quali offrono tessuti italiani e dell’alta moda, che essa sceglie con attenzione grazie alla conoscenza dei materiali maturata nel corso degli anni di formazione ed esperienza; da essi nascono quelli che poi diventano i capi delle collezioni, venduti nel suo atelier e sul sito e-commerce del brand."
        />
      </div>
    </BaseLayout>
  );
}
