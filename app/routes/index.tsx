import SlideShow from "~/components/homepage/slideshow";
import Test from "~/components/test";

export default function Index() {
  return (
    <>
      <html>
        <head></head>
        <body className="h-auto w-full bg-neutral-800">
          <div className="">
            <SlideShow
              firstTitle="DoBu-Martial Arts"
              firstDescription="Where MEN grow up"
              secondTitle="Fun for all sizes"
              secondDescription="this is an image"
              thirdTitle="Book Now"
              thirdDescription="to become the next world champion"
            />
            ;
            <Test />
          </div>
        </body>
      </html>
    </>
  );
}
