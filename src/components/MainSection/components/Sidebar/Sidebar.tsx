import Image from "next/image";

import cover from "@/components/assets/profile-cover.png";
import profileImg from "@/components/assets/profile-img.png";

const Sidebar = () => {
  const userDetails = {
    name: "Albert Flores",
    skills: "Senior Product Designer | UI/UX Designer | Graphic Designer | Web",
    location: "Clinton, Maryland",
  };
  const stats = [
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
    <div className="flex flex-col sticky">
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
        <span className="w-72 text-center">{userDetails.skills}</span>
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
      <div className="mt-10">
        <h2>My calendar</h2>
        <p>Upcoming Interviews</p>
      </div>
    </div>
  );
};

export default Sidebar;
