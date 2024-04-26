import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewsSection() {
  return (
    <div className="mt-12 bg-[#F4F1EA] py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-pacifico text-center font-bold text-4xl md:text-5xl mb-8">
          Yangiliklar
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <NewsItem
            image="/images/png/news1.jpeg"
            title="Kichkina bolalar uchun o'qituvchilar tomonidan tavsiya etilgan eng yaxshi o'quv o'yinchoqlari!"
          />
          <NewsItem
            image="/images/png/news2.jpeg"
            title="Farzandingizni kelajagi uchun to'g'ri tanlov qiling - to'g'ri joyni tanlang."
          />
          <NewsItem
            image="/images/png/news3.jpeg"
            title="Amaliy mashg'ulotlar, san'at va hunarmandchilik orqali biz har bir bolada ijod uchqunlarini yoqamiz."
          />
        </div>
        <div className="flex justify-center mt-10">
          <Link href={"/news"}>
            <motion.button
              className="inline-block text-base px-3 py-2 bg-[#F4F1EA] text-[#E74C25] rounded-md font-bold hover:bg-[#0A303A] hover:text-white border border-[#E74C25] hover:border-none mt-4 lg:mt-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Ko'rib chiqish
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NewsItem({ image, title }) {
  return (
    <div className="cursor-pointer hover:text-[#E74C25] flex flex-col items-center max-w-xs">
      <Image
        className="rounded-xl mb-5"
        width={240}
        height={260}
        src={image}
        alt="News"
      />
      <h4 className="font-bold text-lg md:text-xl text-center">{title}</h4>
    </div>
  );
}
