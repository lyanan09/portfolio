import { useTranslation } from "react-i18next";
import IconGithub from "../assets/images/icon_github.svg?react";

import ls1 from "../assets/images/lifesim-1.png";
import ls2 from "../assets/images/lifesim-2.png";
import ls3 from "../assets/images/lifesim-3.png";
import ls5 from "../assets/images/lifesim-5.png";
import ls6 from "../assets/images/lifesim-6.png";
import ls7 from "../assets/images/lifesim-7.png";
import ls8 from "../assets/images/lifesim-8.png";
import ls9 from "../assets/images/lifesim-9.png";
import ls10 from "../assets/images/lifesim-10.png";
import ls11 from "../assets/images/lifesim-11.png";

const ProjectLifeSim = () => {
  const { t } = useTranslation();

  return (
    <>
    <iframe src="https://player.vimeo.com/video/789427321?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640px" height="640px" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Life Simulation"></iframe>
      <div className="p-6">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-4">Life Simulation </h3>
          <a href="//github.com/lyanan09/wcc-life-simulation" target="_blank">
            <IconGithub className="w-4 h-4 fill-white" />
          </a>
        </div>

        <div className="flex items-center mt-2">
          {["P5.js", "JavaScript", "CSS"].map((item) => (
            <span className="mr-2 py-1 px-2 text-xs border border-white/20 rounded-md bg-white/5">
              {item}
            </span>
          ))}
        </div>

        <p className="leading-relaxed text-gray-200 mt-4">
          A generative art project based on the Boids algorithm, simulating
          multiple particle systems with different behavioral rules.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-10">
          <img src={ls2} alt="" />
          <img src={ls3} alt="" />
          <img src={ls5} alt="" />
          <img src={ls6} alt="" />
          <img src={ls7} alt="" />
          <img src={ls8} alt="" />
          <img src={ls9} alt="" />
          <img src={ls10} alt="" />
          <img src={ls11} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProjectLifeSim;
