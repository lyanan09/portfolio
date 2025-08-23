import React from "react";
import AppFooter from "./AppFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <main className="layout-container min-h-screen max-h-screen">
      <div className="layout-content w-full  min-h-screen">{children}</div>
      <AppFooter />
    </main>
  );
};

export default AppLayout;
