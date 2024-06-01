import { RiFacebookCircleLine } from "react-icons/ri";

function About() {
  return (
    <div className="w-full">
      <div
        className="location mb-28 bg-[#F4F1EA] pt-28 pb-20 bg-cover bg-no-repeat bg-right"
        style={{
          backgroundImage:
            "url('https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-tree-2.svg')",
          backgroundSize: "300px",
        }}
      >
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-bold text-[#0A303A] text-5xl mb-5">
                Biz haqimizda
              </h1>
              <p className="className='text-[#0A303A]'">
                Biz bolalarga qiziqarli va ta'lim faoliyati orqali tana va
                ongini jalb qilishda yordam beramiz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="history flex justify-between items-center mt-24 mb-36 max-md:flex-col max-md:w-full">
        <div className="w-[1200px] pb-96 max-md:w-full">
          <iframe
            width="610"
            height="382"
            className="absolute max-md:w-full max-md:ml-0 ml-44"
            src="https://www.youtube.com/embed/3TXoCnyDy34?si=bwNrpl6dUGpjOBdD"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mr-20 max-md:w-full">
          <h2 className="text-6xl font-bold mt-10">Bizning muhit</h2>
          <p className="text-1xl font-semibold mt-5 w-[500px] max-md:w-full">
            Bizning darslarimiz bolalarning madaniy, ijtimoiy va akademik
            rivojlanishiga e'tibor beradi. Bizga murojaat qiling va bizning
            jamoamizga qo'shiling - sizning bolangizning kelajagi bizning
            g'alabamiz.
          </p>
          <div className="mt-5 font-bold">
            <p>
              {" "}
              10+ Butun O'zbekiston bo'ylab bolalarni parvarish qilish
              markazlari
            </p>
            <p className="my-3">
              {" "}
              Butun O'zbekiston bo'ylab 100 dan ortiq xodimlar
            </p>
            <p>Bir vaqtning o'zida 1 bola va oila</p>
            <button className="btn btn-outline w-40 border-2 font-extrabold text-lg border-orange-400 mt-5">
              O'rganish
            </button>
          </div>
        </div>
      </div>

      <div className="section  rounded  bg-base-200 p-10">
        <div className="OurGraduet flex justify-between items-center mb-40 max-md:flex-col">
          <div className=" bg-white px-10 pb-5 rounded-2xl">
            <h2 className="text-6xl font-bold mt-10">Bizning bitiruvchilar</h2>
            <p className="text-1xl font-semibold mt-5 w-96 max-md:w-full">
              "Modernkids" jamoasining eng yaxshi bitiruvchilaridan bo'lishga
              tayyormisiz? Bizning bog'imizn eng zamonaviy ta'lim tizimiga ega.
              Sizga eng yaxshi o'qituvchilar, eng zamonaviy resurslar va eng
              yaxshi o'quv rejalarini taklif qilamiz.
            </p>
            <div className="mt-5 font-bold">
              <button className="btn btn-outline w-40 border-2 font-extrabold text-lg border-orange-400 mt-5">
                Learn more
              </button>
            </div>
          </div>

          <div>
            <img
              className="max-sm:w-full"
              width="670"
              height="436"
              src="https://skole.vamtam.com/wp-content/uploads/elementor/thumbs/h-02-pj0doggusoejiguzx63s89s86az0bpjyt4ebf23zac.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="OurComunity flex justify-between items-center mb-40 max-md:flex-col">
          <div>
            <img
              className="max-sm:w-full"
              width="670"
              height="436"
              src="https://skole.vamtam.com/wp-content/uploads/elementor/thumbs/h-09-pj0d5ajbga62sop5tvvme3vw5hfldvgzi9jx5yiy5g.jpg"
              alt=""
            />
          </div>

          <div className=" bg-white px-10 pb-5 rounded-2xl max-md:w-full">
            <h2 className="text-6xl font-bold mt-10">Bizning jamoa</h2>
            <p className="text-1xl font-semibold mt-5 w-96 max-md:w-full">
              Bizning oilalarimiz yaqin mahallalardan kelib, yaqin atrofdagi
              muhit va mustahkam ota-onalar hamkorligi yaratmoqda. Uyga yoki
              ofisga yaqin bo'lishimizdan qat'i nazar, bizning markazimiz band
              bo'lgan ishlaydigan oilalar uchun ideal va borish oson - olib
              ketish va tushirish yoki tashrif buyurish uchun. Biz bolalarga
              erta ta'lim ko'nikmalarini rivojlantirishga yordam berish uchun
              qiziqarli, tadqiqotga asoslangan, ko'p hissiy strategiyalardan
              foydalanamiz, jumladan, "Jonli harflar", "fonika va savodxonlik
              uchun ochiq sud", "Ko'z yoshlarsiz qo'l yozuvi" va "Kundalik
              matematika". Biz maktab bo'ylab ijtimoiy va hissiy ta'lim o'quv
              dasturimiz uchun asos sifatida Responsive Classroomdan
              foydalanamiz.
            </p>
            <div className="mt-5 font-bold">
              <button className="btn btn-primary w-36 border-2  mt-5">
                {" "}
                <RiFacebookCircleLine className="w-7 h-7" />{" "}
                <span className="font-semibold">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <div className="Health flex justify-between gap-16 mt-24 mb-36 max-md:flex-col">
          <div className=" bg-white px-10  py-10 rounded-2xl max-md:w-full">
            <h2 className="text-6xl font-bold mt-10 ">
              Salomatlik va xavfsizlik
            </h2>
            <p className="text-1xl font-semibold mt-5 w-[500px] max-md:w-full">
              Farzandingiz salomatligi va xavfsizligi bizning ustuvor
              vazifamizdir. Bizning markazlarimizda tozalik va xavfsizlik
              bo'yicha qat'iy ko'rsatmalar mavjud va biz "Sog'lom O'zbekiston
              uchun hamkorlik" tomonidan bolalarni parvarish qilish markazlari
              uchun salomatlik va salomatlik namunasi sifatida e'tirof
              etilganimizdan faxrlanamiz. Biz farzandingiz salomatligi va
              xavfsizligini bizning ustuvor vazifamizga aylantiramiz. Bizning
              standartlarimiz sanoatdagi eng yuqori standartlar bo'lib, barcha
              mahalliy va davlat ko'rsatmalariga javob beradi yoki ulardan
              oshadi. Bizning barcha erta ta'lim va maktabgacha ta'lim
              markazlarimiz quyidagilarni o'z ichiga oladi:
            </p>
            <div className="mt-5 font-bold">
              <p>
                {" "}
                Yumaloq burchaklar va yumshoq yuzalar bilan yaxshi
                rejalashtirilgan joylar
              </p>
              <p className="my-3">
                Bolalarni doimo ko'z oldida ushlab turadigan xavfsiz joylar
              </p>
              <p>
                Xavfsizlikni ta'minlash uchun kompyuterlashtirilgan ro'yxatdan
                o'tish
              </p>
              <button className="btn btn-outline w-40 border-2 font-extrabold text-lg border-orange-400 mt-5">
                Learn more
              </button>
            </div>
          </div>

          <div className="video mt-20">
            <img
              className="max-sm:w-full"
              width="670px"
              height="536"
              src="https://skole.vamtam.com/wp-content/uploads/elementor/thumbs/h-07-pj0d5tc38ywnxryaa80ukmw4lyj8knie52udsxjj9c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
