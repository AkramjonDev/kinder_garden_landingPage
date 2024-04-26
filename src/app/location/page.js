"use client"
import { text } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { motion } from "framer-motion"
import { useState } from "react"

const Location = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    study: "",
    dateBirth: "",
    data: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendTelegramMessage = async () => {
    const { firstName, surName, email, phoneNumber, study, dateBirth, data } = formData;
    const message = `
      Ismi: ${firstName}
      Familiyasi: ${surName}
      Email: ${email}
      Telefon raqami: ${phoneNumber}
      Qancha vaqt o'qishi: ${study}
      Tug'ilgan yili: ${dateBirth}
      Qo'shimcha ma'lumot: ${data}
    `;

    const botToken = "6965715696:AAG1Q0b1rVxupjYeXdDUutn30mgFdSSb9AE";
    const chatId = "-1002001970729";

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendTelegramMessage();
    } catch (error) {
      console.log("Error handling form submission:", error);
    }
  };

  return (
    <div className=''>
      <div className="location mb-28 bg-[#F4F1EA] pt-28 pb-20 bg-cover bg-no-repeat bg-right" style={{ backgroundImage: "url('https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-tree-2.svg')", backgroundSize: "300px" }}>
        {/* page navbar */}
        <div className='max-w-7xl mx-auto px-14'>
          <div className='flex justify-between'>
            <div className="">
              <h1 className='font-bold text-[#0A303A] text-5xl mb-5'>Manzilimiz</h1>
              <p className='text-[#0A303A]'>Agar sizda biron bir savol yoki so'rov bo'lsa, iltimos, <br /> murojaat qiling.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 mb-20">
          <div className="md:w-[650px] w-full border">
            <iframe
              className="w-[650px] h-[660px] max-lg:w-full max-md:h-auto "
              style={{ border: "1px solid #DEE0E4" }}
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.94083311818838!2d67.44850851099446!3d37.83563735323766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5550000fba693%3A0xd40666afc2998415!2sSurxondaryo%20viloyati%20Qumqo&#39;rg&#39;on%20tumani%208-Davlat%20maktabgacha%20ta&#39;lim%20tashkiloti!5e0!3m2!1sru!2s!4v1713381558506!5m2!1sru!2s" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-bold text-xl md:text-2xl mb-10">Ekskursiyani rejalashtiring</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 md:flex-row md:gap-3 mb-6">
                <input
                  // value={formData.firstName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Ism"
                  required
                  className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium"
                />
                <input type="text" placeholder="Familiya" className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium" />
              </div>
              <input className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium mb-6" placeholder="Email" type="email" />
              <div className="flex gap-3 mb-6 md:flex-row md:gap-3 max-md:flex-wrap max-md:w-full">
                <input className="p-2 w-full max-md:w-full outline-none border rounded-md focus:border-2 focus:font-medium" type="number" placeholder="Phone Number" />
              </div>
              <div className="flex flex-col mb-6">
                <p>Qancha vaqt farzandingizni o'qishini xohlaysiz ? <span className="text-[#E72929]">*</span></p>
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
                <p>Farzandingizni tug'ilgan sanasini ? <span className="text-[#E72929]">*</span></p>
                <input className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium" type="date" placeholder="Sana" />
              </div>
              <div className="flex flex-col">
                <p>Maʼlumotlaringizni yuboring va biz tez orada sizga xat yuboramiz. Siz bilan tanishganimizdan xursandmiz!</p>
                <input className="p-2 pb-16 mb-5 outline-none border rounded-md focus:border-2 focus:font-medium" type="text" placeholder="qoshimcha ma'lumot uchun" />
                <motion.button
                  type="submit"
                  className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Ma'lumotlarni yuborish
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Surxandaryodagi Modern kids bo'g'chasi ochiq o'yin maydonchasiga egami?
          </div>
          <div className="collapse-content">
            <p>Surxandaryodagi Modern kids to'g'ridan-to'g'ri markazda joylashgan noyob kombinatsiyalangan yopiq/tashqi o'yin maydonchasiga ega. O'yin maydonchalari barcha yoshdagi bolalar har kuni tashqarida o'ynashlari uchun bolalar bog'chasiga tayyorgarlik ko'rishlari uchun mos keladi.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Surxandaryodagi Modern kids butun yil davomida ochiqmi?
          </div>
          <div className="collapse-content">
            <p>Markazimiz nafaqat yil davomida ishlaydi, balki yil davomida ro'yxatga olish va bolalarni ro'yxatga olishni ham qabul qilamiz. Oilangiz uchun ishlaydigan jadval va boshlanish sanasi haqida ko'proq ma'lumot olish uchun bizga qo'ng'iroq qiling.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Surxandaryodagi Modern kids maktabgacha ta'lim dasturiga egami?
          </div>
          <div className="collapse-content">
            <p>Ha! Markazimiz 3 va undan katta yoshdagi bolalar uchun to'liq kunlik Maktabgacha ta'lim dasturini taklif etadi. Maktabgacha tarbiya - bu katta yil. Biz o'z dasturimizni farzandingiz tajribasining har bir jihatiga to'liq ishonch hosil qilish uchun ishlab chiqdik; salomatlik va xavfsizlikdan; maktabga tayyor o'quv dasturiga; tajribali o'qituvchilarning har tomonlama qo'llab-quvvatlashiga. Xuddi muhimi, bizning dasturimiz tadqiqot natijalariga ko'ra bolalarni bog'chaga eng yaxshi tayyorlaydigan narsaga asoslanadi ... va oldinda bo'lgan barcha katta qadamlar.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Surxandaryodagi Modern kids o'z xodimlarining ma'lumotlarini tekshirish jarayoni qanday?
          </div>
          <div className="collapse-content">
            <p>Bright Horizons barcha bo'lajak xodimlar va tez-tez tashrif buyuruvchilar haqida keng qamrovli fon tekshiruvini o'tkazadi. Ma'lumotni tekshirish so'nggi etti yil davomida shaxs yashagan, ishlagan yoki maktabda o'qigan barcha okruglarda o'tkazilgan sudlanganlik holatini tekshirishdan iborat. Tumandagi jinoiy qidiruvdan tashqari, jinsiy jinoyatchini qidirish, OFAC qidiruvi va ijtimoiy xavfsizlik tekshiruvi ham o'tkaziladi. Barcha joylashuv xodimlari uchun davlat tomonidan talab qilinadigan dastur litsenziyalash fonini tekshirishlari ham amalga oshiriladi.</p>
          </div>
        </div>
      </div>;
    </div>
  )
}

export default Location