import InterviewLayout from "../../../layouts/InterviewLayout/InterviewLayout";
import InterviewQuestion from "../../../components/InterviewQuestion/InterviewQuestion";
import ImageRect from "../../../components/ImageRect/ImageRect";
import BrandSheet from "../../../components/BrandSheet/BrandSheet";
import BrandSheetRow from "../../../components/BrandSheetRow/BrandSheetRow";

export default function NeiMieiPanni() {
  return (
    <>
      <InterviewLayout>
        <h1 className="text-4xl md:text-7xl text-mib-brown-dark font-crimson-text font-semibold leading-[.95em] tracking-tight">
          Nei Miei Panni
        </h1>
        <BrandSheet>
          <BrandSheetRow title="Anno di fondazione">2012</BrandSheetRow>
          <BrandSheetRow title="Fondatrice e designer">
            Cristina Gamberoni
          </BrandSheetRow>
          <BrandSheetRow title="Collezioni">
            Due all'anno - Primavera/Estate, Autunno/Inverno <br />
            Bambino e principalmente donna
          </BrandSheetRow>
          <BrandSheetRow title="Target">
            Donne tra i 40 e i 60 anni
          </BrandSheetRow>
          <BrandSheetRow title="Valori">
            Artigianalità <br />
            Territorialità <br />
            Sostenibilità <br />
            Etica verso i collaboratori <br />
            Cura verso i clienti
          </BrandSheetRow>
          <BrandSheetRow title="Produzione">Provincia di Bergamo</BrandSheetRow>
          <BrandSheetRow title="Materiali utilizzati">
            Cotone, lino, lana
          </BrandSheetRow>
          <BrandSheetRow title="Tratti distintivi">
            Tessuti naturali provenienti da deadstock; <br />
            Lavorazione di ogni capo artigianalmente; <br />
            Capi non su misura ma modificabili su richiesta, sia per le misure
            che per i tessuti;
          </BrandSheetRow>
          <BrandSheetRow title="Showroom">
            Via Pizzo Coca 3/A - Bergamo
          </BrandSheetRow>
          <BrandSheetRow title="Contatti">
            Sito web: www.neimieipanni.it <br />
            Instagram: @neimieipanni <br />
            Facebook: Nei Miei Panni <br />
            Email: cristina@neimieipanni.it
          </BrandSheetRow>
        </BrandSheet>

        <InterviewQuestion question="Quando è nato Nei Miei Panni, come lavora e quali sono i suoi valori?">
          «Nei Miei Panni è nato nel 2012 come blog e poco dopo è diventato un
          brand di moda artigianale, inizialmente per bambino e dal 2018 è stato
          introdotto l’abbigliamento per la donna. La produzione si basa su
          piccole serie di capi, non produce in grandi quantità ed i prezzi sono
          bilanciati per pagare il lavoro che c’è dietro alla loro creazione,
          quindi l’idea non è di andare a sfruttare e aumentare la produzione
          per abbassare i prezzi ma le persone devono lavorare con un livello di
          retribuzione corretto. Quando ho iniziato pensavo che per me il vero
          valore sarebbe arrivato quando il mio lavoro avrebbe cominciato a
          darlo anche ad altre persone, inizialmente i capi li facevo io mentre
          ora non più, questo ha un impatto per me molto importante. Il mio
          brand si fonda su altri due valori, la sostenibilità e la
          territorialità, tutto viene prodotto all’interno del territorio di
          Bergamo, all’inizio della Val Seriana, in modo tale da dare un valore
          aggiunto con una produzione di qualità eseguita in modo curato. Le mie
          clienti all’inizio non sapevano cosa volesse dire girare un capo e
          vedere al suo interno una cucitura all’inglese, questo vuol dire che
          se ti rimbocchi le maniche non hai la taglia cuci tranne dove è
          indispensabile ed ora esse sanno il significato di ciò. È un’educare
          ad un acquisto più consapevole che crea il valore intrinseco del capo.
          Voglio creare una clientela che capisca ciò, la differenza tra
          acquistare un prodotto creato in questo modo rispetto ad un capo fast
          fashion, è molto importante. Inoltre lavoro dando una particolare
          attenzione alle mie clienti in quanto non siamo tutte uguali dal punto
          di vista della corporatura e per questo su di esse faccio indossare i
          capi come prova per capire eventuali modifiche da apportare in modo da
          far calzare il capo in modo perfetto, questo perché non produco su
          misura, ho i miei modelli».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/1.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Quali materiali vengono utilizzati per la produzione dei capi e da dove provengono?">
          «Siccome ho iniziato producendo capi per bambini tutti i materiali
          sono naturali a parte il tessuto elasticizzato che ha per forza un pò
          di elastan, il resto sono il cotone, il lino che è il mio tessuto
          preferito e la lana. Non sperimento molto con materiali come il
          poliestere perché ci tengo al vestire con tessuti che fanno bene alla
          pelle di chi li indossa. Uno dei miei fornitori è Albini, un
          cotonificio rinomato che ha anche delle linee certificate e da lì
          prendo i tessuti deadstock in quanto sono all’interno dei loro clienti
          che hanno accesso a ciò. Posso acquistare per esempio trenta metri di
          tessuto, non di più perché ad oggi non acquisto ancora grandissime
          quantità per fare una grossa produzione, però quando ce n’è uno che mi
          piace o è uno tra i miei basici ne acquisto anche parecchio. Acquisto
          anche da un altro fornitore stocckista il quale tiene tessuti
          dell’alta moda ed italiani che seleziono attentamente. Solitamente
          trovo dei tessuti che non sempre posso ritrovare dopo mesi perché a
          volte sono finali di pezza. Una cosa fondamentale è il saper scegliere
          e negli anni ho imparato a farmi le mani e a capire la qualità dei
          tessuti, creando rapporti con i venditori».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/2.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/3.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Quindi utilizza per la maggior parte materiali provenienti da deadstock, non totalmente nuovi?">
          «Sì, la maggior parte dei tessuti che utilizzo per creare le mie
          collezioni sono deadstock, non provenienti da nuovo»
        </InterviewQuestion>
        <InterviewQuestion question="Da quanti capi è composta solitamente una sua collezione?">
          «Solitamente le mie collezioni sono composte dai venti ai trenta
          modelli, non tutti nuovi, tra questi ce ne sono in ogni collezione
          circa quattro. Alcuni modelli vengono abbandonati, altri entrano,
          magari anche solo con piccole variazioni di colore»
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/4.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Com’è organizzata la filiera produttiva e quali sono i suoi step?">
          «Alla nascita del brand mi occupavo di tutte le fasi della filiera
          produttiva personalmente ma poi nel corso degli anni ho deciso di
          dividere i vari compiti. Oggi ho una serie di modelli che si ripetono
          tutte le stagioni e tutti gli anni, ho capi che produco ormai da dieci
          anni e la forma è sempre la stessa ma cambiano solo i tessuti. Ho dei
          modelli che sono la mia base e in ogni collezione inserisco dei
          modelli nuovi e ne tolgo per non renderla troppo ampia anche per una
          questione di costi da tenere sotto controllo, si fa un bilanciamento.
          Per creare una collezione parto dalla scelta dei materiali, prendo dei
          tessuti e li metto insieme dal punto di vista della texture e dei
          colori. Per i colori ho delle cartelle di partenza e da qui inizio a
          creare. Fondamentalmente alla base c’è un tessuto guida da cui si
          genera la scelta di tutto il resto. Ho tre/quattro linee di colore,
          tengo sempre il blu, il grigio, il bianco e il nero, colori base
          sempre presenti e massimo altri due nuovi.
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/5.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          Dopodiché inizio ad abbinare i miei modelli base ai tessuti che ho
          scelto o li seleziono anche sapendo già quello che voglio fare. Ci
          sono alcuni tessuti che mi parlano e con quelli faccio dei capi nuovi
          lasciandomi ispirare. Poi faccio il piano di collezione, questo
          significa il piano di campionario, con i dati dei tessuti e i dati dei
          vari modelli, abbino e faccio in modo di avere sempre taglie miste,
          una XS, una S e così via. Quando la cliente viene ad acquistare in
          atelier può scegliere il tessuto con il quale realizzare il modello
          che vuole e si fanno poi i vari aggiustamenti. Devo quindi avere un
          campionario fatto in modo intelligente con un misto di taglie perché
          l’obbiettivo è la vendita. Faccio questo piano di collezione nel tempo
          in cui la sartoria realizza tutto il campionario, ci vuole circa un
          mese / un mese e mezzo. Nel frattempo in questo tempo creo modelli
          nuovi, in genere parto dall’immaginazione e disegno. Con la modellista
          precedente realizzavo un modello fatto di carta e poi in tessuto
          cucito, non troppo preciso, successivamente lei mi diceva cosa fare
          per sistemarlo e arrivati ad un modello che andava bene facevo fare un
          prototipo dalla sartoria. Dopodiché lo prendeva la modellista e con
          una specie di scanner lo rilevava e lo sdifettava a computer per poi
          fare lo sviluppo delle taglie a seconda del capo. Ora ho un
          laboratorio di sartoria con delle sarte che producono quello che porto
          dopo essere passato per le mani della modellista. Decidiamo insieme
          quali sono le finiture, i centimetri di cucitura e tutti gli altri
          dettagli. Loro mi danno dei consigli e creano il capo prototipo. Una
          volta provato sulla modella, se va bene si fa lo sviluppo delle taglie
          e si crea il campionario. Successivamente tengo una presentazione
          della collezione durante i giorni di apertura dell’atelier e anche in
          altri luoghi, come nel negozio "Oggetti" in Santa Caterina a Bergamo,
          in cui faccio degli eventi e prendo gli ordini in base alle richieste
          delle clienti. Parallelamente vendo anche in un negozio a San Candido
          dal 2016 circa. I miei capi oltre ad essere venduti in questo negozio
          vengono venduti in atelier ed online. Quando esce la collezione ho una
          mia collaboratrice che si occupa del sito web, mentre io mi occupo
          personalmente della parte di fotografia in quanto ho esperienza fin da
          piccola. Poi viene aggiornato il sito, qui le clienti acquistano,
          selezionano il modello, la taglia ed il tessuto. Comunico sempre con
          le acquirenti e non capitano mai resi in quanto richiedo le misure e
          do indicazioni precise. L’online funziona bene anche se non ha dei
          grossi volumi, in linea con quella che è la clientela. I volumi
          maggiori ora sono quelli diretti, meno dal sito anche se l’online è in
          crescita. Nel caso il capo dovesse tornare indietro si tiene nel
          campionario e si crea nuovamente. Faccio delle svendite ogni due/tre
          anni di cinque/sei giorni, raramente perché non voglio abituare la mia
          clientela a ciò, vendo l’invenduto per fare cassa, sono guadagni
          immobilizzati».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/6.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Dove ha imparato queste tecniche artigianali di produzione?">
          «Le tecniche per produrre un capo le ho imparate nel tempo, da
          architetto ho sempre lavorato con le mani. Nel 2003 circa ho iniziato
          a farmi insegnare da una sarta, ho seguito dei corsi di sartoria e di
          modellistica e poi ho fatto uno stage da Capucci a Firenze, sulla
          materia, sulla forma e sull’architettura. Lì ho imparato molto»
        </InterviewQuestion>
        <InterviewQuestion question="Qual’è il suo target preciso?">
          «Il mio target è caratterizzato da donne dai quaranta ai sessant’anni
          circa, libere professioniste, avvocato, notaio, commercialista,
          persone con alta capacità di spesa che cercano qualcosa di diverso e
          amano il rapporto diretto con la persona che realizza i capi».
        </InterviewQuestion>
        <InterviewQuestion question="Produce ancora abbigliamento per bambini?">
          «Sull’online ci sono bambino e donna, per il bambino però non produco
          più modelli nuovi, ci sono solo capi standard, ho ancora delle
          richieste ma al momento ho un pò abbandonato ciò perché ha dei costi
          troppo alti ed è un pò latente. Per i negozi non li produrrei perché
          non riuscirei ad avere dei costi di produzione accettabile».
        </InterviewQuestion>
        <InterviewQuestion question="Qual’è un suo obiettivo futuro per il suo brand?">
          «La mia ambizione è abbassare un pò l’età del mio target, oltre ad
          ampliare la vendita in negozio e sul sito».
        </InterviewQuestion>
        <InterviewQuestion question="Per la comunicazione quali canali usa?">
          «Nasco come blog durante gli anni in cui si stava sviluppando, il
          quale mi ha poi portato ad avere delle clienti all’estero, per esempio
          in Francia. Mi hanno cominciato a chiedere dei capi e una giornalista
          di Bergamo mi ha fatta conoscere in zona mediante un’intervista. Poi
          ho aperto una pagina Facebook e successivamente Instagram che mi piace
          molto in quanto è una comunicazione di immagini, mia passione. Tenevo
          due comunicazioni diverse anche per i target e ora faccio un duplicato
          pubblicando gli stessi post su entrambi i social. Nonostante il target
          le clienti arrivano maggiormente da Instagram. Sono gestiti da me
          perché ho il mio modo di comunicare e infatti c’è molto di me dentro.
          Pubblico molto durante l’uscita delle collezioni o in vista di eventi,
          ci sono poi periodi con meno pubblicazioni. Faccio sempre shooting
          all’aperto in varie location come in Sicilia e in Puglia e collaboro
          da divesri anni con una fotografa francese, le mando i capi e lei fa
          degli shooting con le sue due figlie molto simili alle mie. Il
          risultato sono degli scatti in dialogo. Lei fa queste fotografie ad
          inizio stagione e poi io ne faccio altre in vacanza che seguono le
          sue».
        </InterviewQuestion>
      </InterviewLayout>
    </>
  );
}
