import React from "react";
import AppTopbar from "./AppTopbar";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {

  return (
    <div className="layout-container min-h-screen">
      <main
        className=""
      >
        <AppTopbar />
        <div className="layout-content">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
