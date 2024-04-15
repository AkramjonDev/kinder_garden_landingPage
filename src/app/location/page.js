"use client"
import { motion } from "framer-motion"

const Location = () => {
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
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-[650px] w-full border">
            <iframe
              className="w-[650px] h-[660px] max-lg:w-full max-md:h-auto"
              style={{ border: "1px solid #DEE0E4" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.9190562690796!2d67.40348237569609!3d37.83878077196927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5538baffb0d43%3A0x911b4965f9bd576e!2sBandixon%20tumani%2014%20maktab!5e0!3m2!1sru!2s!4v1713186295526!5m2!1sru!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="font-bold text-xl md:text-2xl mb-10">Ekskursiyani rejalashtiring</h3>
            <div className="flex flex-col gap-3 md:flex-row md:gap-3 mb-6">
              <input type="text" placeholder="Ism" className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium" />
              <input type="text" placeholder="Familiya" className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium" />
            </div>
            <input className="p-2 outline-none border rounded-md focus:border-2 focus:font-medium mb-6" placeholder="Email" type="email" />
            <div className="flex gap-3 mb-6 md:flex-row md:gap-3 max-md:flex-wrap max-md:w-full">
              <input className="p-2 max-md:w-full outline-none border rounded-md focus:border-2 focus:font-medium" type="number" placeholder="ZIP code" />
              <input className="p-2 max-md:w-full outline-none border rounded-md focus:border-2 focus:font-medium" type="number" placeholder="Phone Number" />
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
                className="inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Ma'lumotlarni yuborish
              </motion.button>
            </div>
          </div>
        </div>
      </div>;
    </div>
  )
}

export default Location