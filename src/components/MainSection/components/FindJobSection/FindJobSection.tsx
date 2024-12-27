"use client";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import JobSection from "../JobSection/JobSection";

const FindJobSection = () => {
  const [isLocationOpen, setLocationIsOpen] = useState(false);
  const [isJobType, setJobType] = useState(false);

  const [selectedValue, setSelectedValue] = useState("Job Type");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setJobType(false);
  };
  const handleSelectLocation = (value: string) => {
    setSelectedLocation(value);
    setLocationIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full mt-3">
      <h2 className="text-2xl">
        Find your Dream Job, <span className="text-primary">Albert!</span>
      </h2>
      <p className="text-sm mt-2">
        Explore the latest job openings and apply for the best opportunities
        available today!
      </p>

      <div className="md:flex w-full justify-between mt-8 space-y-10 md:space-y-0">
        <div className="md:w-1/2">
          <Input
            placeholder="Job Title, Company, or Keywords"
            className="text-secondary"
          />
        </div>
        <div className="items-center flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="">
                {!isLocationOpen ? (
                  <span className="flex ">
                    <p>{selectedLocation}</p>
                    <ChevronDown
                      onClick={() => setLocationIsOpen(!isLocationOpen)}
                      className="text-secondary ms-2"
                    />
                  </span>
                ) : (
                  <span className="mr-2">
                    <ChevronUp
                      onClick={() => setLocationIsOpen(!isLocationOpen)}
                      className="text-secondary"
                    />
                  </span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-secondary bg-gray-300 cursor-pointer">
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleSelectLocation("US")}>
                US
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSelectLocation("Pakistan")}
              >
                Pakistan
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectLocation("UAE")}>
                UAE
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="items-center flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="">
                {!isJobType ? (
                  <span className="flex ">
                    <p>{selectedValue}</p>
                    <ChevronDown
                      onClick={() => setJobType(!isJobType)}
                      className="text-secondary ms-2"
                    />
                  </span>
                ) : (
                  <span className="mr-2">
                    <ChevronUp
                      onClick={() => setJobType(!isJobType)}
                      className="text-secondary"
                    />
                  </span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-secondary bg-gray-300 cursor-pointer">
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleSelect("Hybrid")}>
                Hybrid
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelect("On Site")}>
                On Site
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelect("Remote")}>
                Remote
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button size="lg">
          <SearchIcon />
          Search
        </Button>
      </div>
      <div className="flex mt-10 items-center space-x-3 text-sm text-secondary">
        <p>Similar:</p>
        <span className="border-[1px] px-3 py-1   hover:bg-secondary hover:text-white cursor-pointer transition ease-linear  delay-100 border-secondary rounded-md">
          Frontend
        </span>
        <span className="border-[1px] px-3 py-1  hover:bg-secondary hover:text-white cursor-pointer transition  ease-linear delay-100  border-secondary rounded-md">
          Backend
        </span>
        <span className="border-[1px] px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition  ease-linear delay-100  border-secondary rounded-md">
          Graphic Designer
        </span>
      </div>
      {/* Job section */}
      <JobSection title={"Featured Jobs"} />
      <div className="mt-10">
        <JobSection title={"Recommended Jobs"} />
      </div>
    </div>
  );
};

export default FindJobSection;
