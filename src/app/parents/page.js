"use client"
import { faBaby, faBookOpen, faCalendarCheck, faCalendarDays, faImage, faListOl, faMoneyBill, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-24 mb-10">
            <h1 className="font-extrabold text-4xl text-[#0A303A] text-center mb-8">Bizning ota-onalarimiz uchun</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <Card
                    icon={faMoneyBill}
                    title="To'lovlar"
                    description="To'lovlar naqd pul yoki Plastik kartalar orqali amalga oshirilishi mumkin."
                />
                <Card
                    icon={faBookOpen}
                    title="Maktabga tayyorgarlik"
                    description="Kichkintoyingizning barcha hayajonlarini qo'llab-quvvatlash uchun o'qituvchilarimiz tomonidan ehtiyotkorlik bilan ishlab chiqilgan."
                    bgColor="#F4F1EA"
                />
                <Card
                    icon={faImage}
                    title="Maktab risolasi"
                    description="Oxirgi 2023 - 2024 risolasini yuklab olish uchun tugmani bosishingiz mumkin."
                />
                <Card
                    icon={faSignsPost}
                    title="Avtoturargoh yoʻnalishlari"
                    description="Yo'nalishlar va to'xtash joyi Modern kids maktabi uchun."
                />
                <div className="relative w-full max-md:w-64 h-64">
                    <Image className="" src={'https://skole.vamtam.com/wp-content/uploads/2019/11/fox-color.svg'} layout="fill" objectFit="contain" />
                </div>
                <Card
                    icon={faBaby}
                    title="Chaqaloqlar uchun ajoyib joy"
                    description="Farzandingiz qanday xavfsiz va yaxshi g'amxo'rlik qilishlarini bilishni xohlaysiz. Ekskursiyani belgilang."
                />
                <Card
                    icon={faCalendarCheck}
                    title="Ish vaqtlari"
                    description="Maktab ofisi ota-onalar uchun har o'quv kuni soat 8:30 dan 16:00 gacha ochiq."
                />
                <Card
                    icon={faListOl}
                    title="Bolalarni parvarish qilish ro'yxati"
                    description="Kichkintoyingizning barcha hayajonlarini qo'llab-quvvatlash uchun o'qituvchilarimiz tomonidan ehtiyotkorlik bilan ishlab chiqilgan."
                />
                <Card
                    icon={faCalendarDays}
                    title="Yo'qligi haqida xabar berish"
                    description="Sababsiz qatnashmaslik ruxsat etilmagan deb belgilanadi."
                />
            </div>
            <div className="">
                <h1 className="font-pacifico font-bold text-4xl md:text-9xl text-[#0A2F38] ml-72 mb-20 max-md:mb-3 max-md:ml-0">Keling</h1>
                <div className="flex gap-10 ml-64">
                    <div className="flex flex-col">
                        <Image width={240} height={240} src={'https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-people-2.svg'} />
                        <h5 className="font-bold text-2xl mb-3">Surxondaryo viloyati</h5>
                        <p>Qo'mqo'rg'on tumani</p>
                        <h5 className="font-bold text-lg">Telefon raqamimiz:​</h5>
                        <span className="text-[#E72929]">+1 541-754-3010</span>
                        <h5 className="font-bold text-lg">Email</h5>
                        <span className="text-[#E72929]">hi@kindergarten.com</span>
                    </div>

                    <div className="flex flex-col flex-grow">
                        <h3 className="font-bold text-xl md:text-2xl mb-10 text-[#0A2F38]">va ekskursiyani rejalashtiring</h3>
                        <div className="flex flex-col gap-3 md:flex-row md:gap-3 mb-6">
                            <input type="text" placeholder="Ism" className="w-full p-2 outline-none border rounded-md focus:border-2 focus:font-medium" />
                            <input type="text" placeholder="Familiya" className="w-full p-2 outline-none border rounded-md focus:border-2 focus:font-medium" />
                        </div>
                        <input className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium mb-6" placeholder="Email" type="email" />
                        <div className="flex gap-3 mb-6 md:flex-row md:gap-3 max-md:flex-wrap max-md:w-full">
                            <input className="p-2 max-md:w-full outline-none border rounded-md focus:border-2 focus:font-medium" type="number" placeholder="ZIP code" />
                            <input className="p-2 max-md:w-full outline-none border rounded-md focus:border-2 focus:font-medium" type="number" placeholder="Phone Number" />
                        </div>
                        <div className="flex flex-col mb-6">
                            <select className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium">
                                <option>Ishonchim komil emas</option>
                                <option>1 oy</option>
                                <option>1-3 oy</option>
                                <option>3-6 oy</option>
                                <option>6-9 oy</option>
                                <option>9+ oy</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-6">
                            <input className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium" type="date" placeholder="Sana" />
                        </div>
                        <div className="flex flex-col">
                            <input className="p-2 pb-16 mb-5 outline-none border rounded-md focus:border-2 focus:font-medium" type="text" placeholder="qoshimcha ma'lumot uchun" />
                            <motion.button
                                className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Ma'lumotlarni yuborish
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ icon, title, description, bgColor }) => {
    return (
        <div className={`w-full p-4 bg-white rounded-xl flex flex-col items-center ${bgColor ? `bg-${bgColor}` : ''}`}>
            <FontAwesomeIcon className="text-[#E72929] text-4xl mb-3" icon={icon} />
            <h4 className="font-bold text-xl text-[#0A303A] mb-3 text-center">{title}</h4>
            <p className="text-[#0A303A] text-center">{description}</p>
        </div>
    );
}

export default Page;
