"use client";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import FindJobSection from "./components/FindJobSection/FindJobSection";

const MainSection = () => {
  return (
    <div className="flex gap-10 px-5 py-10">
      <Sidebar />
      <FindJobSection />
    </div>
  );
};

export default MainSection;
