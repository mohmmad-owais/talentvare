"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

import logo from "@/components/assets/logo.png";
import navUserImg from "@/components/assets/nav-pic.png";
import { SearchIcon } from "lucide-react";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-5 sticky top-0 bg-white ">
      <span className="md:w-auto w-full">
        <Image src={logo} width={41} height={38.5} alt="logo" />
      </span>
      {/* Mobile Nav */}
      <MobileNav />
      {/* Main Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex text-secondary text-sm md:text-base justify-between gap-9 mr-14">
          <li>
            <Link
              href=""
              className={`hover: ${
                pathname === "/" && "text-primary font-bold"
              }`}
            >
              Find Jobs
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              Top Companies
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              Job Tracker
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              My Calendar
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              Documents
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              Messages
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary">
              Notifications
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Items  */}

      <div className="flex space-x-5">
        <div className="flex items-center ">
          <div className="hidden md:block">
            <span className="flex items-center space-x-2">
              <SearchIcon className="text-secondary " />
              <Input
                placeholder="Search"
                className="text-secondary w-[260px]"
              />
            </span>
          </div>
        </div>
        <Button className="hidden md:block">Resume Builder</Button>

        <div>
          {" "}
          <span className="bg-black cursor-pointer md:flex items-center rounded-full hidden">
            <Image src={navUserImg} width={38} height={38} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
