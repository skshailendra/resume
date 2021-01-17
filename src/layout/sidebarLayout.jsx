import React from "react";
import HeaderInfo from "../ui-component/headerInfo/headerInfo";
import MainContent from "../ui-component/mainContent/mainContent";
import "./style.css";

const SidebarLayout = (props) => {
  return (
    <>
      <div className="sidebar-container">
        <HeaderInfo></HeaderInfo>
      </div>
      <main className="main-container">
        <MainContent></MainContent>
      </main>
    </>
  );
};
export default SidebarLayout;
