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
      <div className="h-fit m-4 mt-8 md:m-8 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0">
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
      <div className="w-full h-fit py-16 md:py-24 px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-dark">
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
          Introduzione
        </IndexPoint>
        <Quote
          className="col-span-4 md:col-start-7 md:col-span-6 mb-12"
          text="“L’artigianato ci fa sentire radicati, ci dà un senso di appartenenza e ci connette con la nostra storia.” "
          author="Phyllis George"
        />
        <ImageRect
          className="col-span-2 md:col-span-6 mb-8"
          imageUrl="assets/images/fullsize/1.jpeg"
          dida="Test Didascalia 111"
        />
        <ImageRect
          className="col-span-2 md:col-start-10 md:col-span-3 mb-8"
          imageUrl="assets/images/fullsize/6_2.jpg"
          dida="Test Didascalia 222"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 "
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
      <div className="w-full h-fit py-16 px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <Heading text="Artigianalità" />
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
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
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/1.jpg"
          dida="Test Didascalia 333"
          parallax={false}
        />
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
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-start-6 md:col-span-7 md:my-0 md:my-32"
            imageUrl="assets/images/fullsize/4_2.jpg"
            dida="Test Didascalia 333"
          />
          <ImageRect
            className="col-span-4 md:col-span-7 md:my-0"
            imageUrl="assets/images/fullsize/3_1.jpg"
            dida="Test Didascalia 333"
          />
        </SpyTextGalleryLayout>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="La parola utilizzata dai greci arcaici per identificare l’artigiano era demiourgos, composta da demios, ovvero “appartenente al popolo”, ed ergon, “opera, lavoro”, e durante l’età arcaica, all’interno della società, i demiourgoi rappresentavano l’odierna classe media, posizionandosi tra gli aristocratici e gli schiavi. "
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Ma anche la cultura giudaica e la successiva cristiana valorizzava la figura dell’artigiano: basti pensare che Gesù Cristo era figlio di Giuseppe, un falegname di umili origini, ed anche questo elemento, assieme al corredo di simboli ed allegorie che lo caratterizza, concorre a definire la sacralità già del Gesù Bambino. Durante il Medioevo, nonostante la mancanza di un’espressione univoca per identificare il mestiere dell’artigiano, nondimeno esso ricopriva un ruolo di grande importanza all’interno della società, giacché creava oggetti per il popolo, dunque la sua era una figura di tutto rispetto. (3)"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 my-4"
          imageUrl="assets/images/fullsize/4.png"
          dida="Test Didascalia 333"
          parallax={false}
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="L’aspirante artigiano, fin dalla tenera età, si doveva iscrivere all’interno di un’associazione, detta Corporazione, volta a tutelare questo mestiere e tutto ciò che lo caratterizzava, e, dopo aver scelto il percorso “specialistico” che più faceva al caso suo, iniziava l’iter di apprendistato, che aveva una durata minima di sette anni, per diventare un artigiano a tutti gli effetti. Per prima cosa il giovane allievo veniva affidato all’insegnamento di un maestro artigiano, il quale gli avrebbe trasmesso i trucchi del mestiere. Ad essere trasmessa e tramandata era la maestria, termine che evoca una cultura dell’operare e del vivere strettamente legata all’aspirazione alla qualità, desiderio e motivazione del lavoro degli artigiani, i quali miravano a creare un prodotto che eccellesse da ogni punto di vista. È questo un aspetto fondamentale, poiché fa sì che l’artigianalità sia, ancora, una disciplina di rilievo e di tradizione. La maestria tecnica, però, non si riferisce solamente all’abilità manuale, poiché si fonda su qualcosa di più profondo, che comprende il pensiero creativo e il sentimento speso e profuso durante il procedimento produttivo, eseguito – si badi bene – con lentezza, ritenuta un valore, poiché permette di dare spazio all’immaginazione e alla riflessione dell’artigiano. (4)"
        />
        <SpyTextGalleryLayout
          text='L’importanza dell’artigianalità e la figura dell’artigiano"'
          textColor="text-mib-beige-dark"
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-start-6 md:col-span-7 md:my-32"
            imageUrl="assets/images/fullsize/4_2.jpg"
            dida="Test Didascalia 333"
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="assets/images/fullsize/3_1.jpg"
            dida="Test Didascalia 333"
          />
        </SpyTextGalleryLayout>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Le idee creative dell’artigiano prendevano vita all’interno della bottega, la sua casa a tutti gli effetti, un piccolo spazio in cui egli viveva con la propria famiglia e svolgeva il proprio mestiere. All’interno del laboratorio erano le competenze tecniche dell’individuo a definirne la collocazione gerarchica, per questo il maestro artigiano aveva il compito di comandare, dettare i parametri di qualità, stabilire i criteri per la promozione dei suoi dipendenti e i ruoli dei lavoratori. (5) Il suo lavoro era considerato prezio so dalla comunità e questo faceva sì che avesse una certa rilevanza, ma dal Quattrocento, con i trattati di Leon Battista Alberti, artista rinascimentale, quest’idea iniziò a scomparire e l’artigiano cominciò a perdere l’importanza che aveva all’inizio, in quanto si cominciò a darne di più all’intelletto rispetto che alla manualità; questo cambiamento proseguì anche in seguito alla nascita delle Accademie, le quali misero in risalto il sapere acca demico, evidenziandone le differenze con il mestiere manuale dell’artigiano, fino ad arrivare alle macchine della Rivoluzione Industriale. (6)"
        />
      </div>
      <div className="w-full h-[80vh]">
        <img
          className="w-full h-full object-cover"
          src="assets/images/fullsize/4_2.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-fit py-16 md:py-24 px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
          L’artigianato dall’industrializzazione ad oggi
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Durante il periodo della Rivoluzione Industriale, con la nascita delle prime industrie e con l’arrivo delle macchine, l’artigianalità perse in parte il suo valore e prestigio, entrando in una crisi. Queste innovazioni crearono un certo timore negli artigiani, in quanto resero il lavoro più meccanico, con un conseguente depauperamento delle loro abilità tecniche, del loro estro creativo e della qualità alla percezione del proprio lavoro. Nel settore moda, da un’idea di produzione esclusivamente haute couture, in cui i sarti couturier creavano interamente a mano e su misura i vari capi d’abbigliamento, intorno agli anni Sessanta si passò al prêt-à-porter o “moda pronta”, in cui i capi venivano prodotti industrialmente in serie, mantenendo comunque un’idea di qualità, e venduti nei sempre più numerosi negozi e grandi magazzini delle città. Ci fu così una rapida crescita dell’industria di questo settore, con un conseguente aumento delle vendite dei prodotti moda e un cambiamento della percezione di essi, dato anche dalla nascente società dei consumi, in cui i prodotti avevano un ciclo di vita breve e c’era la necessità di fare continui acquisti. La nuova produzione di massa, con la conseguente crescita del numero di macchine all’interno del settore produttivo e la diminuzione dei prezzi dei prodotti, portò varie criticità: da allora si è continuato sempre di più a perdere il valore della produzione artigianale e dell’alta manodopera qualificata, in favore di una sempre crescente produzione seriale. (7)"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Il valore che l’artigiano conferiva ai prodotti non era però raggiungibile attraverso questo metodo produttivo, perciò, nonostante l’ingresso di nuovi strumenti e tecnologie, la figura dell’artigiano non scomparve mai ed iniziò a coesistere con essi; ciò anche grazie alle iniziative di alcune case di moda italiane, che hanno deciso di istituire delle scuole in cui si insegnano le tecniche produttive artigianali, al fine di introdurre nuove figure all’interno delle sedi produttive e di preservare così il mestiere dell’artigiano. Ad esempio nel 2013 Brunello Cucinelli ha aperto la “Scuola di Alto Artigianato Contemporaneo per le Arti e i Mestieri” nel borgo di Solomeo, con l’obiettivo di istruire i giovani tramandando loro le tecniche artigianali, per valorizzarle e salvaguardarle, proponendo diverse discipline che vanno dalla modelleria e sartoria femminile e maschile fino alle arti murarie. 8"
        />
        <ImageRect
          className="col-span-4 md:col-span-10"
          imageUrl="assets/images/fullsize/10.jpg"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text="Anche un’altra casa di moda italiana, Bottega Veneta, ha annunciato che aprirà, a marzo 2024, a Povolaro Dueville, in provincia di Vicenza, “l’Accademia Labor et Ingenium”, con l’obiettivo di formare cinquanta studenti all’anno da inserire al termine del corso all’interno dei laboratori di produzione del brand: gli allievi verranno istruiti dai maestri artigiani mediante attività di formazione pratiche e teoriche in laboratorio, mentre i dipendenti potranno seguire corsi di aggiornamento per approfondire e sviluppare le loro competenze. 9 Non è solo il settore della moda a preoccuparsi di salvaguardare il mondo dell’artigianato, ma numerose sono le iniziative in ogni suo ambito: per esempio a Venezia si tiene “Homo Faber”, una manifestazione culturale organizzata dalla Michelangelo Foundation for Creativity and Craftsmanship 10, con mostre, manufatti e artigiani provenienti da ogni parte del mondo, per celebrare la creatività dell’uomo e le eccellenze dei mestieri d’arte contemporanei. "
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6"
          text='L’edizione inaugurale si è tenuta nel 2018 e la prossima è attesa per il 2024. 11 Grazie anche a queste iniziative oggi si sta tornando 9 Cardo G., "Bottega Veneta lancia l’Accademia Labor et ingenium per il futuro dell’artigianato", Milano Finanza, 16/10/2023 10 La Michelangelo Foundation for Creativity and Craftsmanship è un ente privato, internazionale e senza fini di lucro con sede a Ginevra, in Svizzera. Creato da Johann Rupert e Franco Cologni, si pone la missione di preservare, incoraggiare e valorizzare i mestieri d’arte d’eccellenza. 11 Menetto S., "A Venezia torna Homo Faber per celebrare la creatività", Il Sole 24 Ore, 14/04/2022 12 Innocenzi L., “La storia dell’artigianato, un’arte senza tempo” pian piano a dare valore al prodotto artigianale fatto a mano e non in serie, abbracciando l’idea di unicità, originalità e personalizzazione. Anche la figura dell’artigiano odierno si è andata a modificare: oggi è un imprenditore che ha saputo integrare al meglio il sapere manuale con le nuove tecnologie digitali e con i nuovi mezzi per curare la parte di comunicazione e di marketing. 12 I progetti citati, oltre a dare attenzione al mondo dell’artigianato, puntano anche alla valorizzazione del territorio italiano, il quale, grazie alle sue caratteristiche e alla sua storia, ricopre un ruolo fondamentale nel panorama internazionale dell’artigianato.'
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-10"
          imageUrl="assets/images/fullsize/10.jpg"
          dida="Test Didascalia"
        />
      </div>
      <div className="w-full h-fit px-4 md:py-16 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-dark">
        <Heading text="Territorialità" colorClass="text-mib-brown-dark" />
        <IndexPoint
          className="col-span-4 md:col-span-3"
          colorClass="mib-brown-dark"
        >
          Il territorio bergamasco
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Il territorio bergamasco è una delle zone geografiche maggiormente sviluppate in Europa grazie alla sua posizione strategica vicina a Milano, capoluogo della regione lombarda, e ad altre città come Sondrio, Como, Brescia e Cremona. Inoltre esso si trova sull’asse di comunicazione che collega la Lombardia con il Veneto, diventando così un importante snodo in grado di consentire, ormai da diverso tempo, un ampliamento dei rapporti con vari mercati e Paesi europei. 13 Questo territorio si può dire essere morfologicamente diversificato, in quanto è composto da zone alpine, lacustri, collinari e pianeggianti. Si alternano paesaggi naturali ed antropizzati, a causa della presenza di distretti produttivi e luoghi infrastrutturati, i quali rendono la zona una delle più rilevanti all’interno del Paese e al di fuori di esso. 14"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/14.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/4_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/5_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/9.jpg"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Da sempre il territorio bergamasco si è differenziato per la sua tradizione imprenditoriale e per la sua cultura del lavoro, divenuti con il tempo dei valori radicati all’interno della società, i quali hanno permesso di creare un’identità e un tessuto sociale molto forti, in grado di unire i suoi abitanti costruendo una comunità che opera in un’ottica di associazionismo, volontariato e aggregazione in vari ambiti. Qui il lavoro non è solo economia, ma è soprattutto identità e cultura, due aspetti che arricchiscono un territorio all’interno del quale l’impegno e la dedizione del cittadino bergamasco fanno sì che la Bergamasca abbia raggiunto il livello di sviluppo con il quale la ri-conosciamo oggi e che non smetta mai di evolvere. Questo impegno costante permette anche di creare nuovi posti di lavoro ed iniziative volte all’integrazione di gruppi più deboli e svantaggiati, come i tanti giovani alla ricerca di una posizione lavorativa, consentendo loro, nella maggior parte dei casi, un inserimento in tempi brevi nel mondo del lavoro, nonostante l’odierna crisi. Tale forma mentis ed il conseguente modus operandi sono stati tramandati di generazione in generazione, radicandosi così in quella che oggi possiamo definire come la cultura del lavoro nella Bergamasca. Cospicui sono dunque gli investimenti nel settore lavorativo, ma anche in quello sociale e territoriale, con il fine di formare giovani e non e di trasmettere loro competenze in grado di portare a proficue innovazioni. 15"
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-6"
          imageUrl="assets/images/fullsize/10_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-9 md:col-span-3"
          imageUrl="assets/images/fullsize/3.jpg"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Le connessioni geografiche e il solido si stema imprenditoriale sono due punti chiave che hanno consentito anche lo svi luppo di un sistema economico locale di rilievo all’interno del Paese e dell’Unione Europea, grazie all’andamento demografi co costante e all’alto tasso di occupazione nel settore terziario, di fondamentale im portanza. 16 Questi tratti caratterizzanti del territorio bergamasco hanno portato anche ad uno sviluppo in ambiti di più ampio respiro, come quello culturale: non a caso, Berga mo, insieme a Brescia, ha assunto il ruolo di Capitale italiana della Cultura per il 2023, grazie al suo impegno verso la valorizza zione, la promozione e la preservazione del suo patrimonio culturale ed artistico, in ra gione della presenza sul territorio di varie risorse in tal senso, come lo storico borgo di Città Alta, i molti e vari musei, le mostre d’arte, i monasteri e le chiese, i castelli e gli antichi paesi storici in cui sono stati rinve nuti resti archeologici e fossili. Il territorio della Bergamasca dispone an che di una vasta offerta in termini di turi smo con la possibilità di visitare località montane, lacustri, termali e luoghi situati nella pianura, grazie ai quali si registra una costante domanda turistica, con conse guenti ricavi e nuovi investimenti. 17"
        />
        <SpyTextGalleryLayout
          text="Il territorio Bergamasco"
          textColor="text-mib-beige-light"
          backgroundColor="bg-transparent"
        >
          <ImageRect
            className="col-span-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/3.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/5_1.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/13.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/14.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/16.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-span-3 md:max-h-80 md:overflow-hidden"
            imageUrl="assets/images/fullsize/27.jpg"
            dida="Test Didascalia"
          />
        </SpyTextGalleryLayout>
      </div>
      <div className="w-full h-fit px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
          La produzione tessile Bergamasca
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Grazie al solido sistema produttivo, alla forte cultura del lavoro e alle connessioni geografiche, si sono svi luppate, fin dai tempi più lontani, numerose aziende artigiane, le quali ad oggi rappresentano il trentasei percento circa del totale delle imprese produttive che si trovano nel territorio bergamasco. 18 L’artigianato ha da sempre avuto un ruolo fondamen tale e in base alla zona, grazie alle caratteristiche ter ritoriali e culturali, si svilupparono varie produzioni, tra cui quelle della seta e della lana, con la conseguente costruzione di edifici destinati all’attività tessile. L’allevamento dei bachi da seta per la produzione dei bozzoli da cui ricavare il filo di seta portò allo svilup po dell’industria serica e di due delle principali attività, quelle di filatura e di tessitura, sviluppatesi in gran parte del territorio bergamasco. Inizialmente la seta veniva lavorata a mano, fino a quando, nel Seicento, arrivò il primo filatoio idraulico il quale aumentò la produzione e la commercializzazione, in particolare con i Venezia ni, i quali acquistavano soprattutto sete, bozzoli e vellu ti, con una conseguente crescita dell’attività serica ber gamasca; iniziò così ad esserci richiesta di lavoratori anche da Milano e da Paesi esteri. Proprio dall’estero si iniziarono ad importare nel Settecento sete grezze e lane, che venivano lavorate e trasformate nel prodotto finito da esportare, ad esempio in Inghilterra e in Fran cia. "
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Con il passare del tempo il lavoro e la qualità delle lane e delle sete bergamasche aumentavano e i lavo ratori cercavano di emulare le più pregiate esistenti, come quelle orientali. Si contavano centinaia di filatoi e migliaia di operai, ma intorno alla fine del Settecento si iniziò a registrare un calo dell’attività serica e della produzione di lana; questo calo fu dovuto sia alla con correnza estera sia alla diminuzione della pastorizia di pecore ed agnelli, causato dall’aumento dei prezzi del fieno e dalla nascente filatura di lino e canapa, che si sviluppò nel nord di Bergamo."
        />
        <SpyTextGalleryLayout
          text="La produzione tessile Bergamasca"
          textColor="text-mib-beige-dark"
        >
          <ImageRect
            className="col-span-4 md:col-span-5"
            imageUrl="assets/images/fullsize/3_1.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-7 md:col-span-6 mt-48"
            imageUrl="assets/images/fullsize/28.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-span-8"
            imageUrl="assets/images/fullsize/4_2.jpg"
            dida="Test Didascalia"
          />
          <ImageRect
            className="col-span-4 md:col-start-8 md:col-span-5"
            imageUrl="assets/images/fullsize/5_2.jpg"
            dida="Test Didascalia"
          />
        </SpyTextGalleryLayout>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="La diffusione di fabbriche in tutta la

          provincia continuò nonostante i periodi di declino: ad esempio intorno agli
          
          anni Settanta dell'Ottocento nacquero
          importanti industrie tessili, tra le quali
          la fabbrica di Cristoforo Crespi, costruita a Crespi d’Adda, uno dei più antichi
          villaggi operai pensato per la vita quotidiana del lavoratore, con abitazioni e
          strutture per il suo tempo libero, il “Cotonificio Val Seriana” a Cene e “l’Honegger-Spoerry” ad Albino.
          Il settore tessile bergamasco ha sicuramente visto periodi di declino, ma
          non ha mai smesso di esistere, nemmeno con l’arrivo della globalizzazione
          – intorno agli anni Duemila, in cui si
          temeva la fine di questa lunga tradizione con l’annullamento dell’Accordo
          Multifibre nel 2005, il quale azzerò i
          dazi doganali e favorì, di conseguenza,
          l’importazione di prodotti dall’estero a
          prezzi nettamente inferiori rispetto a
          quelli locali, con la concorrenza cinese
          o la recente pandemia."
        />
        <ImageRect
          className="col-span-4 md:col-span-6 md:mt-16"
          imageUrl="assets/images/fullsize/7_2.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-6 md:mt-48"
          imageUrl="assets/images/fullsize/6_2.jpg"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Varie aziende, invece, sono riuscite a superare la
          crisi e a rilanciarsi ampliandosi sul mercato, offrendo nuovi servizi e mantenendo l’intera filiera
          produttiva sotto la propria gestione, così da diffondere il prodotto italiano in tutto il mondo; alcuni
          esempi ne sono il Gruppo Albini, la Carvico, la Perofil, la Martinelli Ginetto, solide aziende ad oggi
          molto attive. 21
          Oltre alle fabbriche di filatura e tessitura, ci sono
          anche aziende che si occupano esclusivamente di
          tintoria e brand di moda che presentano collezioni.
          Attualmente vari componenti del settore tessile
          bergamasco lavorano adottando un’ottica di sostenibilità e di cura del territorio in cui operano,  
          continuando a fare ricerca ed introducendo innovazioni per la produzione, sempre a tutela dell’ambiente."
        />
        <ImageRect
          className="col-span-4 md:col-span-5 md:mb-24"
          imageUrl="assets/images/fullsize/10_2.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/11_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/9_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-4 md:col-span-3 md:mt-12"
          imageUrl="assets/images/fullsize/12_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3"
          imageUrl="assets/images/fullsize/13_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:-mt-12"
          imageUrl="assets/images/fullsize/12_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-start-3 md:col-span-2 md:mt-24 max-h-80 overflow-hidden"
          imageUrl="assets/images/fullsize/14_1.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-2 md:mt-24 max-h-80 overflow-hidden"
          imageUrl="assets/images/fullsize/16.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-2 md:mt-24 max-h-80 overflow-hidden"
          imageUrl="assets/images/fullsize/17.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-2 md:mt-24 max-h-80 overflow-hidden"
          imageUrl="assets/images/fullsize/18.jpg"
          dida="Test Didascalia"
        />
      </div>
      <div className="w-full h-fit px-4 md:py-16 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light">
        <Heading text="Produzione e Sostenibilità" />
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
          La filiera produttiva: dallo sviluppo del prodotto moda al negozio
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="La produzione di un capo d’abbigliamento segue una filiera produttiva composta da più fasi,
          le quali in vari casi hanno visto, nel corso del
          tempo, l’ingresso di innovazioni legate alla tecnologia e alla sostenibilità, fino a farne aspetti fondanti e costituenti della progettazione
          stessa. Le innovazioni si presentano, infatti, fin
          dall’inizio della progettazione del prodotto, a
          partire dalla scelta dei materiali tessili da utilizzare, dalle tecniche di tessitura, di finissaggio, di
          stampa e di tintura, fondamentali per garantire
          un elevato livello di qualità."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Numerose aziende produttrici e numerosi brand
          di abbigliamento che operano nella Bergamasca hanno iniziato a lavorare seguendo questa
          direzione nella loro produzione, la quale segue
          delle fasi precise che a volte possono variare leggermente in base al brand. Innanzitutto
          l’ideatore della collezione, dopo aver ideato e
          disegnato i capi da realizzare, inizia a collaborare con i fornitori selezionati, conducendo uno
          studio attento e un’analisi meticolosa dei tessuti da utilizzare. Il fashion designer deve essere
          ben consapevole del fatto che non tutti i tessuti
          possono essere impiegati per ogni tipo di capo,
          ma possono presentare delle limitazioni a livello
          pratico e visivo."
        />
        <ImageRect
          className="col-span-4 md:col-start-3 md:col-span-3 md:max-h-96 overflow-hidden"
          imageUrl="assets/images/fullsize/1_2.jpg"
          dida="Knitwear fabric"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:max-h-96 overflow-hidden"
          imageUrl="assets/images/fullsize/2_1.jpg"
          dida="Seta di gelso"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 md:max-h-96 overflow-hidden"
          imageUrl="assets/images/fullsize/3_2.jpg"
          dida="Lino"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Brand bergamaschi come Nei Miei Panni e
          Sophie Stique* – i quali verranno trattati più
          approfonditamente nelle pagine seguenti –,
          scelgono di utilizzare tessuti di origine naturale, perseguendo un’idea di alta qualità e di sostenibilità, le quali necessitano dell’impiego di
          materiali che siano salutari per la persona che
          li indossa e per l’ambiente. I tessuti che i due
          brand prediligono sono la lana, la seta, il lino e
          il cotone, i quali, oltre ad essere di pregio, sono
          anche molto resistenti."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="L’ideazione dei capi da realizzare si esprime attraverso degli schizzi realizzati a mano con foglio e matita, tecnica utilizzata ancora oggi in
          numerose realtà aziendali, oppure, tramite l’ausilio di un computer, con programmi di disegno
          vettoriale. Qui vengono rappresentate in modo
          essenziale le linee del capo, le sue cuciture ed
          i suoi dettagli mediante disegni tecnici, mentre
          per mostrare la silhouette, il volume e la rotondità si utilizzano disegni tridimensionali che poi si
          tramutano in figurini d’immagine, i quali rappresentano i capi su una figura: è a questo punto
          che si verifica se effettivamente l’abbinamento
          di tessuti e colori funziona, dunque si tratta di
          una vera"
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-10"
          imageUrl="assets/images/fullsize/2b.jpg"
          dida="Test Didascalia"
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="I figurini selezionati vengono poi numerati ed inviati alla produzione, dopodiché si realizzano delle copie dei figurini da allegare alla
          scheda prodotto, la quale viene poi distribuita ai modellisti per la realizzazione dei cartamodelli e del prototipo. A questo punto, i modellisti, tramite l’utilizzo del manichino, provano i tessuti, verificano
          le silhouette, la vestibilità e, in caso di difetti da correggere effettuano le necessarie modifiche. Una volta terminata questa procedura,
          il lavoro arriva in sartoria, dove i sarti realizzano a mano le rifiniture
          e i bordi, applicano eventuali bottoni e simili, spesso anche tramite
          l’ausilio di macchine da cucire industriali, per garantire una maggiore
          precisione. Avere dei sarti esperti che lavorano alla realizzazione dei
          propri capi è fondamentale, in quanto essi sono in grado di conferire
          l’unicità e la qualità che contraddistinguono i prodotti artigianali."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Verso la fine della fase produttiva, si tiene la prima prova dei capi:
          l’ideatore della collezione verifica se gli schizzi sono stati interpretati
          nel modo corretto e se il risultato raggiunge le aspettative. Infine i
          capi vengono adattati dalla taglia standard alle diverse taglie richieste per la vendita."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Una volta che i capi sono pronti si effettua un’analisi dei costi di produzione e di confezione, nonché del tessuto utilizzato e di eventuali
          accessori per stabilire il prezzo di vendita; tale analisi viene condotta
          alla luce del budget di vendita, che ciascuna azienda deve rispettare
          per recuperare i costi di produzione e di gestione.
          I capi vengono consegnati al brand da cui sono stati richiesti per essere venduti in negozio o online in base ai canali di vendita, oppure
          presentati in show-room o in sfilata, ciò dipende dalle dimensioni e
          delle possibilità economiche del brand, dalle quali dipendono anche
          le azioni di comunicazione che si attuano per promuovere la collezione."
        />
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Questo specifico processo di sviluppo e realizzazione del prodotto si
          contraddistingue per il savoir-faire di alta sartorialità riconosciuto in
          tutto il mondo: valore fondante è proprio la volontà di tramandare il
          know-how di generazione in generazione, affinché la conoscenza di
          particolari tecniche non vada perduta nel tempo e, anzi, si arricchisca
          sempre di più."
        />
        <IndexPoint
          colorClass="mib-brown-dark"
          className="col-span-4 md:col-span-3"
        >
          Le tecniche produttive sostenibili
        </IndexPoint>
        <Paragraph
          className="col-span-4 md:col-start-5 md:col-span-6 text-mib-brown-dark"
          text="Negli ultimi anni il tema della sostenibilità si è ri- velato una questione particolarmente dibattuta,
          poiché esso rileva criticità ed individua necessità
          sempre più urgenti, in quanto l’inquinamento am- bientale registra una crescita vertiginosa, causa- ta anche e soprattutto dalle industrie, comprese
          quelle della moda. Per far fronte a questo proble-
          ma, all’interno della filiera produttiva sono state
          introdotte, dalla ricerca delle materie prime fino
          alla distribuzione del prodotto finito, numerose in-
          novazioni volte a ridurre l’impatto sulle persone e
          sull’ambiente 26; per esempio nel territorio di Ber-
          gamo, uno tra i più inquinati d’Europa, varie realtà
          aziendali hanno iniziato a perseguire questo oriz-
          zonte, adottando specifiche misure."
        />
        <ImageRect
          className="col-span-4 md:col-start-2 md:col-span-4 max-h-96"
          imageUrl="assets/images/fullsize/4_3.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 max-h-96"
          imageUrl="assets/images/fullsize/5_3.jpg"
          dida="Test Didascalia"
        />
        <ImageRect
          className="col-span-4 md:col-span-3 max-h-96"
          imageUrl="assets/images/fullsize/6_3.jpg"
          dida="Test Didascalia"
        />
      </div>
    </BaseLayout>
  );
}
