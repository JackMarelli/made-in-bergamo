import BaseLayout from "../BaseLayout/BaseLayout";
import styles from "./InterviewLayout.module.scss";
import InterviewsNavigator from "../../components/InterviewsNavigator/InterviewsNavigator";

export default function InterviewLayout({ props, children }) {
  return (
    <>
      <BaseLayout>
        <div className="w-full h-fit py-16 md:py-24 px-4 md:py-32 md:px-8 xl:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-y-0 bg-mib-beige-light min-h-screen">
          <div className="hidden md:block h-fit md:col-start-2 md:col-span-3 pe-4 fixed left-4 md:left-8 xl:left-12 top-1/2 -translate-y-1/2">
          <InterviewsNavigator />
          </div>
          <div
            className={`col-span-4 md:col-start-5 md:col-span-6 overflow-y-scroll ${styles.scrollbarHide}`}
          >
            {children}
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
