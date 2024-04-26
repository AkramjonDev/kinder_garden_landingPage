import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YoutubeVideo from "./Video";

const HappySection = () => {
  return (
    <div id="happy" className="mt-36">
      <h1 className="font-pacifico text-center font-bold text-4xl md:text-6xl text-[#0A303A]">
        Ular bizdan doim hursand
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <div className="rounded-xl">
            <div className="mt-8 rounded-xl ">
              <YoutubeVideo videoId="VIDEO_ID_HERE" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col items-start lg:ml-12">
            <h4 className="font-bold text-lg md:text-4xl text-[#0A303A]">
              Biz haqimizda ota-onalarning fikri.
            </h4>
            <p className="text-[#0A303A] mb-5">
              Erta ta'limdan buyukroq narsa yo'q. Ota-onalar KinderCare-da biz
              kashfiyot tuyg'usini rivojlantirishni o'zimizning ishtiyoqimiz deb
              bilamiz.
            </p>
            <Link href={"/parents"}>
              <motion.button
                className="inline-block text-base px-3 py-2 bg-[#fff] text-[#E74C25] rounded-md font-bold hover:bg-[#0A303A] hover:text-white border border-[#E74C25] hover:border-none mt-4 lg:mt-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Ko'rib chiqish
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="mt-8 lg:mt-0">
            <Image
              className="max-md:hidden"
              width={340}
              height={320}
              src={
                "https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-people-3.svg"
              }
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappySection;
