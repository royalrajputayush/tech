"use client";
import { Fade } from "react-awesome-reveal";
import styles from "@/styles/Style";

const BannerStrip = () => {
  return (
    <div
      className={`${styles.flexCenter} text-[28px] ${styles.padding} rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:mx-0 mx-6 my-28`}
    >
      <Fade delay={1e3} damping={1e-1}>
        <h1 className="font-poppins font-semibold text-white">
          Failure is an option here. If things are not failing, you are not innovating enough.
          <br /> <span className={`${styles.flexCenter}`}>- Elon musk.</span>
        </h1>
      </Fade>
    </div>
  );
};

export default BannerStrip;
