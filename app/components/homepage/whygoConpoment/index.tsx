import { Parallax } from "react-scroll-parallax";

type WhyProps = {
  description: string;
  description1: string;
  description2: string;
  img: string;
};

const WhyGo = ({ description, description1, description2, img }: WhyProps) => {
  return (
    <>
      <div className="  ">
        <Parallax speed={10}>
          <div className="  mx-4 flex  h-auto w-auto  justify-center bg-gray-500 lg:ml-96 lg:justify-items-end lg:bg-transparent">
            <div className=" rounded-lg bg-gray-600 lg:flex">
              <img
                className=" lg:h-[420px] lg:w-[610px] lg:rounded-l-lg"
                src={img}
                alt=""
              />
              <div className=" text-center text-gray-300 lg:w-[500px] lg:bg-gray-500">
                <p className=" bg-red-800 text-4xl text-gray-200">
                  {description}
                </p>
                <div className="my-8">
                  <p className="mx-3 mt-6 text-left  text-2xl">
                    {description1}
                  </p>
                  <p className="mx-3 mt-3 text-left  text-2xl">
                    {description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default WhyGo;
