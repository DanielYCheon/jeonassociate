import React, { useState, useEffect } from "react";
import CareersImage from "./Asset/CareersImage.jpg";
import { IoMdTime } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

const Careers = () => {
  const textlist = [
    { title: "Flexible", icon: <IoMdTime size={90} /> },
    { title: "Collaborative", icon: <FaRegHandshake size={90} /> },
    { title: "Success", icon: <BsGraphUpArrow size={90} /> },
  ];
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-screen">
      <div className="relative">
        <img src={CareersImage} className="h-[40vh] w-full opacity-30" />
        <section className="absolute inset-0 pt-32 p-6">
          <header className="flex justify-center text-4xl font-bold gap-3 font-serif lg:text-7xl">
            Join Us
          </header>
          <p className="flex justify-center items-center lg:text-xl ml-30 font-serif text-xl ">
            Join our team, drive innovation with us
          </p>
          <div className="flex justify-center mt-8">
            <p className=" border-b-4 w-[40vw] border-red-400">{/*Link */}</p>
          </div>
        </section>
      </div>
      {/*------ Careers Section 2 icons+contents -------*/}
      <section className=" bg-gray-600">
        <p className="text-white flex justify-center items-center text-5xl font-extrabold p-6 ">
          Our Employees are:
        </p>

        <div className="flex flex-col justify-center gap-y-10 lg:flex-row lg:gap-x-10 ">
          {textlist.map((textlist, index) => (
            <div className="flex flex-col items-center">
              <div className="bg-red-300 w-[50vw] flex flex-col justify-center items-center lg:w-[20vw]">
                {textlist.icon}
                <p className="text-center mt-4 font-extrabold text-lg">
                  {textlist.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col bg-white h-screen lg:p-20 w-sreen p-7 gap-y-10">
        {/*------------------------------------------------*/}
        <div className="">
          <h className="text-2xl font-bold font-sans">Flexible</h>
          <p className="text-lg text-zinc-600 ">
            We prioritize flexibility, allowing our team to work from any
            location and set their own schedules, provided that all
            responsibilities are met with excellence. This approach supports a
            healthy work-life balance, enhancing both creativity and
            productivity. Join us to experience a workplace that respects your
            unique work style and supports your professional growth.
          </p>
        </div>
        <div className="flex justify-center">
          <p className="border-b-2 border-gray-300 w-[50vw]"></p>
        </div>
        <div className="bg-yellow-700">
          <h>Collaborative</h>
          <p>
            We work as a team and support each other. Collaboration is at the
            heart of our success, fostering an environment where ideas are
            shared openly and everyone's contributions are valued. By working
            together, we harness our collective strengths and drive innovation.
            Join us to be part of a supportive team that is committed to
            achieving excellence together.
          </p>
        </div>
        <div className="bg-pink-300">
          <h>Success</h>
          <p>
            We are financially prosperous together. Our collective success
            ensures a stable and thriving environment for all team members. By
            achieving our financial goals, we not only secure the company's
            future but also provide opportunities for personal and professional
            growth. Join us and be part of a prosperous organization where your
            contributions are recognized and rewarded.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Careers;
