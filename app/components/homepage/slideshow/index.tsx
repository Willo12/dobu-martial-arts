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
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-[600px] w-full justify-center md:h-[1000px]">
            <img
              src={image}
              className="md:h-[1500px ] absolute h-auto  w-full md:h-[361] md:w-full md:object-contain"
              alt="Slideshow"
            />
            {currentIndex === 0 && (
              <div className="absolute top-0 left-0 right-0 justify-center bg-gray-800 bg-opacity-50 p-4  text-white">
                <h2 className="text-2xl font-bold">{`${firstTitle}`}</h2>
                <p className="text-lg">{`${firstDescription}`}</p>
              </div>
            )}

            {currentIndex === 1 && (
              <div className="absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4 text-white">
                <h2 className="items-center text-2xl font-bold">{`${secondTitle}`}</h2>
                <p className="text-lg">{`${secondDescription}`}</p>
              </div>
            )}

            {currentIndex === 2 && (
              <div className="absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4 text-white">
                <h2 className="text-2xl font-bold">{`${thirdTitle}`}</h2>
                <p className="text-lg">{`${thirdDescription}`}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
