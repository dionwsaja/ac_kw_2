import Logo from "../assets/images/logo-1.png";
import star from "../assets/images/03/star.svg";
import centang from "../assets/images/Curryculum/centang.svg";
import { FaPlay } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

const Pricing = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-16 ">
      <div className="px-5">
        <div className="flex flex-col items-center mb-8">
          <div
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <p className="gradient-1 tracking-widest text-md font-extrabold md:text-lg ">
              PRICING
            </p>
          </div>
          <div
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="70"
          >
            <p className="text-white font-bold text-center mb-4 text-4xl md:text-5xl lg:text-6xl">
              Daftar & Join Sekarang
            </p>
          </div>
          <div
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="90"
          >
            <p className="text-white  tracking-widest text-sm md:text-md lg:text-lg text-center">
              HARGA SAMPAI PERIODE{" "}
              <span className="text-red-500 font-bold ">29 FEBRUARI 23:59</span>
            </p>
          </div>
        </div>
        <div
          className=" rounded-3xl px-[0.5px] py-[2px] max-w-[900px] mx-auto bg-gradient-to-r from-primary to-[#00adcf] shadow-2xl shadow-blue-500/50"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <div className="max-w-[892px] mx-auto text-white  rounded-3xl bg-black px-4">
            <div className="w-[100%]  mx-auto relative px-3 py-7">
              <div className="hidden lg:block">
                <img src={Logo} className="w-[150px] right-4 top-4 absolute" />
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                  <div className="md:max-w-lg">
                    <p className="tracking-[0.1em] text-sm md:text-xl">
                      DAPATKAN AKSES 12 BULAN AKADEMI CRYPTO HANYA
                    </p>
                  </div>
                  <div>
                    <p className="text-red-500 text-xl line-through md:text-3xl">
                      14.700.000
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4">
                  <div>
                    <p className="font-extrabold tracking-widest text-3xl md:text-6xl">
                      RP11.700.000
                    </p>
                  </div>
                  <div>
                    <p className="tracking-[0.2em] text-sm md:text-md">
                      PEMBAYARAN UNTUK 12 BULAN
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="tracking-[.2em] custom-line-1 items-center gap-x-3 md:text-xl">
                <img src={star} className="w-4" />
                BENEFIT
              </p>
            </div>
            <div className="flex flex-col gap-y-6 py-6">
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    Strategi Investasi Yang Telah Terbukti Memberikan Return
                    Yang Signifikan Pada Portfolio Member Dalam{" "}
                    <span className="text-sky-300">3 Bulan</span>
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    Formula Trading & Investasi Yang Sudah Dibuktikan Oleh
                    Ribuan Member
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    Coaching Call Mingguan Secara Live Oleh Para Professor Untuk
                    Membimbing Kalian Step By Step
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    Komunitas Trader Crypto Terbesar Di Indonesia Yang Saling
                    Support
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    <span className="text-sky-300">*Bonus:</span> Analisa Crypto
                    Level Institusi
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    <span className="text-sky-300">*Bonus:</span> Skill
                    Programming Web3 Senilai Puluhan Juta
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div className="w-4/5">
                  <p className=" text-lg md:text-xl lg:text-2xl">
                    Akses Ke 200+ Modul Pembelajaran Terlengkap Di Indonesia
                  </p>
                </div>
                <div className=" px-4  ">
                  <img src={centang} className="w-8" />
                </div>
              </div>
              <hr className="border  opacity-20 border-dashed" />
            </div>
            <div className="flex flex-col gap-y-5 pb-8">
              <div className="flex justify-center pt-10">
                <button className="button-4 gap-x-2">
                  <span>
                    <FaPlay className=" w-3 opacity-50 relative z-10" />
                  </span>
                  <span className="relative z-10">Dapatkan Akses Sekarang</span>
                  <span>
                    <FaPlay className="rotate-180 w-3 opacity-50 relative z-10" />
                  </span>
                </button>
              </div>
              <div className="flex justify-center">
                <button className="flex flex-row items-center gap-x-2">
                  <IoTicketOutline className="text-2xl" />
                  <span className="text-lg md:text-xl">Punya Kode Promo?</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
