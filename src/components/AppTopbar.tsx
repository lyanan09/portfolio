import { useRef } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import { useTranslation } from "react-i18next";

const AppTopbar = () => {
  const { t, i18n } = useTranslation(["auth"]);

  // Global sidebar toggle state
  // Menu references for language and user dropdowns
  const menuLang = useRef<Menu>(null);



  // Language switch menu items
  const langItems: MenuItem[] = [
    {
      label: "中文",
      command: () => {
        i18n.changeLanguage("zh");
      },
    },
    {
      label: "English",
      command: () => {
        i18n.changeLanguage("en");
      },
    },
  ];


  return (
    <div className="topbar-container flex justify-between items-center mb-8">
  
      <div className="topbar-right">
        <ul className="topbar-menu flex items-center m-0 p-0">
          {/* Language dropdown menu */}
          <li>
            <Menu ref={menuLang} model={langItems} popup id="menu_lang" />
            <Button
              icon="pi pi-language"
              onClick={(e) => menuLang.current!.toggle(e)}
              text
              rounded
              aria-label="lang"
              aria-controls="menu_lang"
              aria-haspopup
            />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default AppTopbar;
