import InterviewLayout from "../../../layouts/InterviewLayout/InterviewLayout";
import InterviewQuestion from "../../../components/InterviewQuestion/InterviewQuestion";
import ImageRect from "../../../components/ImageRect/ImageRect";
import BrandSheet from "../../../components/BrandSheet/BrandSheet";
import BrandSheetRow from "../../../components/BrandSheetRow/BrandSheetRow";
import InterviewCredits from "../../../components/InterviewCredits/InterviewCredits";

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
            che per i tessuti.
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
        <InterviewCredits content="Intervista a Cristina Gamberoni del brand Nei Miei Panni" />
        <InterviewQuestion question="Quando è nato Nei Miei Panni, come lavora e quali sono i suoi valori?">
          «Nei Miei Panni è nato nel 2012 come blog e poco dopo è diventato un
          brand di moda artigianale, inizialmente per bambino e dal 2018 è stato
          affiancato dalla proposta per la donna. I valori fondanti del brand
          sono la sostenibilità e la territorialità, i capi vengono prodotti nel
          territorio di Bergamo con un’attenzione particolare ad un
          confezionamento curato e di qualità. La produzione si basa sulla
          realizzazione dei capi in seguito all’ordine, quindi capi singoli per
          il cliente privato o piccole serie di capi per il retail. <br />
          <br /> Quando ho avviato il progetto pensavo che per me il vero valore
          sarebbe arrivato nel momento in cui il mio lavoro avesse generato
          lavoro anche per altri: inizialmente realizzavo i capi personalmente
          mentre ora ho una sartoria e una modellista che si occupano della
          messa a punto e del confezionamento dei capi. Questo ha un impatto per
          me molto importante. <br />
          <br /> Negli anni, insieme alla mia clientela, ho lavorato sulla
          comprensione della differenza fra acquistare un prodotto sartoriale
          rispetto ad un capo fast fashion: non tutti sono abituati a porre
          attenzione al livello di confezionamento di un capo, a riconoscere una
          cucitura inglese che valorizza una manica anche quando è rimboccata. È
          una comunicazione volta alla costruzione di un acquisto più
          consapevole che riconosce il valore intrinseco del capo. Tutto questo
          porta di conseguenza alla comprensione di un prezzo costruito per
          retribuire correttamente il lavoro che porta alla realizzazione del
          capo».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/1.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Quali materiali vengono utilizzati per la produzione dei capi e da dove provengono?">
          «Ho iniziato producendo capi per bambini e questo mi ha
          inevitabilmente portata a scegliere materiali naturali come il cotone,
          il lino (che è il mio tessuto preferito) e la lana, generalmente al
          100% a parte quando sono elasticizzati da una piccola percentuale di
          elastan. Non sperimento molto con materiali come il poliestere perché
          per me è importante vestire con tessuti che fanno bene alla pelle di
          chi li indossa. <br />
          <br /> Uno dei miei fornitori è Albini, un cotonificio rinomato da cui
          mi rifornisco di tessuti deadstock. Ho anche altri fornitori
          specializzati in stock provenienti dell’alta moda: da loro scelgo
          tessuti italiani. <br />
          <br /> Negli anni ho imparato molto grazie ai miei fornitori e alla
          mia sartoria, a riconoscere i tessuti con le mani sia per composizione
          che immaginando la resa finale sul capo. Scegliere di lavorare con
          stock di tessuto significa decidere di produrre piccole quantità ma
          anche di creare un’ampia scelta di tessuti all’interno della
          collezione offrendo più alternative alla clientela».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/2.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Quindi utilizza per la maggior parte materiali provenienti da deadstock, non totalmente nuovi?">
          «Sì, la maggior parte dei tessuti che utilizzo per creare le mie
          collezioni sono deadstock, non provenienti da produzione diretta».
        </InterviewQuestion>
        <InterviewQuestion question="Da quanti capi è composta solitamente una sua collezione?">
          «Le collezioni sono composte dai venti ai trenta modelli; alcuni
          modelli si ripetono e vengono declinati in nuovi tessuti e a questi si
          affiancano sempre quattro o cinque modelli nuovi. Alcuni modelli
          vengono abbandonati, altri entrano, magari anche solo con piccole
          variazioni di colore».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/3.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Com’è organizzata la filiera produttiva e quali sono i suoi step?">
          «Dodici anni fa alla nascita del brand mi occupavo personalmente di
          tutta la progettazione e produzione, nonché della comunicazione, poi
          nel corso degli anni ho diviso le fasi di lavoro e ho cercato persone
          con le competenze adatte ai vari compiti. <br />
          <br /> Per creare una collezione parto sempre dalla scelta dei
          materiali, prendo dei tessuti e li metto insieme dal punto di vista
          della texture e dei colori, costruisco delle cartelle di colori e
          materiali di partenza e da qui inizio a creare. Fondamentalmente alla
          base c’è sempre un “tessuto guida” da cui si genera la scelta di tutto
          il resto. <br />
          <br /> Propongo tre/quattro linee di colore, su una trama costante di
          colori base che sono il blu, il grigio, il bianco e il nero. Dopodiché
          inizio ad abbinare i miei modelli base ai tessuti che ho scelto o li
          seleziono anche sapendo già quello che voglio fare.
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/4.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          Oggi ho una serie di modelli che si ripetono attraversando le
          stagioni, capi che produco ormai da dieci anni dove la forma è sempre
          la stessa ma cambiano i tessuti. Poi ci sono alcuni materiali che mi
          parlano e con quelli realizzo dei capi nuovi lasciandomi guidare dal
          tessuto. Quindi oltre ai modelli base, in ogni collezione inserisco
          dei modelli nuovi e ne tolgo per non renderla troppo ampia, anche per
          una questione di costi da tenere sotto controllo. <br />
          <br /> Segue la progettazione del piano di campionario con i dati dei
          tessuti e quelli dei vari modelli, abbino e faccio in modo di avere
          sempre in atelier taglie miste perché quando una cliente viene da me
          deve provare la taglia migliore per lei e poter poi scegliere il
          tessuto con il quale realizzare il modello che desidera. Per questo il
          campionario deve essere sufficientemente vario con un misto di taglie.
          Nel tempo in cui il laboratorio realizza la parte “base” del
          campionario, circa un mese/un mese e mezzo, io mi dedico ai modelli
          nuovi, a partire dal tessuto e dal disegno. Realizzo un modello fatto
          di carta e poi in tessuto cucito, non troppo preciso che poi passo
          alla modellista che si occupa della messa a punto del modello, della
          vestibilità, dello sdifettamento e una volta che il campione ci
          soddisfa si passa allo sviluppo taglie. Si parte con un lavoro a mano
          su carta per passare poi tutto a computer.
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/5.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/6.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/7.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/8.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          La collezione viene a questo punto fotografata per essere messa online
          e presentata sui social. <br />
          <br /> La presentazione della collezione è sempre un momento
          emozionante in cui tutto il lavoro di preparazione di rivela a chi poi
          indosserà i miei capi. Ad alcuni giorni di apertura dell’atelier
          seguono in genere presentazioni in altre in altri luoghi, come nel
          negozio "Oggetthi" in Santa Caterina a Bergamo. <br />
          <br /> Durante queste presentazioni prendo gli ordini in base alle
          richieste delle clienti e procedo alla produzione su ordinazione.{" "}
          <br />
          <br /> La vendita diretta è accompagnata dalla vendita sullo shop
          online: sul sito le clienti acquistano avendo la possibilità di
          selezionare il modello, la taglia ed il tessuto. Cerchiamo di
          comunicare sempre con chi acquista online chiarendo dubbi su taglie,
          colori e tessuti: per questo raramente abbiamo dei resi e in quel caso
          provvediamo a rifare il capo. L’online funziona bene anche se non ha
          dei grossi volumi di vendita, in quanto quelli maggiori per ora sono i
          diretti, anche se l’online è in crescita. Stiamo lavorando anche per
          sviluppare la vendita ai negozi: dal 2016 Nei Miei Panni ha un
          rivenditore in Alto Adige e solo in alcune stagioni uno in Sardegna.{" "}
          <br />
          <br />
          Proponiamo delle vendite di campionario ogni due/tre anni di
          cinque/sei giorni: ci permettono di smaltire i capi invenduti e dare
          l’occasione di acquistare i nostri capi ad un prezzo più basso a chi
          normalmente non acquista capi sartoriali».
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/9.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Dove ha imparato queste tecniche artigianali di produzione?">
          «Le tecniche per produrre un capo le ho imparate nel tempo, da
          architetto ho sempre lavorato con le mani. Nel 2003 circa ho iniziato
          a farmi insegnare da una sarta, ho seguito dei corsi di sartoria e di
          modellistica e poi ho fatto uno stage da Capucci a Firenze, sulla
          materia, sulla forma e sull’architettura. Lì ho imparato molto»
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/10.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/11.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
          <ImageRect
            className="col-span-4 md:col-span-7"
            imageUrl="../assets/images/webp/interviews/neimieipanni/12.webp"
            dida="Immagine relativa all'intervista, se c'è."
          />
        </InterviewQuestion>
        <InterviewQuestion question="Qual’è il suo target preciso?">
          «La donna Nei Miei Panni è generalmente una donna che cerca abiti di
          nicchia, comodi e semplici ma non banali, capace di apprezzare tessuti
          di qualità e di sceglierli per costruire un guardaroba personalizzato.
          Per questo è una donna che ama il rapporto diretto con chi immagina e
          realizza i capi, con cui confrontarsi sui materiali e sulle forme che
          più si adattano al suo stile personale. Ha una buona capacità di
          spesa, una grande autonomia nella scelta data dalla consapevolezza di
          sé. Le mie clienti hanno fra i trenta e i sessant’anni».
        </InterviewQuestion>
        <InterviewQuestion question="Produce ancora abbigliamento per bambini?">
          «Sullo shop online si trova sempre la collezione declinata sia per
          bambina che per donna. Nel settore bambina si trovano i capi base che
          è possibile realizzare nei tessuti della stagione. Ricevo ancora
          ordini per bambine specialmente fra i 6 e gli 11 anni e sono sempre
          felice di ricevere in atelier le bambine con le loro mamme, sono
          momenti gioiosi e rilassanti. Il mercato del bambino è stato
          sorpassato negli anni da quello della donna ed è in calo anche perché
          la produzione sartoriale ha dei costi molto alti rispetto al mercato
          di riferimento. Ai miei costi di produzione attuali non potrei
          produrre per i negozi a meno di abbassare la qualità di confezione ed
          è una scelta che non prendo nemmeno in considerazione».
        </InterviewQuestion>
        <InterviewQuestion question="Qual’è un suo obiettivo futuro per il suo brand?">
          «La mia ambizione è riuscire a conquistare un pubblico più giovane.
          Inoltre stiamo lavorando per riuscire ad ampliare la vendita in alcuni
          negozi selezionati e incrementare le vendite online, facendo azioni
          per far comprendere la qualità del prodotto anche a chi non può
          toccarlo con mano. Sono obiettivi molto concreti e un passo alla
          volta, in linea con ciò che ho sempre fatto».
        </InterviewQuestion>
        <InterviewQuestion question="Per la comunicazione quali canali usa?">
          «Nei Miei Panni nasce come blog inseguendo pensieri, immagini, mani e
          tessuti: ha avuto da subito un suo carattere di riconoscibilità che mi
          ha convinta a registrare il marchio già dopo le prime pubblicazioni.
          Nell’epoca pre-social i blog erano molto seguiti ed era una forma di
          comunicazione lenta che mi piaceva molto e si abbinava bene alla mia
          vita. Grazie al blog ho avuto dei contatti all’estero, specialmente in
          Francia con donne che con grande fiducia mi hanno chiesto di
          realizzare abiti per le loro figlie. Contemporaneamente a Bergamo
          tenevo degli atelier di cucito per bambini all’interno di una serra e
          grazie a questi ho ricevuto i primi ordini. In città il mio nome ha
          iniziato ad essere conosciuto dopo un’intervista uscita sull’Eco di
          Bergamo realizzata dalla giornalista responsabile della pagina della
          moda, una persona molto competente con una profonda conoscenza delle
          realtà artigianali presenti sul territorio che mi ha spinta a
          sviluppare il mio progetto. <br />
          <br /> Con l’arrivo dei social ho aperto una pagina Facebook e
          successivamente una su Instagram, il canale che prediligo perché la
          comunicazione è veicolata da immagini e la fotografia è la mia
          passione. All’inizio differenziavo la comunicazione ma attualmente
          duplico su Facebook quello che pubblico su Instagram. <br />
          <br /> Se il mio target in teoria dovrebbe essere più attivo su
          Facebook in realtà la mia clientela arriva principalmente da
          Instagram. Gestisco personalmente i social per costruire un rapporto
          diretto e di fiducia con chi mi segue, in quanto ritengo che sia
          importante per un prodotto di nicchia mostrare lo spirito e i valori
          fondanti del progetto che sta dietro. Ho il mio modo di comunicare nel
          quale metto molto di me e pubblico maggiormente durante l’uscita delle
          collezioni o in vista di eventi, ma ci sono poi periodi con meno
          pubblicazioni. <br />
          <br /> La comunicazione del marchio passa attraverso fotografie che
          scatto personalmente e anche questo è un elemento che crea unità e
          caratterizzazione oltre al fatto che le modelle da sempre sono le mie
          figlie, a cui negli ultimi anni ho affiancato delle amiche. Scatto
          foto tecniche in atelier e realizzo shooting all’aperto in varie
          location cercando di valorizzare il paesaggio italiano come ho fatto
          in Sicilia, in Puglia e nelle Marche. Inoltre collaboro da diversi
          anni con una fotografa francese, concordiamo insieme un progetto poi
          io le mando i capi e lei fa degli shooting con le sue due figlie che
          quasi somigliano alle mie. Lei scatta le fotografie ad inizio stagione
          e poi io ne realizzo altre in vacanza che seguono le sue: il risultato
          sono degli scatti in dialogo. <br />
          <br /> Mediante le immagini che scatto e che pubblico sui miei canali
          di comunicazione miro a mettere in risalto le caratteristiche dei miei
          capi, mostrandone la vestibilità e la qualità dei tessuti utilizzati,
          cercando di raccontare la storia che c'è dietro, dall'ideazione al
          prodotto finito».
        </InterviewQuestion>
      </InterviewLayout>
    </>
  );
}
