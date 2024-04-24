import React from "react";
import styles from "./SmallCta.module.scss"; // Make sure to import the SCSS file for styles

export default function SmallCta(props) {
  return (
    <div
      className={`${styles.cta_container} w-fit my-1 text-sm md:text-base font-semibold leading-[1.2em] cursor-pointer block relative`}
    >
      {props.text}
      <img
        className={`${styles.arrow} h-full w-[10px]`}
        src="/assets/images/svg/arrow-top-right.svg"
        alt="arrow icon"
      />
    </div>
  );
}