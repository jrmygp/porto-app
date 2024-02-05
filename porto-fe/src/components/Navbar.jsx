/* eslint-disable react/jsx-no-target-blank */
import { memo } from "react";

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

function Navbar() {
  return (
    <nav className="flex justify-center sm:justify-between items-center w-full px-20 py-11 flex-wrap gap-10 bg-primary">
      <p className="text-3xl">{`Jeremy's Portfolio`}</p>

      <div className="flex justify-between items-center gap-20 flex-wrap">
        <a className="text-3xl" href="#projects">
          Projects
        </a>
        <a className="text-3xl" href="#technologies">
          Technologies
        </a>
        <a className="text-3xl text-center" href="#about-me">
          About me
        </a>
      </div>

      <div className="flex justify-between items-center gap-20">
        <a href="https://github.com/jrmygp" target="_blank">
          <IoLogoGithub className="text-3xl" />
        </a>

        <a href="https://www.linkedin.com/in/jeremy-puglisi-00b8bb1ab/" target="_blank">
          <IoLogoLinkedin className="text-3xl" />
        </a>

        <a href="https://www.instagram.com/jrmygp/" target="_blank">
          <IoLogoInstagram className="text-3xl" />
        </a>
      </div>
    </nav>
  );
}

export default memo(Navbar);
