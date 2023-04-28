import { useState } from "react";
import List from "./list";
import { Parallax } from "react-scroll-parallax";

type FeatureProps = {
  title: String;
  fea1: String;
  fea2: String;
  fea3: String;
};

const Feature = ({ title, fea1, fea2, fea3 }: FeatureProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Parallax speed={10}>
        <div className="block w-full bg-gray-800 px-10 lg:px-40">
          <div className=" w-full bg-red-800 text-center">
            <h1 className="px-6 text-3xl text-white lg:text-6xl">{title}</h1>
          </div>
          <div className="mx-4 rounded-b-md bg-gray-500 lg:mx-40 lg:items-center lg:justify-center lg:overflow-y-scroll lg:transition-all ">
            <List fea1={fea1} fea2={fea2} fea3={fea3} />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Feature;
