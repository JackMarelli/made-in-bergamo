import { useNavigate } from "react-router-dom";
import SmallCta from "../SmallCta/SmallCta";

export default function InterviewsNavigator() {
  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    console.log("navigating to", to);
    navigate(to);
  };

  return (
    <>
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/neimieipanni")}
        text="Nei Miei Panni"
      />
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/labottegadigiorgia")}
        text="La Bottega di Giorgia"
      />
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/officinae")}
        text="Officinae"
      />
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/nitto")}
        text="Nitto"
      />
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/ertkingdom")}
        text="E RT Kingdom"
      />
      <SmallCta
        clickCallback={() => handleLinkClick("/interview/albinigroup")}
        text="Albini Group"
      />
    </>
  );
}
