import { useTranslation } from "react-i18next";
import insuranceVideo from "../assets/videos/insurance.mp4";
import coverInsurance from "../assets/images/cover-insurance.png";
import Insurance1 from "../assets/images/insurance-1.png";
import Insurance2 from "../assets/images/insurance-2.png";
import Insurance3 from "../assets/images/insurance-3.png";

import IconGithub from "../assets/images/icon_github.svg?react";

const ProjectInsurance = () => {
  const { t } = useTranslation();

  return (
    <>
      <video
        src={insuranceVideo}
        poster={coverInsurance}
        controls
        className="w-full h-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-4">
            Insurance Configuration Platform
          </h3>
          <a
            href="//github.com/lyanan09/insurance-configuration"
            target="_blank"
            className="mr-2"
          >
            <IconGithub className="w-4 h-4 fill-white" />
          </a>
          <a
            href="//github.com/lyanan09/insurance-components-lib"
            target="_blank"
          >
            <IconGithub className="w-4 h-4 fill-white" />
          </a>
        </div>

        <div className="flex items-center my-2">
          {["Vue.js", "JavaScript", "Less", "Ant Design"].map((item) => (
            <span className="mr-2 py-1 px-2 text-xs border border-white/20 rounded-md bg-white/5 backdrop-blur-sm shadow-sm">
              {item}
            </span>
          ))}
        </div>

        <p className="leading-relaxed text-gray-200 mt-4 mb-10">
          An insurance product configuration system with an internal component
          library, supporting modular product assembly and faster online
          launches for sales use.
        </p>

        <img src={Insurance1} alt="" className="mt-6" />
        <img src={Insurance2} alt="" className="mt-6" />
        <img src={Insurance3} alt="" className="mt-6" />
      </div>
    </>
  );
};

export default ProjectInsurance;
