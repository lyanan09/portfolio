import AppLayout from "../../components/AppLayout";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation(["dashboard"]);

  return (
    <AppLayout>
      <section>
        Programming languages list Frameworks & libraries Technologies Programs
        & tools (e.g. Figma, Sketch, VSCode)
      </section>
    </AppLayout>
  );
};

export default About;
