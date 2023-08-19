"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "@/styles";
import { links } from "@/utils/constants/menu";

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className={`flex justify-between items-center w-full md:px-40 py-5 z-40 fixed top-0 text-white bg-black p-4 lg:flex-row md:flex-col`}>
      <Link className="font-bold text-xl" href="/">
        Ebloqs
      </Link>
      <ul
        className={
          active ? "links activeM": "links"
        }
      >
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                onClick={handleClick}
                href={link.url}
                className={
                  pathname === link.url
                    ? "active"
                    : "link"
                }
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div onClick={handleClick} className="hamburger">
        {active ? (
          <AiOutlineClose className="icon" />
        ) : (
          <AiOutlineMenu className="icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
