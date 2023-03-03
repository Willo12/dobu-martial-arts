import SlideShow from "~/components/homepage/slideshow";
import Test from "~/components/test";

export default function Index() {
  return (
    <>
      <html>
        <body className="h-auto w-full bg-gray-800">
          <div className="mt-24">
            <SlideShow />
            <Test />
          </div>
        </body>
      </html>
    </>
  );
}
