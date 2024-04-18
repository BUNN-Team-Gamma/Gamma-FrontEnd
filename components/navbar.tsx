"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { NavLinkType } from "@/lib/definitions";
import PrimaryBtn from "./primaryBtn";
import { useAuthStore } from "@/store";
import { getCookie } from "cookies-next";
import useAuth from "@/hooks/useAuth";
import { GiArrowhead } from "react-icons/gi";
import FilesMenu from "./ui/myFiles/menu";

const navLinks: NavLinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard/note-summarization",
    name: "Note Summarization",
  },
  {
    path: "/dashboard/flashcards",
    name: "Flashcard Creation",
  },
  {
    path: "/dashboard/text-extraction",
    name: "Text Extraction",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const authenticated = useAuthStore((state) => state.authenticated);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const [show, setShow] = useState<boolean>(false);
  const { logout } = useAuth();

  const token = getCookie("userToken");

  if (token) {
    setAuthentication(true);
  }

  const toggleMenu = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      {" "}
      <nav className="py-5 lg:py-8 px-4 md:px-10 lg:px-16 2xl:px-40 flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={200}
            height={100}
            className="w-3/5 md:w-3/4 2xl:w-fit"
          />
        </Link>
        <div className="text-sm hidden lg:flex gap-10">
          <Link
            className={"hover:text-primaryColor"}
            key={navLinks[0].path}
            href={navLinks[0].path}
          >
            {navLinks[0].name}
          </Link>
          <button onClick={() => setShow(!show)} className="flex">
            <span className="flex gap-2">
              <span className="my-auto">My Files</span>
              <MdKeyboardArrowDown className="my-auto" />
            </span>
          </button>
          {navLinks.map((item, index) => {
            if (index === 0) return;
            return (
              <Link
                className={"hover:text-primaryColor"}
                key={item.path}
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {authenticated ? (
          <div onClick={logout} className="hidden lg:block">
            <PrimaryBtn variant text="Logout" size="" weight="" />
          </div>
        ) : (
          <Link href="/auth/login" className="hidden lg:block">
            <PrimaryBtn
              variant
              text="Login/Register"
              size="text-lg"
              weight="font-medium"
            />
          </Link>
        )}
        <div className="cursor-pointer lg:hidden">
          {navbar ? (
            <MdClose onClick={toggleMenu} size={25} />
          ) : (
            <RxHamburgerMenu onClick={toggleMenu} size={25} />
          )}
        </div>
        <div
          className={`px-10 py-6 rounded-lg text-sm lg:hidden font-medium bg-neutral-950/90 text-white transition-all ease-in-out origin-top-right absolute z-50 right-5 md:right-12 top-[75px] flex flex-col items-center gap-5 ${
            navbar ? "opacity-100 scale-100" : "opacity-0 scale-0"
          } duration-500`}
        >
          {navLinks.map((item) => (
            <Link
              className="hover:text-primaryColor"
              onClick={toggleMenu}
              key={item.path}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
          {authenticated ? (
            <div onClick={logout} className="block lg:hidden">
              <PrimaryBtn variant text="Logout" size="" weight="" />
            </div>
          ) : (
            <Link
              href="/auth/login"
              onClick={toggleMenu}
              className="block lg:hidden"
            >
              <PrimaryBtn variant text="Login/Register" size="" weight="" />
            </Link>
          )}
        </div>
        <FilesMenu show={show} setShow={setShow} />
      </nav>
    </>
  );
}
