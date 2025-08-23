import { useTranslation } from "react-i18next";
import IconGithub from "../assets/images/icon_github.svg?react";

import ForbesCover from "../assets/images/cover-forbes.png";
import Forbes1 from "../assets/images/forbes-1.png";
import Forbes2 from "../assets/images/forbes-2.png";
import Forbes3 from "../assets/images/forbes-3.png";

const ProjectForbes = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <img src={ForbesCover} alt="" /> */}

      <div className="p-6">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-4">Forbes Marketplace</h3>
          <a
            href="//github.com/lyanan09/sample-marketplace-forbes"
            target="_blank"
          >
            <IconGithub className="w-4 h-4 fill-white" />
          </a>
        </div>

        <div className="flex items-center my-2">
          {["Vue.js", "Vuex", "JavaScript", "SCSS", "Bootstrap"].map((item) => (
            <span className="mr-2 py-1 px-2 text-xs border border-white/20 rounded-md bg-white/5 backdrop-blur-sm shadow-sm">
              {item}
            </span>
          ))}
        </div>

        <p className="leading-relaxed text-gray-200 mt-4 mb-10 flex flex-col">
          <span>
            A video content marketplace for Forbes, featuring custom layouts and
            showcasing in-house media. The platform was designed to demonstrate
            a potential B2B licensing solution.
          </span>
          <span>
            Fully built for internal delivery, with complete UI flows and a
            strong focus on presentation, clarity, and scalability.
          </span>
          <span>
            As this project was completed some time ago and data is no longer
            available, design screenshots are shown instead. Full source code
            and implementation details can be found on GitHub.
          </span>
        </p>

        <img src={Forbes1} alt="" className="mt-6" />
        <img src={Forbes2} alt="" className="mt-6" />
        <img src={Forbes3} alt="" className="mt-6" />
      </div>
    </>
  );
};

export default ProjectForbes;
