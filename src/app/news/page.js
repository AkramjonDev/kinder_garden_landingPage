import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/png/h-01-1024x630.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../../../public/images/png/blog-photo-2-1024x682.webp";
import img3 from "../../../public/images/png/h-10.webp";
import img4 from "../../../public/images/png/h-20-1024x630.webp";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const News = () => {
  return (
    <>
      <div className="location bg-[#FAF8F5] pt-28 pb-20 bg-cover bg-no-repeat bg-right">
        {/* page navbar */}
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-bold text-[#0A303A] text-5xl mb-5">
                Yangiliklar
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-14 pt-20">
          <div className="flex gap-20 max-md:flex-wrap max-md:justify-center">
            <div className="flex flex-col">
              <div className="mb-20">
                <Image className=" h-auto rounded-xl mb-5" src={img1} />
                <h3 className="font-bold text-2xl  mb-5">
                  Treklar bolalarga nimani o'rgatishi mumkin? Maktabgacha ta'lim
                  muassasalarining ilmiy faoliyati katta ahamiyatga ega
                </h3>
                <p className="">
                  Oh, bu shunday ishlaydi - voy! Sizning maktabgacha
                  tarbiyachining qiziquvchan ongi soatiga o'n million milya yo'l
                  bosib o'tadi, chunki ular bolalik davrida dunyo haqida
                  to'plagan barcha ma'lumotlarni, harakat va tana harakatlaridan
                  tortib, noyob narsalarni yaratish uchun yangi materiallar va
                  jihozlardan foydalanishgacha birlashtira boshlaydi.
                  Mutaxassislarimizning fikriga ko'ra, bu bolalarga erta ilm-fan
                  ko'nikmalarini shakllantirish va boshqalarga yordam berish
                  uchun eng yaxshi vaqt. Bu yil davomida harflar, tovushlar va
                  o'zlashtirishga e'tibor qaratiladi
                </p>
              </div>
              <div className="mb-20">
                <Image className=" h-auto rounded-xl mb-5" src={img2} />
                <h3 className="font-bold text-2xl  mb-5">
                  Kichkina bolalar uchun o'qituvchilar tomonidan tavsiya etilgan
                  eng yaxshi o'quv o'yinchoqlari!
                </h3>
                <p className="">
                  Nima uchun maktabgacha ta'lim muassasalari hali ham oddiy,
                  klassik o'yinchoqlar va biz bolaligimizda o'ynagan
                  mashg'ulotlar bilan to'la? Javob oddiy: vaqt o'zgargan
                  bo'lsa-da, miya rivojlanishi o'zgarmadi! Darhaqiqat, bolalar
                  bo'shashganda, mashg'ul bo'lganda va zavqlanganda o'yin orqali
                  yaxshi o'rganadilar! Qurilish bloklari, o'yin xamiri va qo'l
                  san'atlari bolalarga o'z tasavvurlarini yig'ish, silliqlash va
                  cho'zishdan ko'ra ko'proq narsani qilish imkonini beradi! Ular
                  nozik vosita ko'nikmalarini va qo'l-ko'zni muvofiqlashtirishni
                  kuchaytiradi, erta matematik tushunchalar uchun asos yaratadi
                  va
                </p>
              </div>
              <div className="mb-20">
                <Image className=" h-auto rounded-xl mb-5" src={img3} />
                <h3 className="font-bold text-2xl  mb-5">
                  Yangi ota-onalar tunning yarmida Google qidiruvlarini baham
                  ko'rishadi
                </h3>
                <p className="">
                  Har bir yangi ota-ona bu tuyg'uni biladi: soat 2:00
                  ko'zlaringiz oqarib ketdi va siz hamma uxlashni xohlaysiz.
                  Lekin siz turdingiz. Sizning yangi chaqalog'ingiz ham shunday.
                  Kichkintoyingiz sizni nima uyg'otayotganini aytib bera olsa,
                  bu ajoyib bo'lardi, siz qila oladigan yagona narsa buni
                  tushunishga harakat qilishdir. Ba'zida aniq javob yo'q. Lekin
                  hech bo'lmaganda sizda Google bor. Bu yil davomida harflarni
                  o'zlashtirishga e'tibor qaratiladi.
                </p>
              </div>
              <div className="mb-20">
                <Image className=" h-auto rounded-xl mb-5" src={img4} />
                <h3 className="font-bold text-2xl  mb-5">
                  Siz uchun eng yaxshi bolalar markazini qanday tanlash mumkin!
                </h3>
                <p className="">
                  Vaqt keldi: siz bolalar markazini topishga tayyorsiz. Ishga
                  qaytyapsizmi yoki kun davomida ko'proq yordam izlayapsizmi,
                  to'g'ri sherik topish muhim. Siz oilangizning eng qadrli
                  a'zosini hech kimga ishonishni xohlamaysiz. Lekin nimani
                  izlash kerak? Siz yuqori sifatli markazni xohlayotganingizni
                  bilasiz, lekin uni topganingizni qanday bilasiz? Biz sizni
                  qamrab oldik. Bu oddiy, olti bosqichli nazorat ro'yxati
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex mb-10">
                <input
                  type="text"
                  placeholder="qidiruv"
                  className="py-3 px-5 outline-none rounded-l-lg"
                />
                <span className="py-5 px-3.5 bg-[#69727D] hover:bg-[#222830] cursor-pointer rounded-r-lg text-white">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href={
                    "https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2F"
                  }
                >
                  <div className="px-9 py-3 text-white text-3xl rounded-lg bg-[#345088]">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                </Link>
                <Link href={"https://www.instagram.com/"}>
                  <div className="px-9 py-3 text-white text-3xl rounded-lg bg-[#BC2567]">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </Link>
                <Link href={"https://t.me/"}>
                  <div className="px-9 py-3 text-white text-3xl rounded-lg bg-[#1C9EED]">
                    <FontAwesomeIcon icon={faTelegram} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
