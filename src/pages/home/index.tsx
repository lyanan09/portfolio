import AppLayout from "../../components/AppLayout";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t, i18n } = useTranslation(["dashboard"]);


  return (
    <AppLayout>
      <div className="">Yanan Liu</div>
      <div className="">Frontend Developer</div>
      <div className="">London, UK</div>
      <div>Experienced and versatile frontend developer with 5+ years of experience in development, UI support, and cross-functional collaboration across industries and regions. Skilled at working across a broad tech stack and adapting to different contexts. Curious, analytical, and deeply caring about how and why things are made.</div>
    </AppLayout>
  );
};

export default Home;
