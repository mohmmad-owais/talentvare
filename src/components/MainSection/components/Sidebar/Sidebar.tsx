"use client";
import Image from "next/image";
import cover from "@/components/assets/profile-cover.png";
import profileImg from "@/components/assets/profile-img.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface UserDetailsTypes {
  name: string;
  skills: string;
  location: string;
}

interface Stat {
  label: string;
  values: string;
}
const Sidebar = () => {
  const [isCalendarOpen, setCalendarIsOpen] = useState(false);

  const userDetails: UserDetailsTypes = {
    name: "Albert Flores",
    skills: "Senior Product Designer | UI/UX Designer | Graphic Designer | Web",
    location: "Clinton, Maryland",
  };
  const stats: Stat[] = [
    {
      label: "Profile Visitors",
      values: "140",
    },
    {
      label: "Resume Viewers",
      values: "20",
    },
    {
      label: "My Jobs",
      values: "88",
    },
  ];

  return (
    <div className="md:flex md:flex-col  hidden">
      {/* Profile top */}

      <div className="flex flex-col justify-center items-center">
        <Image
          src={cover}
          className="rounded-tl-lg rounded-tr-lg"
          alt="cover-img"
        />
        <Image
          src={profileImg}
          width={86}
          height={86}
          className="-mt-10 rounded-full border-white border-2"
          alt="profile-img"
        />
        {/* Profile details */}

        <h2 className="mt-3">{userDetails.name}</h2>
        <span className="w-64 text-center">{userDetails.skills}</span>
        <p className="text-secondary">{userDetails.location}</p>
      </div>
      <div className="mt-10 space-y-5 px-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between">
            <label>{stat.label}</label>
            <label className="text-primary">{stat.values}</label>
          </div>
        ))}
      </div>

      {/* Profile footer */}
      <div className="mt-10">
        <div className="items-center flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              <div className="">
                {!isCalendarOpen ? (
                  <span className="flex justify-between ">
                    <h2>My calendar</h2>
                    <ChevronDown
                      onClick={() => setCalendarIsOpen(!isCalendarOpen)}
                      className="text-secondary ms-2"
                    />
                  </span>
                ) : (
                  <span className="mr-2">
                    <ChevronUp
                      onClick={() => setCalendarIsOpen(!isCalendarOpen)}
                      className="text-secondary"
                    />
                  </span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-secondary bg-gray-300 cursor-pointer w-72 ">
              <DropdownMenuSeparator />
              <DropdownMenuItem>No interview schedule</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p>Upcoming Interviews</p>
      </div>
    </div>
  );
};

export default Sidebar;
