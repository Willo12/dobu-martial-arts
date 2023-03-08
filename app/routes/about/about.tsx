import Navbar from "~/components/navbar";
import Card from "~/components/card";

type AboutProps = {
  color?: string;
};

export default function About() {
  return (
    <>
      <html>
        <body className="h-auto w-full bg-gray-800">
          <div className="h-full">
            <div className="flex justify-center text-center">
              <h1 className="mt-56 text-5xl text-white">
                Meet Your Instructors{""}
              </h1>
            </div>
            <div
              className="grid border-spacing-10 items-center justify-center
        gap-2 gap-x-96 py-20 lg:flex lg:space-x-20"
            >
              <Card
                fName="Bill"
                lName="Ryan"
                price="50"
                description="jfoiajsjif"
              />
              <Card
                fName="Bill"
                lName="Ryan"
                price="50"
                description="jfoiajsjif"
              />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
