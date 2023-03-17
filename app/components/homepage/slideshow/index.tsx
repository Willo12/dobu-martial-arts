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
    <div className="relative translate-y-24 md:translate-y-20 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-[310.2px] w-full md:ml-36 md:h-[550px] md:w-[1600px]   md:scale-110  ">
            <img
              src={image}
              className="absolute flex w-full scale-150 transform items-center object-contain md:w-full md:scale-100  md:object-contain"
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
                  <h2 className="h-28 w-96  justify-center rounded-xl bg-gray-800 bg-opacity-60 text-center text-7xl font-bold">{`${thirdTitle}`}</h2>
                  <p className="ml-32 mt-10 flex justify-start text-left text-3xl">{`${thirdDescription}`}</p>
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
