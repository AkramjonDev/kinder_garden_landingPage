"use client"
import Image from 'next/image'
import '../globals.css'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='header mb-32'>
      <div className='w-full h-screen flex justify-center items-center'>
        <motion.div
          className='w-11/12 md:w-3/5 lg:w-1/3 bg-white rounded-full flex flex-col justify-center items-center mb-10 p-8 md:p-12 lg:p-16'
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className='mb-8 md:mb-10'>
            <Image width={80} height={110} src={'https://skole.vamtam.com/wp-content/uploads/2019/11/bird.svg'} alt="Bird Logo" />
          </div>
          <h1 className='font-bold text-center text-[#0A2F38] text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10'>
            Bir umrlik <br /> <span className='text-5xl md:text-7xl'>ishonch</span> <br /> shu erdan boshlanadi
          </h1>
          <motion.button
            className='inline-block text-base px-5 py-2 bg-[#E74C25] text-[#fff] rounded-md font-bold hover:bg-[#0A303A] '
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Nima uchun ?
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
