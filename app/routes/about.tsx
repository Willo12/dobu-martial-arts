import Navbar from "~/components/navbar";
import Card from "~/components/card";
import Description from "~/components/about/description";
import Footer from "~/components/footer";
import { MetaFunction } from "@remix-run/server-runtime";
import { Link } from "@remix-run/react";
import { link } from "fs";

export const meta: MetaFunction = () => ({
  title: "About DoBu",
  description:
    "What is DoBu martial arts about? Who are our instructors? We have a handful of experienced and well trained martial art instructors.",
});

export default function About() {
  return (
    <>
      <div className="h-auto w-full translate-y-10 bg-gray-800 md:w-auto">
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
            className="flex-row-reverse md:h-[369px]"
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
        <div className="translate-y-0 md:translate-y-0">
          <Description
            imageUrl="https://www.wellnessliving.com/blog/wp-content/uploads/2019/02/Teaching-Children-Martial-Arts.jpg"
            imageAlt="An instructor teaching a student"
            title="Learn more about our instructors!"
            description={`Our instructors have been teaching and guiiding martial-enthisasists for several years. Whether big or small, each student has always had an amazing time with our supportive instructors.
            We hope you see us soon! `}
            description1="if you want to learn more about our fantastic instructors
            "
            Links="Click Here"
            LinkRef="teachers"
            LinkClasses="text-blue-200"
            className="flex-row-reverse md:h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
