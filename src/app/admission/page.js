"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  faFile,
  faFileArrowDown,
  faHouse,
  faList,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col">
      <div
        className="location bg-[#FAF8F5] pt-28 pb-20 bg-cover bg-no-repeat bg-right"
        style={{
          backgroundImage:
            "url('https://skole.vamtam.com/wp-content/uploads/2019/11/fox-color.svg')",
          backgroundSize: "300px",
        }}
      >
        {/* page navbar */}
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-bold text-[#0A303A] text-5xl mb-5">
                Qabullarimiz
              </h1>
              <p className="text-[#0A303A]">
                Qabullar jarayonida biz sizga yordam beramiz - faqat quyida
                keltirilgan ma'lumotlarni o'qing. <br /> murojaat qiling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F1EA] mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex justify-between pt-20 max-md:flex-wrap max-md:w-full mb-9">
            <h1 className="font-bold text-3xl">Asosiy sanalar</h1>
            <div className="flex gap-16 items-center max-md:flex-wrap max-md:w-full max-md:gap-3">
              <div className="flex flex-col">
                <h4 className="font-bold text-xl flex flex-col">
                  Ochiq eshiklar kuni (maktabgacha va <br /> bolalar bog'chasi)
                </h4>
                <Link className="text-[#E74C25]" href={"/parents"}>
                  Ro'yxatdan o'tish
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="">Aprel 20 2024</span>
                <h4 className="font-bold text-xl">Ochilish muddati</h4>
                <Link href={"#"} className="text-[#E74C25] text-sm font-medium">
                  Ro'yxatdan o'tish jarayoni <br /> haqida bilib oling
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="">May 22 2024</span>
                <h4 className="font-bold text-xl">To'lov muddatlari</h4>
                <Link className="text-[#E74C25] text-sm font-medium" href={"#"}>
                  To'lov tizimi bilan tanishish
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <h1 className="font-bold text-4xl md:text-3xl text-[#0A2F38] mb-5 md:mb-0">
              Farzandingiz uchun ta'lim Modernkids.uz
            </h1>
            <div className="md:ml-5">
              <p className="mb-5">
                Surxandaryodagi maktabgacha taʼlim muassasasiga qabul har yili
                may oyidan keyingi oʻquv yili uchun doimiy ravishda davom etadi.
                Ko'pgina oilalar kuz va qish oylarida ro'yxatdan o'tishni
                tugatsa-da, biz bo'sh joy bor ekan, dasturlarimizni ochiq
                tutishda davom etamiz
              </p>
              <motion.button
                className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A] mb-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={
                    "https://www.google.com/maps/place/Surxondaryo+viloyati+Qumqo'rg'on+tumani+8-Davlat+maktabgacha+ta'lim+tashkiloti/@37.8356374,67.4485085,21z/data=!4m6!3m5!1s0x38b5550000fba693:0xd40666afc2998415!8m2!3d37.8355353!4d67.4485415!16s%2Fg%2F11y3dnyd_r?entry=ttu"
                  }
                >
                  Ko'proq ma'lumot
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-7xl px-10">
          <div className="flex items-center gap-14 flex-col md:flex-row md:justify-evenly mb-10 max-md:pr-5">
            <div className="card max-md:w-full flex w-full border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
              <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                <FontAwesomeIcon icon={faFileArrowDown} />
              </div>
              <h2 className="font-bold text-2xl text-[#0A303A] text-center">
                Boshlang'ich maktabga kirishni tekshirish ro'yxati
              </h2>
              <span className="text-[#E74C25] font-bold text-center">
                Yuklab olish
              </span>
            </div>
            <div className="card max-md:w-full flex w-full border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
              <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <h2 className="font-bold text-2xl text-center">
                Boshlang'ich maktab o'quvchilarining yangi yozuv shakli
              </h2>
              <span className="text-[#E74C25] text-center font-bold">
                Yuklab olish
              </span>
            </div>
            <div className="card max-md:w-full flex w-full border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
              <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                <FontAwesomeIcon icon={faList} />
              </div>
              <h2 className="font-bold text-2xl text-center">
                Bolalar bog'chasi va 1-sinf o'quvchilarini baholash shakli
              </h2>
              <span className="text-[#E74C25] text-center font-bold">
                Yuklab olish
              </span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="font-pacifico md:text-left font-extrabold text-6xl sm:text-9xl text-[#0A2F38]">
              Bizning
            </h1>
            <div className="mt-8 sm:mt-24">
              <h2 className="font-bold md:text-left text-2xl w-full sm:text-4xl text-[#0A2F38] mb-5 px-4 md:px-40">
                qabul jamoasi siz va oilangiz haqida bilishni intiqlik bilan
                kutadi.
              </h2>
              <p className="px-0 md:px-44 mb-20">
                Modernkids maktabi 2 yoshdan 6-sinfgacha uzluksiz ta'lim olishni
                taklif qiluvchi mehmon do'st hamjamiyatdir. Biz jamiyatimizga
                boylik va rang-baranglik qo'shadigan turli kelib chiqishi va
                oilalaridan bo'lgan talabalarni qabul qilishga intilamiz.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 max-md:flex-wrap">
            <div className="flex flex-col items-center gap-3 cursor-pointer w-96 h-72 rounded-xl hover:bg-[#F4F1EA] text-center">
              <motion.div
                className="w-24 h-24 rounded-full bg-[#E74C25] hover:bg-[#0A303A] flex items-center justify-center mt-5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <h1 className="text-[#FFF] text-3xl font-extrabold">01</h1>
              </motion.div>
              <Link className=" font-bold text-xl" href={"#"}>
                Birinchi qadam
              </Link>
              <p>Ochiq eshiklar kunida Modernkidsga tashrif buyuring.</p>
            </div>
            <Image
              className="max-md:hidden"
              width={140}
              height={140}
              src={
                "https://skole.vamtam.com/wp-content/uploads/2020/02/just_stroke.svg"
              }
            />
            <div className="flex flex-col items-center gap-3 cursor-pointer w-96 h-72 rounded-xl hover:bg-[#F4F1EA] text-center">
              <motion.div
                className="w-24 h-24 rounded-full bg-[#167287] hover:bg-[#0A303A] flex items-center justify-center mt-5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <h1 className="text-[#FFF] text-3xl font-extrabold">02</h1>
              </motion.div>
              <Link className=" font-bold text-xl" href={"#"}>
                Ikkinchi qadam
              </Link>
              <p>Arizani tegishli to'lov bilan birga yuboring.</p>
            </div>
            <Image
              className="max-md:hidden"
              width={140}
              height={140}
              src={
                "https://skole.vamtam.com/wp-content/uploads/2020/02/just_stroke.svg"
              }
            />
            <div className="flex flex-col items-center gap-3 cursor-pointer w-96 h-72 rounded-xl hover:bg-[#F4F1EA] text-center">
              <motion.div
                className="w-24 h-24 rounded-full bg-[#7048B1] hover:bg-[#0A303A] flex items-center justify-center mt-5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <h1 className="text-[#FFF] text-3xl font-extrabold">03</h1>
              </motion.div>
              <Link className=" font-bold text-xl" href={"#"}>
                Uchinchi qadam
              </Link>
              <p>Qabul bo'limi bilan sayohatni rejalashtiring.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
