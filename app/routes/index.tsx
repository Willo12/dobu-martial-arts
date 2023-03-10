import SlideShow from "~/components/homepage/slideshow";
import Test from "~/components/test";

export default function Index() {
  return (
    <>
      <html>
        <body className="h-auto w-full bg-gray-800">
          <div className="mt-24 md:mt-28">
            <SlideShow
              firstDescription="fafafa"
              firstTitle="egg"
              secondDescription="this is an image"
              secondTitle="this is the second image"
              thirdTitle="this is the third image"
              thirdDescription="this is an image"
            />
            ;
            <Test />
          </div>
        </body>
      </html>
    </>
  );
}
