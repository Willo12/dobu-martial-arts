import React, { useState, useEffect } from "react";
import kidGraphic from "~/assets/jpg/kids.jpg";
import styles from "./SlideShow.module.css";

const SlideShow = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <header className="h-96 w-auto">
        <div className="relative text-center">
          <img
            src={kidGraphic}
            alt="A Kid doing Martial Arts"
            className={`${styles.animateBlur} ${
              isLoaded ? styles.blur0 : styles.blurSm
            } duration-2000 transition ease-in-out`}
          />

          <div className="flex w-40 -translate-y-28 items-center justify-center text-center">
            <div className="justify-center rounded-md bg-red-200">
              <h1 className="text-3xl text-white">DoBu Martial Arts</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SlideShow;
