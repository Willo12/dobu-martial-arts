import Navbar from "~/components/navbar";
import Card from "~/components/card";
import Description from "~/components/about/description";
import Footer from "~/components/footer";

export default function About() {
  return (
    <>
      <div className="w-full translate-y-10 bg-gray-800 md:w-auto">
        <div className="flex h-28 w-full items-center justify-center lg:h-64 ">
          <div className="flex h-24 w-80 items-center justify-center bg-rose-900 lg:mx-24 lg:h-40 lg:w-[82%] ">
            <h1 className=" mr-2 -translate-y-1 text-center text-6xl text-white lg:text-8xl">
              About Us
            </h1>
          </div>
        </div>
        <div className="translate-y-12 md:translate-y-28">
          <Description
            imageUrl="https://149811805.v2.pressablecdn.com/wp-content/uploads/2021/12/Featured-Image-2.png"
            imageAlt="An instructor teaching a student"
            title="What do we do?"
            description="We are a martial-arts gym that prioritises itself on making our
              clients satisfied."
            description1=" Our experienced instructors offer high-quality instruction in
            Judo, Karate, and private tuition. We believe in teaching valuable
            life skills such as discipline and respect. Join our community
            today to improve your technique, fitness, and personal growth!"
            className="flex-row-reverse"
          />
        </div>

        <hr className="mx-2 hidden translate-y-32 opacity-75 lg:visible lg:mx-24 lg:-translate-y-9" />

        <div className="mt-10 w-full translate-y-28 lg:translate-y-0 ">
          <Description
            imageUrl="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2021/03/thumb_720_450_dreamstime_m_25450645.jpg"
            imageAlt="An instructor teaching a student"
            title="Our Goals & Objectives"
            description=" Our goals is to promote physical, mental, and emotional benefits of martial arts training.
              "
            description1=" And our objectives is to continuously improve instruction and facilities.
              "
            headingClassName=""
            paragraphClassName="md:h-[369px]"
          />
        </div>
      </div>
    </>
  );
}
