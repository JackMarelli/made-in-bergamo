import InterviewLayout from "../../../layouts/InterviewLayout/InterviewLayout";
import InterviewQuestion from "../../../components/InterviewQuestion/InterviewQuestion";
import ImageRect from "../../../components/ImageRect/ImageRect";
import BrandSheet from "../../../components/BrandSheet/BrandSheet";
import BrandSheetRow from "../../../components/BrandSheetRow/BrandSheetRow";

export default function SophieStique() {
  return (
    <>
      <InterviewLayout>
        <h1 className="text-4xl md:text-7xl text-mib-brown-dark font-crimson-text font-semibold leading-[.95em] tracking-tight">
          Albini Group
        </h1>
        <BrandSheet>
          <BrandSheetRow title="Anno di fondazione">2021</BrandSheetRow>
          <BrandSheetRow title="Fondatrice e designer">
            Giulia Terzi
          </BrandSheetRow>
          <BrandSheetRow title="Collezioni">
            Una all’anno, Maglieria per uomo/donna in taglia unica
          </BrandSheetRow>
          <BrandSheetRow title="Target">
            Persone dai 35/40 anni in su
          </BrandSheetRow>
          <BrandSheetRow title="Produzione">Provincia di Bergamo</BrandSheetRow>
          <BrandSheetRow title="Materiali utilizzati">
            Filati 100% naturali provenienti dalle lane di pecore e capre <br />{" "}
            Lana delle pecore delle Isole Shetland <br /> Lana merino
            neozelandese <br /> Cotone biologico egiziano <br /> Cashmere del
            Tibet <br /> Lana di cammello <br /> Lana di yak <br /> Lana
            d’agnello
          </BrandSheetRow>
          <BrandSheetRow title="Tratti distintivi">
            Controllo completo della filiera da parte della designer <br /> Alta
            conoscenza ed esperienza nella maglieria <br /> Capi versatili e
            reversibili senza cuciture <br /> Indagine sulle varie tecniche
            utilizzate per ogni fibra <br /> Tecniche di lavorazione antiche con
            l’obiettivo di continuare a tenerle in vita
          </BrandSheetRow>
          <BrandSheetRow title="Contatti">
            Sito web www.ert-kingdom.com <br /> Instagram @ERT_Kingdom <br />{" "}
            Facebook @E RT Kingdom <br /> Mail info@ert-kingdom.com <br /> Cell.
            +39 346 33 91 417
          </BrandSheetRow>
        </BrandSheet>
        <ImageRect
          className="col-span-4 md:col-span-7"
          imageUrl="../assets/images/webp/interviews/albinigroup/materieprime/cotone.webp"
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
