import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="absolute bottom-0 text-xs text-gray-500 p-2">
      more projeccts will be added soon...
    </footer>
  );
};

export default AppFooter;
