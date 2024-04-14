"use client"
import Image from "next/image";
import Header from "./components/Header";
import SplideCarousel from "./components/SplideCarousel";
import { motion } from 'framer-motion';
import card1 from '../../public/images/png/card1.jpg'
import card2 from '../../public/images/png/card2.jpg'
import card3 from '../../public/images/png/card3.jpg'
import card4 from '../../public/images/png/card4.jpg'
import PointerFollow from "./components/PointerFollow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 max-sm:flex-wrap">
            <h1 className="font-pacifico font-extrabold text-6xl sm:text-9xl text-[#0A2F38]">Biz</h1>
            <div className="w-full sm:w-[650px] flex flex-col">
              <h2 className="font-bold text-2xl sm:text-4xl text-[#0A2F38] mt-8 sm:mt-24 mb-6">bolalar bog'chasimiz va bolalik bizning ishtiyoqimizdir</h2>
              <p className="text-[#0A2F38]">Biz sizni Skole o'quv markazida ishlayotgan ajoyib, ishtiyoqli va sodiq o'qituvchilar bilan tanishtirishdan xursandmiz. Iltimos, “Bizning oilamiz!” bilan tanishish uchun bir oz vaqt ajrating. Biz ularning har birini nima uchun bolalar bilan ishlashni yaxshi ko'rishlarini tasvirlashga taklif qildik.</p>
            </div>
          </div>
        </div>
        {/* section finished */}

        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-around mb-36">
            <div className="w-full lg:w-[420px] h-auto mb-8 lg:mb-0">
              <SplideCarousel />
            </div>
            <div className="flex flex-col gap-8 lg:gap-16 text-center lg:text-left">
              <h4 className="cursor-pointer font-bold text-xl text-[#0A303A]"><span className="font-bold text-[#167287]">1.</span> O'z Uyingizga o'xshash muhit </h4>
              <h4 className="cursor-pointer font-bold text-xl text-[#0A303A]"><span className="font-bold text-[#167287]">2.</span> Hafsizlik va Qo'riqlash hizmati </h4>
              <h4 className="cursor-pointer font-bold text-xl text-[#0A303A]"><span className="font-bold text-[#167287]">3.</span> Sifatli o'qitish tizimi </h4>
              <h4 className="cursor-pointer font-bold text-xl text-[#0A303A]"><span className="font-bold text-[#167287]">4.</span> O'yna va o'rgan </h4>
            </div>
            <div className="text-center lg:text-left">
              <Image width={210} height={238} src={'https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-people-1.svg'} />
              <motion.button
                className='inline-block text-base px-3 py-2 bg-[#fff] text-[#E74C25] rounded-md font-bold hover:bg-[#0A303A] hover:text-white border border-[#E74C25] hover:border-none mt-4 lg:mt-0'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                Ko'proq malumot
              </motion.button>
            </div>
          </div>
        </div>
        {/* section finished */}

        <div className="">
          <div className="flex justify-center items-start">
            <div className="mb-14">
              <h1 className="font-pacifico font-bold text-4xl md:text-9xl text-[#0A2F38] mb-5 md:mb-0">Yoshlar</h1>
              <h4 className="text-[#0A2F38] font-bold text-lg md:text-3xl max-sm:ml-0 ml-36">Biz har qanday vaqtda bolalarni qo'llab-quvvatlaymiz </h4>
            </div>
          </div>
          <div className="flex gap-10 max-md:flex-row max-md:justify-between max-md:items-center max-sm:flex-wrap">
            <div className="bg-[#FFDBD2] p-3 flex flex-col items-center rounded-2xl mb-5 md:mb-0 md:w-[30%] md:mr-5 max-sm:w-full">
              <h2 className="font-bold text-center text-[#E95D3A] text-xl md:text-2xl mb-5">Chaqaloqlar</h2>
              <Image className="rounded-xl mb-5" width={240} height={240} src={card1} />
              <p className="text-center mb-5">Farzandingiz sizga tajriba uchun <br /> eng muhim ma'lumotlarni beradi.</p>
              <span className="text-[#E95D3A] font-bold text-sm">3-12 oy 9:00 - 11:00</span>
            </div>
            <div className="bg-[#DFF8FF] p-3 flex flex-col items-center rounded-2xl mb-5 md:mb-0 md:w-[30%] md:mr-5">
              <h2 className="font-bold text-center text-[#167287] text-xl md:text-2xl mb-5">Kichkintoy</h2>
              <Image className="rounded-xl mb-5" width={240} height={240} src={card1} />
              <p className="text-center mb-5">Bu kursimiz ichida uning jismoniy o'sishi va miyya rivojlanishi yaxshilanadi.</p>
              <span className="text-[#167287] font-bold text-sm">3-12 oy 11:00 - 15:00</span>
            </div>
            <div className="bg-[#FFEFDF] p-3 flex flex-col items-center rounded-2xl mb-5 md:mb-0 md:w-[30%]">
              <h2 className="font-bold text-center text-[#F68F29] text-xl md:text-2xl mb-5">Maktabgacha Ta'lim</h2>
              <Image className="rounded-xl mb-5" width={240} height={240} src={card1} />
              <p className="text-center mb-5">Farzandingiz bog'cha payitidan boshlab maktab yoshlari kabi ilm oladi.</p>
              <span className="text-[#F68F29] font-bold text-sm">3-12 oy 16:00 - 17:00</span>
            </div>
            <div className="bg-[#E6F9E5] p-3 flex flex-col items-center rounded-2xl mb-5 md:mb-0 md:w-[30%]">
              <h2 className="font-bold text-center text-[#5E9F5A] text-xl md:text-2xl mb-5">Ummumiy tarbiya</h2>
              <Image className="rounded-xl mb-5" width={240} height={240} src={card1} />
              <p className="text-center mb-5">Farzandingiz murakkab qiyinchiliklarni engish va o'z qobiliyatiga ishonch hosil qiladi.</p>
              <span className="text-[#5E9F5A] font-bold text-sm">3-12 oy 19:00 - 21:00</span>
            </div>
          </div>
        </div>
        {/* section finished */}

        <div className="">
          <div className="">
            
          </div>
        </div>

      </main>
    </>
  );
}
