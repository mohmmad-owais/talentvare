import React, { useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => {
    setClick(false);
  };

  const pathname = usePathname();

  return (
    <>
      {click && (
        <>
          <nav className="md:hidden ">
            <div className="absolute top-[12vh] right-0 z-10 w-full h-full bg-main  border-t-[1px] border-gray-400  ">
              <ul className=" space-y-10 flex flex-col  bg-gray-300 ">
                <li
                  className="px-12 border-b-[1px] border-gray-400 pb-3 mt-10"
                  onClick={closeMenu}
                >
                  <Link
                    href=""
                    className={`hover: ${
                      pathname === "/" && "text-primary font-bold"
                    }`}
                  >
                    Find Jobs
                  </Link>
                </li>
                <li
                  className="px-12 border-b-[1px] pb-3 border-gray-400"
                  onClick={closeMenu}
                >
                  <Link href="">Top Companies</Link>
                </li>
                <li className="px-12 border-b-[1px] pb-3 border-gray-400">
                  <Link href="">Job Tracker</Link>
                </li>
                <li
                  className="px-12 border-b-[1px] pb-3 border-gray-400"
                  onClick={closeMenu}
                >
                  <Link href="">My Calendar</Link>
                </li>
                <li
                  className="px-12 border-b-[1px] pb-3 border-gray-400"
                  onClick={closeMenu}
                >
                  <Link href="">Documents</Link>
                </li>
                <li
                  className="px-12 border-b-[1px] pb-3 border-gray-400"
                  onClick={closeMenu}
                >
                  <Link href="">Messages</Link>
                </li>
                <li className="px-12 pb-3 " onClick={closeMenu}>
                  <Link href="">Notifications</Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
      {click ? (
        <span
          onClick={() => {
            setClick(!click);
          }}
        >
          <X size="30" className="text-secondary cursor-pointer  md:hidden" />
        </span>
      ) : (
        <span
          onClick={() => {
            setClick(!click);
          }}
        >
          <Menu size="30" className="text-secondary cursor-pointer md:hidden" />
        </span>
      )}
    </>
  );
};

export default MobileNav;
