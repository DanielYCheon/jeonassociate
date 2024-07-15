import React, { useEffect } from "react";
import proto_image from "./Asset/proto_image.jpg";
import Navbar from "./Navbar/Navbar";
import Industries from "./Industries";
import Service from "./Service";
import HowWeWork from "./HowWeWork";
import Careers from "./Careers";
/**
 *
 * image from https://free-3dtextureshd.com/download/abstract-black-white-waves-3d-wallpaper-ultra-hd-4k-background-desktop-phone-free-download-9/ copy right
 *
 */

const Home = () => {
  useEffect(() => {
    console.log(
      "Framework : React, Tailwind CSS \n*All Icons provided by Heroicons / MIT License\n*Stepper and StepContent provided by Material-UI\nCode by DanielYCheon"
    );
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="relative ">
          <img
            src={proto_image}
            className="w-screen object-cover mx-auto h-screen
            "
          />
          <div className="lg:gap-y-6 absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-blue-300 bg-opacity-25">
            <h1 className="text-3xl font-bold mb-2 font-serif ">
              Your Trusted Partners: Where Expertise Meets Detail
            </h1>
            <p className="text-lg font-normal font-serif">
              JEON & ASSOCIATES, P.C.
            </p>
          </div>
        </div>
      </div>
      <Service />
      <Industries />
      <HowWeWork />
      <Careers />
    </div>
  );
};
export default Home;
