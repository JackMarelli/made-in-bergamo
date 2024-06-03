import { Link } from "react-router-dom";
import SmallCta from "../SmallCta/SmallCta";

export default function InterviewsNavigator() {
  return (
    <>
      <Link to="/interview/neimieipanni">
        <SmallCta text="Nei Miei Panni" />
      </Link>
      <Link to="/interview/labottegadigiorgia">
        <SmallCta text="La Bottega di Giorgia" />
      </Link>
      <Link to="/interview/officinae">
        <SmallCta text="Officinae" />
      </Link>
      <Link to="/interview/nitto">
        <SmallCta text="Nitto" />
      </Link>
      <Link to="/interview/ertkingdom">
        <SmallCta text="E RT Kingdom" />
      </Link>
      <Link to="/interview/albinigroup">
        <SmallCta text="Albini Group" />
      </Link>
    </>
  );
}
