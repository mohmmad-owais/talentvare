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

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between  p-5">
      <span>
        <Image src={logo} width={41} height={38.5} alt="logo" />
      </span>

      <ul className="flex text-secondary justify-between gap-12">
        <li>
          <Link
            href=""
            className={`hover: ${
              pathname === "/" && "text-primary font-semibold"
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
      <div className="flex space-x-5">
        <div className="flex items-center space-x-2">
          {" "}
          <SearchIcon className="text-secondary " />
          <Input placeholder="Search" className="text-secondary" />
        </div>
        <div>
          <Button>Resume Builder</Button>
        </div>
        <div>
          {" "}
          <span className="bg-black cursor-pointer flex items-center rounded-full ">
            <Image src={navUserImg} width={38} height={38} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
