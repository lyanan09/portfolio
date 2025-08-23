import { useTranslation } from "react-i18next";

import CFGCover from "../assets/images/cover-cfg.png";
import CFG1 from "../assets/images/cfg-1.png";
import CFG2 from "../assets/images/cfg-2.png";
import CFG3 from "../assets/images/cfg-3.png";

const ProjectCFG = () => {
  const { t } = useTranslation();

  return (
    <>
      <img src={CFGCover} alt="" />
      <div className="p-6">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold mr-4">CheerfulGoat Ecommerce</h3>
        </div>

        <div className="flex items-center my-2">
          {[
            "Next.js",
            "TypeScript",
            "Formik",
            "Zustand",
            "Primreact",
            "Tailwind CSS",
          ].map((item) => (
            <span className="mr-2 py-1 px-2 text-xs border border-white/20 rounded-md bg-white/5 backdrop-blur-sm shadow-sm">
              {item}
            </span>
          ))}
        </div>

        <p className="leading-relaxed text-gray-200 mt-4 mb-10 flex flex-col">
          <span>
            Maintained and expanded a production e-commerce platform based on
            evolving business scenarios.{" "}
          </span>
          <span>
            Primarily responsible for enhancing the promotions feature set,
            including promo code, voucher logic, and free gift offerings, and
            integrating them seamlessly into both browsing and checkout
            experiences.
          </span>
          <span>
            The project is no longer online, and the screenshots shown here
            contains no real data. Only static screenshots are available for
            demonstration purposes.
          </span>
        </p>

        <img src={CFG1} alt="" className="mt-6" />
        <img src={CFG2} alt="" className="mt-6" />
        <img src={CFG3} alt="" className="mt-6" />
      </div>
    </>
  );
};

export default ProjectCFG;
