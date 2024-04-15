import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons'
import '../globals.css'

const CardSection = () => {
    return (
        <div className="flex gap-14 flex-col md:flex-row md:justify-evenly mb-10">
            <div className="card flex w-40 border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
                <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                    <FontAwesomeIcon icon={faQuestion} />
                </div>
                <h2 className="font-bold text-2xl text-[#0A303A] text-center">Savolaringiz bormi ?</h2>
                <span className="text-[#E74C25] font-bold text-center">So'rov yuboring</span>
            </div>
            <div className="card flex w-40 border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
                <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <h2 className="font-bold text-2xl text-center">Kelib o'zingiz ko'rishingiz mumkin</h2>
                <span className="text-[#E74C25] text-center font-bold">tashrif buyuring</span>
            </div>
            <div className="card flex w-40 border pt-5 pb-6 flex-col gap-5 items-center flex-grow  m-4 p-4 bg-white hover:scale-105 transition-transform duration-300">
                <div className="rounded-full flex items-center justify-center w-12 h-12 bg-[#0A303A] text-[#fff] text-3xl">
                    <FontAwesomeIcon icon={faFile} />
                </div>
                <h2 className="font-bold text-2xl text-center">Bizning oilamizga qo'shilishga tayyormisiz ?</h2>
                <span className="text-[#E74C25] text-center font-bold">Ro'yhatdan o'ting !</span>
            </div>
        </div>
    )
}

export default CardSection
