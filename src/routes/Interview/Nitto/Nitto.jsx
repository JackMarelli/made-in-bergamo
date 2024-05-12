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
            Korea
          </BrandSheetRow>
          <BrandSheetRow title="Valori">
            Artigianalità <br /> Territorialità <br /> Riduzione dell’impatto
            ambientale
          </BrandSheetRow>
          <BrandSheetRow title="Produzione">
            Bergamo, Brasile, Peru
          </BrandSheetRow>
          <BrandSheetRow title="Materiali utilizzati">
            Cotone <br /> Seta <br /> Cashmere <br /> Lana <br /> Materiali
            brasiliani
          </BrandSheetRow>
          <BrandSheetRow title="Tratti distintivi">
            Impegno costante verso un impatto ambientale minimo <br /> Volontà
            di produrre i capi nel luogo di provenienza delle materie prime{" "}
            <br /> Creazione dell’etichetta del capo dettagliata, con la sua
            tracciabilità <br /> Materiali 100% naturali, provenienti da
            deadstock <br /> Impegno verso la riduzione degli sprechi in ogni
            aspetto della filiera produttiva <br /> Presenza sul sito web di una
            sezione dedicata alla cura e al riparo del capo, con spiegazioni e
            video tutorial <br /> Insieme al capo inviato alla cliente è
            presente un kit con strumenti per l’eventuale riparo <br />{" "}
            Comunicazione di quasi totale silenzio, legata alla filosofia del
            brand e della designer <br /> Forte legame con la musica, utilizzata
            per raccontare le collezioni
          </BrandSheetRow>
          <BrandSheetRow title="Contatti">
            sito web www.nittoness.com <br /> Instagram @nitto_ness <br /> mail
            info@nittoness.com <br /> cell. +39 335 628 4018
          </BrandSheetRow>
        </BrandSheet>

        <ImageRect
          className="col-span-4 md:col-span-7"
          imageUrl="../assets/images/webp/interviews/nitto/1.webp"
          dida="Immagine relativa all'intervista, se c'è."
        />
        <InterviewQuestion question="Quando nasce E RT Kingdom, come lavora e quali sono i suoi valori?">
          «E RT KINGDOM nasce nel 2021, io sono la sua fondatrice e la designer.
          Mi sono laureata in Fashion design nel 2013, lavoro nella maglieria
          ormai da tanto tempo e qualche anno fa, ho iniziato a sviluppare
          questo progetto. “E RT” significa terra e tre al contrario,
          simboleggia la terra e l’origine di tutto. “Kingdom” invece
          simboleggia il mondo in cui noi vorremmo essere folli e veri, la terra
          del futuro, più rispettosa e onesta, come vogliamo essere. E RT
          Kingdom è un progetto molto libero e ancora agli albori, produciamo
          maglieria utilizzando filati e fibre naturali al 100% con una filiera
          controllata da me, so dove vengono allevati gli animali, da chi sono
          raccolte le fibre, come vengono filate e trattate. Da qui inizia tutto
          il trattamento che facciamo noi per realizzare i nostri capi in
          maglia. Voglio che questo progetto sia una cosa forte ed onesta, per
          me la realtà e l’onestà sono due cose che voglio mantenere e alle
          quali tengo molto, a partire dalla filiera e dalla sua tracciabilità,
          che controllo attentamente. Vorrei anche che sia un pò folle come
          idea, realizzando un capo che si porta per tutta la vita, con dei
          valori e con un pizzico di follia, da utilizzare nelle più varie
          occasioni. Le immagini delle collezioni vengono scattate sempre con i
          capi indossati da persone comuni, non da modelle e modelli, in quanto
          vorrei comunicare che i miei capi possono essere indossati da chiunque
          grazie alla grande versatilità che li caratterizza. Tutti i capi sono
          reversibili e finiti a mano, infatti hanno questa possibilità di
          essere portati sia internamente che esternamente perché non hanno
          cuciture».
        </InterviewQuestion>
      </InterviewLayout>
    </>
  );
}
