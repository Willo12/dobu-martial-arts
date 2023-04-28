import React from "react";
import timetable from "~/assets/jpg/timetable.jpg";

const TimetableGrid = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <img src={timetable} alt="Timetable Grid" />
      </div>
    </>
  );
};

export default TimetableGrid;
