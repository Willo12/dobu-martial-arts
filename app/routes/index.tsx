import Feature from "~/components/homepage/Feature";
import SlideShow from "~/components/homepage/slideshow";
import WhyGo from "~/components/homepage/whygoConpoment";
import Test from "~/components/test";
import { MetaFunction } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => ({
  title: "Welcome to DoBu Martial Arts",

  description:
    "DoBu martial Arts is a top Martial Arts Gym in your region. It features classes such as judo, katate and private tuition as well as the use of the gym itself.",
});
export default function Index() {
  return (
    <>
      <html>
        <head></head>
        <body className="h-[2000px] w-auto bg-gray-800">
          <div className="">
            <SlideShow
              firstTitle="DoBu-Martial Arts"
              firstDescription="Where MEN grow up"
              secondTitle="Fun for all sizes"
              secondDescription="this is an image"
              thirdTitle="Book Now"
              thirdDescription="to become the next world champion"
            />
            <div className="hidden lg:visible">
              <Test />
            </div>
            <div className="translate-y-[420px] lg:translate-y-[1040px]">
              <div className="lg:my-20">
                <WhyGo
                  img="https://www.royalnavy.mod.uk/-/media/navyfit/sports/martial-arts/480x360/fx100237041-nsb-480x360-100k.jpg?h=360&la=en-GB&w=480&hash=C63C59FC12A176330F691E0A14A4B9D8"
                  description="Why Go to DoBu-Martial Arts?"
                  description1="DoBu-Martial Arts is one of the most popular Martial art clubs in the area."
                  description2="All of our students whom attended DoBu-Martial Arts have always achieved fantastic grades due to our wonderful instructors"
                />
              </div>

              <div className="mt-10">
                <Feature
                  title={"DoBu Features Classes such as"}
                  fea1={"Karate"}
                  fea2={"Judo"}
                  fea3={"Private Tuition"}
                />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
