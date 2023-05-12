import Card from "~/components/card";

export default function Teachers() {
  return (
    <>
      <div className="h-[3400px] w-auto bg-gray-800">
        <div className="translate-y-20 lg:translate-y-32">
          <div className="mx-8 flex justify-center  bg-rose-900 lg:mx-40">
            <h1 className=" mx-1 my-2 text-center text-4xl text-white lg:my-4 lg:text-6xl">
              Meet The Teachers
            </h1>
          </div>
          <div className="table w-full items-center object-center">
            <Card
              fName={"Mauricio"}
              lName={"Gomez (Gym owner/head martial arts coach)"}
              description={
                "Coahces in all martial arts. 4th Dan Blackbelt judo. 3rd Dan Blackbelt jiu-jitsu. 1st Dan Blackbelt karate. Accredited Muay Thai coach."
              }
              price={"£60"}
              image=""
              className="flex justify-center"
            />
            <Card
              fName={"Sarah"}
              lName={"Nova (Assistant martial arts coach)"}
              description={"5th Dan karate."}
              price={"£40"}
              image=""
              className="flex justify-center"
            />
            <Card
              fName={"Guy"}
              lName={"Victory (Assistant martial arts coach)"}
              description={
                "2nd Dan Blackbelt jiu-jitsu. 1st Dan Blackbelt karate."
              }
              price={"£45"}
              image=""
              className="flex justify-center"
            />
            <Card
              fName={"Traci"}
              lName={"Santiago (Fitness coach)"}
              description={
                "BSc in Sports Science. Qualified in health and nutrition. Specialises in devising strenght and conditioning programs for combat athletes."
              }
              price={"£50"}
              image=""
              className="flex justify-center"
            />
            <Card
              fName={"Harpreet"}
              lName={"Kaur (Fitness coach)"}
              description={"BSc in Physiotherapy. MSc in Sports Science."}
              price={"£40"}
              image=""
              className="flex justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
