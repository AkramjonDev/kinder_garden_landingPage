"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../globals.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 max-sm:mb-10">
        <div className=" flex justify-between h-16 flex-wrap max-sm:mt-5">
          <div className="flex items-center gap-12 max-sm:w-full max-sm:mb-5 max-sm:justify-between ">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href={"/"}
                className="text-[#0A303A] text-3xl font-extrabold"
              >
                Modernkids
              </Link>
            </div>
            <div className="hidden md:block">
              <motion.ul
                className="navbar flex gap-6 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/"}>Bosh sahifa</Link>
                  <span className="dot"></span>
                </motion.li>
                <motion.li
                  className="hover:text-[#E72929]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/about"}>Biz haqimizda</Link>
                  <span className="dot"></span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/admission"}>Qabullar</Link>
                  <span className="dot"></span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/parents"}>Ota-Onalar</Link>
                  <span className="dot"></span>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={"/location"}>Manzil</Link>
                  <span className="dot"></span>
                </motion.li>
              </motion.ul>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md bg-[#0A303A] text-[#fff] hover:text-white hover:bg-[#E74C25] focus:outline-none focus:text-white max-md:p-[5px]"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center max-sm:w-full max-sm:justify-between max-sm:flex-wrap">
            <div className="flex gap-3 items-center ">
              <FontAwesomeIcon className="text-[#167287]" icon={faPhone} />
              <Link
                href="tel:+998908317242"
                className="text-[#167287] hover:text-[#E74C25] cursor-pointer"
              >
                +998908317242​​
              </Link>
            </div>
            <motion.button
              className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={
                  "https://www.google.com/maps/place/Surxondaryo+viloyati+Qumqo'rg'on+tumani+8-Davlat+maktabgacha+ta'lim+tashkiloti/@37.8356374,67.4485085,21z/data=!4m6!3m5!1s0x38b5550000fba693:0xd40666afc2998415!8m2!3d37.8355353!4d67.4485415!16s%2Fg%2F11y3dnyd_r?entry=ttu"
                }
              >
                tashrif buyuring{" "}
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className={`nav-private ${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white`}
      >
        <div className="px-5 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white">
          <Link
            className="font-bold text-lg pt-2 pb-2 border-b text-[#E74C25]"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="font-bold text-lg pt-2 pb-2 border-b"
            href={"/about"}
          >
            Biz haqimizda
          </Link>
          <Link
            className="font-bold text-lg pt-2 pb-2 border-b"
            href={"/parents"}
          >
            Ota-onalar
          </Link>
          <Link
            className="font-bold text-lg pt-2 pb-2 border-b"
            href={"/location"}
          >
            Manzil
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li className="relative">
      <a
        href={href}
        className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium relative"
      >
        {children}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-2 h-2 rounded-full bg-gray-300"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </a>
    </li>
  );
};

export default Navbar;
