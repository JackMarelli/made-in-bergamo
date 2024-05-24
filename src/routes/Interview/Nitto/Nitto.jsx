import InterviewLayout from "../../../layouts/InterviewLayout/InterviewLayout";
import InterviewQuestion from "../../../components/InterviewQuestion/InterviewQuestion";
import ImageRect from "../../../components/ImageRect/ImageRect";
import BrandSheet from "../../../components/BrandSheet/BrandSheet";
import BrandSheetRow from "../../../components/BrandSheetRow/BrandSheetRow";

export default function Nitto() {
  return (
    <>
      <InterviewLayout>
        <h1 className="text-4xl md:text-7xl text-mib-brown-dark font-crimson-text font-semibold leading-[.95em] tracking-tight">
          Nitto
        </h1>
        <BrandSheet>
          <BrandSheetRow title="Anno di fondazione">2020</BrandSheetRow>
          <BrandSheetRow title="Fondatrice e designer">
            Giorgia Colleoni
          </BrandSheetRow>
          <BrandSheetRow title="Collezioni">
            Due all’anno - primavera/estate, autunno/inverno <br /> Donna
          </BrandSheetRow>
          <BrandSheetRow title="Target">
            Donne tra i 30 e i 50 anni che amano il no branding e il mondo
            dell’artigianalità, provenienti da Stati Uniti, Cina, Giappone e
            Corea
          </BrandSheetRow>
          <BrandSheetRow title="Valori">
            Artigianalità <br /> Territorialità <br /> Riduzione dell’impatto
            ambientale
          </BrandSheetRow>
          <BrandSheetRow title="Produzione">
            Bergamo, Brasile, Perù
          </BrandSheetRow>
          <BrandSheetRow title="Materiali utilizzati">
            Cotone <br /> Seta <br /> Cashmere <br /> Lana <br /> Materiali
            brasiliani
          </BrandSheetRow>
          <BrandSheetRow title="Tratti distintivi">
            Impegno costante verso un impatto ambientale minimo; <br /> Volontà
            di produrre i capi nel luogo di provenienza delle materie prime;{" "}
            <br />
            Creazione dell’etichetta del capo dettagliata, con la sua
            tracciabilità; <br /> Materiali 100% naturali, provenienti da
            deadstock; <br /> Impegno verso la riduzione degli sprechi in ogni
            aspetto della filiera produttiva; <br /> Presenza sul sito web di
            una sezione dedicata alla cura e al riparo del capo, con spiegazioni
            e video tutorial; <br /> Insieme al capo inviato alla cliente è
            presente un kit con strumenti per l’eventuale riparo; <br />
            Comunicazione di quasi totale silenzio, legata alla filosofia del
            brand e della designer; <br /> Forte legame con la musica,
            utilizzata per raccontare le collezioni;
          </BrandSheetRow>
          <BrandSheetRow title="Contatti">
            Sito web: www.nittoness.com <br /> Instagram: @nitto_ness <br />
            Mail: info@nittoness.com <br /> Cell.: +39 335 628 4018
          </BrandSheetRow>
        </BrandSheet>

        <ImageRect
          className="col-span-4 md:col-span-7"
          imageUrl="../assets/images/webp/interviews/nitto/1.webp"
          dida="Immagine relativa all'intervista, se c'è."
        />
        <InterviewQuestion question="Quando è nato Nitto, come lavora e quali sono i suoi valori?">
          «Il brand nasce in Brasile nel 2020 da un’idea di Giorgia, la designer
          e fondatrice, grazie alla sua esperienza pregressa nel settore e alla
          capacità di lavorare a maglia e ad uncinetto. Giorgia, durante il
          periodo della pandemia di Covid-19, ha iniziato a creare dei capi e da
          lì è nata una piccola capsule collection, seguita da una pagina
          Instagram e dal sito di Nitto. La collezione ha iniziato ad ampliarsi,
          catturando l’attenzione di vari acquirenti internazionali e di negozi
          per la maggior parte indipendenti. Ad oggi abbiamo presentato circa
          quattro collezioni complete ed esposto tre volte a Parigi, in uno
          show-room indipendente. L’obiettivo del nostro lavoro è cercare di
          avere un impatto ambientale molto ridotto, infatti vorremmo produrre
          nel luogo da dove derivano le materie prime e attualmente ci stiamo in
          parte riuscendo. Quando vivevamo in Brasile producevamo interamente lì
          con materiali molto difficili da trasformare, in quanto non c’era la
          possibilità di averne molti, come ad esempio in Italia o in Giappone.
          Le scelte sono limitate anche se i materiali brasiliani sono molto
          caratteristici, alcuni dei quali li usiamo ancora. In questo momento
          siamo tornati in Italia e la produzione si svolge per la maggior parte
          nel territorio di Bergamo, ma anche in Brasile e in Peru. Negli ultimi
          due Paesi abbiamo delle signore indipendenti che lavorano per noi. Per
          creare i capi di maglieria, totalmente realizzati a mano, servono
          dalle trenta alle cinquanta ore ciascuno, questo viene scritto
          sull’etichetta del capo insieme al nome di chi lo ha prodotto e alla
          provenienza delle materie prime. La tracciabilità è per noi molto
          importante, anche se molto artigianale e senza un codice QR. La stessa
          cosa vale per il tessuto, creato artigianalmente e lavorato
          interamente a Bergamo».
        </InterviewQuestion>
        <InterviewQuestion question="Quante persone lavorano all’interno del brand e di cosa si occupano?">
          «Oltre a me e a Giorgia, all’interno del brand ci sono due dipendenti
          che lavorano a Bergamo: una si occupa della parte amministrativa e
          della logistica, e la seconda cura la parte della produzione. Inoltre
          quest’ultima aiuta anche Giorgia durante la creazione della
          collezione. Abbiamo poi una referente in Brasile che gestisce la
          produzione e infine collaboriamo con due agenti commerciali, i quali
          seguono il nostro brand e invitano i loro contatti durante le nostre
          presentazioni. In totale siamo in cinque più i due agenti
          commerciali».
        </InterviewQuestion>
        <InterviewQuestion question="Quali materiali utilizzate per produrre i vostri capi e da dove provengono?">
          «Il tessuto che utilizziamo maggiormente è il cotone, ma usiamo anche
          la seta, il cashmere e la lana. Per quanto riguarda i filati, invece,
          abbiamo più scelta e in base alla stagione variano. Ogni tanto
          utilizziamo anche le stampe, soprattutto nell’ultimo periodo. Questi
          materiali sono 100% naturali e derivano da fondo di magazzino o sono
          stock service, a disposizione di piccoli brand che necessitano di
          quantità non troppo vaste. Per la produzione preferiamo acquistare il
          necessario, evitando sprechi, e per questo motivo coloro che
          acquistano sul sito avranno dei tempi di attesa non brevi».
        </InterviewQuestion>
        <InterviewQuestion question="Come nascono le vostre collezioni e com’è organizzata la produzione?">
          «Abbiamo dei capi fissi intorno ai quali creiamo quelli nuovi,
          cambiando anche i colori. Testiamo e sperimentiamo molto durante
          l’ideazione della collezione. Giorgia fa un brain-storming e un
          moodboard iniziale, inserisce su una tavola fisica i pezzi di tessuto
          e i colori, per poi fare una selezione e capire se il numero di
          prodotti è giusto ed equilibrato con i tessuti. Quindi le fasi
          principali sono il brainstorming iniziale, la strutturazione della
          collezione e infine si cerca di capire cosa selezionare, facendo anche
          delle comparazioni con le vendite precedenti per capire cosa proporre.
          Cerchiamo anche di dare un’identità alla collezione, punto
          fondamentale. Poi si passa alla fase di creazione e di produzione,
          fino ad arrivare allo show-room».
        </InterviewQuestion>
        <InterviewQuestion question="Prestate attenzione a ciò che riguarda l’impatto sull’ambiente?">
          «Sì, nel nostro piccolo, mediante tante piccole cose ci impegniamo su
          questo aspetto in quanto teniamo molto al valore legato all’impatto
          ambientale. Da quando siamo nati, non abbiamo mai utilizzato fibre
          sintetiche ed evitiamo di mischiare le fibre naturali, perché
          sarebbero più difficili da riciclare. Inoltre, abbiamo sempre operato
          made to order, senza avere uno stock ampio. Per esempio, per quanto
          riguarda le materie prime cerchiamo di lavorarle nel loro luogo di
          provenienza, come in Brasile e in Peru. I tessuti che acquistiamo sono
          naturali e spesso bianchi, eventualmente tinti poi da noi, in questo
          modo possiamo utilizzare la quantità di acqua e i prodotti
          strettamente necessari, evitando sprechi. Per esempio, per quanto
          riguarda il packaging, riutilizziamo pacchetti vecchi e ci mettiamo un
          nostro timbro e una dicitura che riporta il suo riutilizzo. Inoltre
          sul nostro sito c’è una sezione dedicata alla cura e al riparo del
          capo per consentire una durata maggiore, con delle spiegazioni e dei
          video tutorial. Insieme ai capi viene inviato un kit con queste
          istruzioni e con degli strumenti da utilizzare per l’eventuale riparo,
          sensibilizzando i nostri clienti su questo tema. Ogni nostra scelta è
          consapevole e pensata».
        </InterviewQuestion>
        <InterviewQuestion question="Quante collezioni create all’anno e dove vengono presentate?">
          «Creiamo due collezioni, autunno/inverno e primavera/estate. I capi
          sono realizzati quasi tutti in taglia unica e lo stile è molto
          identitario di Giorgia, molto apprezzato dai nostri clienti. Le
          collezioni vengono presentate in uno show-room indipendente a Parigi».
        </InterviewQuestion>
        <InterviewQuestion question="Qual’è il vostro target?">
          «I nostri clienti principali sono per il 90% degli Stati Uniti e per
          il 10% della Cina, del Giappone e della Korea, i nostri mercati
          principali. Sono donne tra i 30 e i 50 anni con disponibilità
          economica, le quali amano il no branding, sono discrete come il nostro
          brand e desiderano materiali di qualità per i loro capi».
        </InterviewQuestion>
        <InterviewQuestion question="Quali sono i canali di vendita che utilizzate?">
          «Principalmente vendiamo in negozi rivenditori di nicchia, i quali
          tengono altri brand indipendenti, oppure sul nostro sito, il quale
          presenta la minor percentuale di vendite, infatti i maggiori acquisti
          avvengono tramite i negozi».
        </InterviewQuestion>
        <InterviewQuestion question="Come gestite la parte relativa alla comunicazione? Quali canali usate e quali messaggi veicolate?">
          «Per quanto riguarda la comunicazione abbiamo adottato fin dall’inizio
          una politica di quasi totale silenzio, perché coloro che acquistano i
          nostri capi preferiscono questa tipologia, non cerchiamo di essere
          commerciali e non lo vogliamo. Questo è anche legato alla personalità
          di Giorgia e alla sua filosofia. Abbiamo una pagina Instagram, la
          quale è attiva ma non viene aggiornata costantemente, non pubblichiamo
          tutti i giorni. Qui diamo aggiornamenti sulla nostra immagine, per
          veicolare come lavoriamo e quali sono i valori che ci appartengono.
          Inoltre abbiamo il sito web e anche una newsletter indirizzata ai
          nostri negozi rivenditori, utilizzata solo due volte all’anno per
          comunicare le nuove collezioni. Siamo presenti anche su Pinterest ma
          pubblichiamo qualche foto solo all’uscita delle collezioni. Sul nostro
          sito, inoltre, c’è un collegamento ad alcune playlist su Spotify con
          delle canzoni scelte da noi, in quanto abbiamo un forte legame con il
          mondo della musica. Una playlist è generica e le altre sono dedicate
          ad ognuna delle collezioni, questa scelta perché ci piace molto l’idea
          di comunicarle e raccontarle mediante la musica».
        </InterviewQuestion>
      </InterviewLayout>
    </>
  );
}
