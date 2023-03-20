import React, { useState, useEffect } from "react";
import images from "./images";

type SlideshowPros = {
  firstTitle?: string;
  firstDescription?: string;

  secondTitle?: string;
  secondDescription?: string;

  thirdTitle?: string;
  thirdDescription?: string;
};

const Slideshow = ({
  firstTitle,
  firstDescription,
  secondDescription,
  secondTitle,
  thirdDescription,
  thirdTitle,
}: SlideshowPros) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative translate-y-24 md:translate-y-14 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className=" relative h-[310.2px] w-full md:h-[550px] md:scale-90  ">
            <img
              src={image}
              className="absolute flex w-full -translate-y-14 transform items-center object-contain md:-translate-y-0 md:scale-100  md:object-contain"
              alt="Slideshow"
            />
            <div className="">
              {currentIndex === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center  p-4 text-white">
                  <h2 className="items-center text-3xl font-bold">{`${firstTitle}`}</h2>
                  <p className="text-lg">{`${firstDescription}`}</p>
                </div>
              )}

              {currentIndex === 1 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center  p-4 text-white">
                  <h2 className=" items-center text-3xl font-bold">{`${secondTitle}`}</h2>

                  <p className="text-lg">{`${secondDescription}`}</p>
                </div>
              )}

              {currentIndex === 2 && (
                <div className="absolute inset-0 ml-36  flex  flex-col items-center justify-center   p-4 text-white">
                  <a href="/memberships">
                    <h2 className="flex items-center justify-center rounded-xl bg-gray-800 bg-opacity-60 text-center font-bold md:ml-64 md:h-28 md:w-96 md:text-7xl">{`${thirdTitle}`}</h2>
                  </a>
                  <p className="ml-96 mt-10 flex justify-start text-left md:text-3xl">{`${thirdDescription}`}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
