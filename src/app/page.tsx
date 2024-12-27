"use client";
import MainSection from "@/components/MainSection/MainSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="w-full px-5">
      <NavBar />
      <MainSection />
    </div>
  );
}
