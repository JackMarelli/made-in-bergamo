import InterviewQuestion from "../../components/InterviewQuestion/InterviewQuestion";
import BaseLayout from "../BaseLayout/BaseLayout";
import ImageRect from "../../components/ImageRect/ImageRect";
import styles from "./InterviewLayout.module.scss";
import { Link } from "react-router-dom";

export default function InterviewLayout({ props, children }) {
  return (
    <>
      <BaseLayout>
        <div className="w-full h-fit py-16 md:py-24 px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light min-h-screen">
          <div className="hidden md:block h-fit md:col-start-2 md:col-span-3 pe-4 sticky top-32">
            <Link
              to="/interview/neimieipanni"
              className="my-4 text-sm md:text-base lg:text-2xl font-semibold leading-[1.2em] cursor-pointer block"
            >
              Nei Miei Panni
            </Link>
            <Link
              to="/interview/sophiestique"
              className="my-4 text-sm md:text-base lg:text-2xl font-semibold leading-[1.2em] cursor-pointer block"
            >
              Sophie Stique*
            </Link>
            <Link
              to="/interview/albinigroup"
              className="my-4 text-sm md:text-base lg:text-2xl font-semibold leading-[1.2em] cursor-pointer block"
            >
              Albini Group
            </Link>
            <Link
              to="/interview/officinae"
              className="my-4 text-sm md:text-base lg:text-2xl font-semibold leading-[1.2em] cursor-pointer block"
            >
              Officinae
            </Link>
            <Link
              to="/interview/ertkingdom"
              className="my-4 text-sm md:text-base lg:text-2xl font-semibold leading-[1.2em] cursor-pointer block"
            >
              E RT Kingdom
            </Link>
          </div>
          <div
            className={`col-span-4 md:col-start-6 md:col-span-6 overflow-y-scroll ${styles.scrollbarHide}`}
          >
            {children}
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
