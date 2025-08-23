import AppLayout from "../../components/AppLayout";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Thumb from "../../components/Thumb";

import iconGithub from "../../assets/images/icon_github.svg";
import iconEmail from "../../assets/images/icon_email.svg";
import iconLinkedin from "../../assets/images/icon_linkedin.svg";

import coverCFG from "../../assets/images/cover-cfg.png";
import coverForbes from "../../assets/images/cover-forbes.png";
import coverInsurance from "../../assets/images/cover-insurance.png";
import coverIOT from "../../assets/images/cover_iot.png";
import coverLifeSim from "../../assets/images/lifesim-1.png";

import ProjectCFG from "../../components/ProjectCFG";
import ProjectForbes from "../../components/ProjectForbes";
import ProjectInsurance from "../../components/ProjectInsurance";
import ProjectIOT from "../../components/ProjectIOT";
import ProjectLifeSim from "../../components/ProjectLifeSim";

const projects = {
  cfg: {
    name: "CheerfulGoat Ecommerce",
    cover: coverCFG,
    color: "#f7e8d4",
    component: <ProjectCFG />,
    ratio: 225 / 150,
  },
  forbes: {
    name: "Forbes Marketplace",
    cover: coverForbes,
    color: "#f0f0f0",
    component: <ProjectForbes />,
    ratio: 225 / 150,
  },
  insurance: {
    name: "Insurance Configuration",
    cover: coverInsurance,
    color: "#dceeff",
    component: <ProjectInsurance />,
    ratio: 225 / 150,
  },
  iot: {
    name: "IoT Dashboard",
    cover: coverIOT,
    color: "#e8fddf",
    component: <ProjectIOT />,
    ratio: 225 / 150,
  },
  lifesim: {
    name: "Life Simulation",
    cover: coverLifeSim,
    color: "#e8fddf",
    component: <ProjectLifeSim />,
    ratio: 225 / 150,
  },
};
type ProjectKey = keyof typeof projects;

type ThumbConfig = {
  id: ProjectKey;
  name: string;
  cover: string;
  style: React.CSSProperties;
};

const Home = () => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [thumbConfigs, setThumbConfigs] = useState<ThumbConfig[]>([]);

  // useEffect(() => {
  //   const padding = 48;
  //   const screenW = window.innerWidth;
  //   const screenH = window.innerHeight;
  //   const centerW = 500;
  //   const centerH = 200;

  //   const newConfigs = Object.entries(projects).map(([id, data]) => {
  //     const ratio = data.ratio;
  //     const width = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
  //     const height = Math.floor(width / ratio);

  //     let x, y;
  //     do {
  //       x = Math.random() * (screenW - width);
  //       y = Math.random() * (screenH - height);
  //     } while (
  //       x > screenW / 2 - centerW / 2 &&
  //       x < screenW / 2 + centerW / 2 &&
  //       y > screenH / 2 - centerH / 2 &&
  //       y < screenH / 2 + centerH / 2
  //     );

  //     return {
  //       id: id as ProjectKey,
  //       name: data.name,
  //       cover: data.cover,
  //       style: {
  //         position: "absolute",
  //         left: `${x}px`,
  //         top: `${y}px`,
  //         width: `${width}px`,
  //         height: `${height}px`,
  //       },
  //     };
  //   });

  //   setThumbConfigs(newConfigs);
  // }, []);

  return (
    <AppLayout>
      <section className="flex items-center justify-center w-screen min-h-screen max-h-screen mx-auto overflow-hidden">
        <Thumb
          id="cfg"
          name="CheerfulGoat Ecommerce"
          cover={coverCFG}
          position="right-20 bottom-46"
          size="w-[200px] h-[125px]"
          onClick={setSelectedProject}
        />
        <Thumb
          id="forbes"
          name="Forbes Marketplace"
          cover={coverForbes}
          position="right-28 top-10"
          size="w-[480px] h-[185px]"
          onClick={setSelectedProject}
        />
        <Thumb
          id="insurance"
          name="Insurance Configuration"
          cover={coverInsurance}
          position="right-60 bottom-10"
          size="w-[280px] h-[172px]"
          onClick={setSelectedProject}
        />
        <Thumb
          id="iot"
          name="IoT Dashboard"
          cover={coverIOT}
          position="left-10 top-20"
          size="w-[300px] h-[240px]"
          onClick={setSelectedProject}
        />
        <Thumb
          id="lifesim"
          name="Life Simulation"
          cover={coverLifeSim}
          position="left-70 bottom-20"
          size="w-[120px] h-[120px]"
          onClick={setSelectedProject}
        />

        {/* {thumbConfigs.map((thumb) => (
          <Thumb
          key={thumb.id}
          id={thumb.id}
          name={thumb.name}
          cover={thumb.cover}
          style={thumb.style}
          onClick={setSelectedProject}
          />
          ))} */}

        <article className="flex flex-col max-w-[608px] pb-10">
          <h1 className="text-xl">Yanan Liu</h1>
          <div className="text-xs text-gray-500">Frontend Developer</div>
          <div className="flex items-center">
            <a href="//github.com/lyanan09/portfolio" target="_blank">
              <img
                src={iconGithub}
                alt="github"
                className="w-5 h-5 my-2 mr-2"
              />
            </a>
            <a href="//www.linkedin.com/in/yananliu09/" target="_blank">
              <img
                src={iconLinkedin}
                alt="linkedin"
                className="w-5 h-5 my-2 mr-2.5"
              />
            </a>
            <a href="mailto:lyananlynn@gmail.com" target="_blank">
              <img
                src={iconEmail}
                alt="email"
                className="w-4.5 h-4.5 my-2 mr-2"
              />
            </a>
          </div>
          <div className="text-sm animate-fadeIn flex flex-col">
            <span>
              Frontend developer with 5+ years of experience in development, UI
              support, and cross-functional collaboration across industries and
              regions.
            </span>
            <span>
              Skilled at working across a broad tech stack and adapting to
              different contexts.
            </span>
            <span>
              Curious, analytical, and deeply caring about how and why things
              are made.
            </span>
          </div>
        </article>
      </section>

      {selectedProject && projects[selectedProject as ProjectKey].component && (
        <section
          className="absolute top-0 w-screen min-h-screen z-[9999] bg-black/80 pl-12"
          onClick={() => setSelectedProject(null)}
        >
          <article
            className="bg-black text-white max-w-[640px] ml-auto shadow-[0_0_20px_rgba(127,127,127,0.2)] relative leading-[1.5] min-h-screen max-h-screen overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {projects[selectedProject as ProjectKey].component}
          </article>
        </section>
      )}
    </AppLayout>
  );
};

export default Home;
