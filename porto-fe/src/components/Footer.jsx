/* eslint-disable react/jsx-no-target-blank */
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

import react from "@/assets/react.png";
import gin from "@/assets/gin.png";
import go from "@/assets/go.png";
import javascript from "@/assets/javascript.png";
import vite from "@/assets/vite.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-between items-center flex-wrap gap-10">
        <section className="flex items-center flex-wrap gap-10">
          <div>
            <p className="text-white text-3xl">Call me:</p>
            <p className="text-white text-3xl">(+62) 85715431049</p>
          </div>

          <div>
            <p className="text-white text-3xl">Email:</p>
            <p className="text-white text-3xl break-all">jeremy.puglisi17@gmail.com</p>
          </div>
        </section>

        <section className="flex items-center gap-10 z-10">
          <a href="https://github.com/jrmygp" target="_blank">
            <IoLogoGithub className="text-5xl" />
          </a>

          <a href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/" target="_blank">
            <IoLogoLinkedin className="text-5xl" />
          </a>

          <a href="https://www.instagram.com/jrmygp/" target="_blank">
            <IoLogoInstagram className="text-5xl" />
          </a>
        </section>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-white text-2xl">This app is built using :</p>

        <div className="flex flex-wrap gap-2">
          <img src={vite} className="h-10 w-10 object-contain" />
          <img src={react} className="h-10 w-10 object-contain" />
          <img src={gin} className="h-10 w-10 object-contain" />
          <img src={go} className="h-10 w-10 object-contain" />
          <img src={javascript} className="h-10 w-10 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
