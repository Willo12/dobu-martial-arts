import Navbar from "~/components/navbar";
import Test from "~/components/test";

export default function Index() {
  return (
    <>
      <html>
        <body className="h-auto w-full bg-gray-800">
          <div>
            <Navbar className="" />
          </div>
          <div>
            <Test />
          </div>
        </body>
      </html>
    </>
  );
}
