import Test from "~/components/test";
import TimetableGrid from "~/components/timetablegridConpoment";

export default function Timetable() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="h-auto w-full  ">
          <h1 className="text-center text-3xl text-white">Timetable</h1>
        </div>
        <TimetableGrid />
      </div>
    </>
  );
}
