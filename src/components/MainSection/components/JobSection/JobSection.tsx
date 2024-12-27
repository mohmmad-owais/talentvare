"use client";

import Image from "next/image";
import Link from "next/link";
import teams from "@/components/assets/teams-icon.png";
import { BookmarkIcon, Clock4, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobSectionProps {
  title: string;
}

const JobSection = ({ title }: JobSectionProps) => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg">{title}</h3>
        <h3 className="text-sm text-primary underline">
          <Link href="">See Featured Jobs</Link>
        </h3>
      </div>

      <div className="md:flex space-x-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="mt-5 px-2 space-y-3 md:w-1/5">
            <h2 className="text-sm">Promoted</h2>
            <span className="flex items-center space-x-2">
              <Image src={teams} alt="img" className="ms-2" />
              <div className="flex flex-col">
                <label>UI/UX Designer</label>
                <label>Teams</label>
              </div>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <MapPin size={20} className="text-secondary" />
              <p>Seattle, USA (Remote)</p>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <Clock4 size={20} className="text-secondary" />
              <p>
                1 day ago | <span className="text-primary">22 applicants</span>
              </p>
            </span>
            <span className="flex items-center justify-between">
              <Button size="lg">Apply Now</Button>
              <BookmarkIcon className="text-secondary cursor-pointer" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSection;
