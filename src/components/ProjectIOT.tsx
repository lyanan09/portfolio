import { useTranslation } from "react-i18next";

import IOTCover from "../assets/images/cover-iot.png";
import IOT1 from "../assets/images/iot-1.png";
import IOT2 from "../assets/images/iot-2.png";
import IOT3 from "../assets/images/iot-3.png";

import IconLink from "../assets/images/icon_link.svg?react";

const ProjectIOT = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <img src={IOTCover} alt="" /> */}

      <div className="p-6">
        <div className="flex items-baseline">
          <h3 className="text-xl font-semibold mr-4">IOT Dashboard</h3>
          <a href="//iot-enterprise-staging.timemore.cn/" target="_blank">
            <IconLink className="w-3 h-3 fill-white" />
          </a>
        </div>

        <div className="flex items-center my-2">
          {[
            "React.js",
            "TypeScript",
            "React Hook Form",
            "Redux Toolkit",
            "Primreact",
            "Tailwind CSS",
          ].map((item) => (
            <span className="mr-2 py-1 px-2 text-xs border border-white/20 rounded-md bg-white/5">
              {item}
            </span>
          ))}
        </div>

        <p className="leading-relaxed text-gray-200 mt-4 mb-10 flex flex-col">
          Designed and implemented the front-end architecture of an IoT
          management platform that enables enterprise users to monitor assets,
          visualize data insights, and control devices in real time.
          <span>Currently under active development.</span>
        </p>

        <img src={IOT1} alt="" className="mt-6" />
        <img src={IOT2} alt="" className="mt-6" />
        <img src={IOT3} alt="" className="mt-6" />
      </div>
    </>
  );
};

export default ProjectIOT;
