"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Div from "./Div";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <div className="max-w-7xl flex justify-between">
          <div className="flex gap-20 max-md:gap-14">
            <Image
              className="mt-10"
              src={
                "https://skole.vamtam.com/wp-content/uploads/2019/11/tree-1.svg"
              }
              width={60}
              height={110}
            />
            <Image
              src={
                "https://skole.vamtam.com/wp-content/uploads/2019/11/fox-color.svg"
              }
              width={150}
              height={150}
            />
          </div>
          <Image
            className="mt-16"
            src={
              "https://skole.vamtam.com/wp-content/uploads/2019/11/tree-2.svg"
            }
            width={50}
            height={100}
          />
        </div>
      </div>
      <div className="bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto max-md:flex-wrap max-md:flex-col">
          <div className="flex justify-between items-center max-md:flex-wrap max-md:flex-col">
            <div className="flex gap-20 max-md:mt-9">
              <motion.ul
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-md:text-center"
              >
                <motion.li
                  className="hover:text-[#E72929]"
                  whileHover={{ scale: 1 }}
                >
                  <Link href={"/admission"}>Qabullar</Link>
                </motion.li>
              </motion.ul>

              <motion.ul className="max-md:text-center max-md:mb-5">
                <motion.li
                  className="hover:text-[#E72929]"
                  whileHover={{ scale: 1 }}
                >
                  <Link href={"/about"}>Biz haqimizda</Link>
                </motion.li>
                <motion.li
                  className="hover:text-[#E72929]"
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Link href={"/location"}>Manzil</Link>
                </motion.li>
              </motion.ul>
            </div>
            <Link
              href={"/"}
              className="text-[#0A303A] text-3xl font-extrabold max-md:mb-5"
            >
              Modernkids
            </Link>
            <div className="max-md:text-center">
              <p>
                Surxondaryo viloyati <br />
                Qo'mqo'rg'on tumani
              </p>
              <Link className="text-[#E72929] hover:text-[#0A303A]" href={"#"}>
                Google map
              </Link>
              <p>
                Telefon raqamimiz:{" "}
                <Link
                  href="tel:+998908317242"
                  className="text-[#E74C25] hover:text-[#0A303A] cursor-pointer"
                >
                  +998908317242​
                </Link>{" "}
              </p>
              <Link className="text-[#E74C25] hover:text-[#0A303A]" href={"#"}>
                hi@kindergarten.com
              </Link>
            </div>
            <div className="">
              <motion.button
                className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A] mb-12 mt-12"
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
              {/* social media */}
              <motion.ul
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex max-md:ml-5 gap-5 items-center mb-10"
              >
                <motion.div
                  className="hover:bg-[#0A303A] w-8 h-8 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 2 }}
                  initial={{ opacity: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    className="text-3xl cursor-pointer hover:text-lg hover:text-white"
                    icon={faFacebook}
                  />
                </motion.div>
                <motion.div
                  className="hover:bg-[#0A303A] w-8 h-8 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 2 }}
                  initial={{ opacity: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    className="text-3xl cursor-pointer hover:text-lg hover:text-white"
                    icon={faYoutube}
                  />
                </motion.div>
                <motion.div
                  className="hover:bg-[#0A303A] w-8 h-8 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 2 }}
                  initial={{ opacity: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    className="text-3xl cursor-pointer hover:text-lg hover:text-white"
                    icon={faInstagram}
                  />
                </motion.div>
              </motion.ul>
            </div>
          </div>
          <div className="w-full flex justify-between max-md:flex-col max-md:items-center">
            <p className="text-sm font-normal mb-10">
              © 2024 Kindergarten Website by{" "}
            </p>
            <ul className="flex gap-4">
              <li className="font-normal text-sm hover:text-[#E74C25]">
                <Link href={"/admission"}>Boshqaruv</Link>
              </li>
              <li className="font-normal text-sm hover:text-[#E74C25]">
                <Link href={"#"}>Bog'cha calendari</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
