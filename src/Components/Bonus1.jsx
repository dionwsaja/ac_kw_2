import React from "react";
import img from "../assets/images/Bonus/01.webp";
// import line from "./line";

const Bonus1 = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-10">
      <div className="px-4">
        <div
          className="max-w-[500px] mx-auto mb-8"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <p className="text-white text-center text-lg md:text-2xl tracking-[0.2em]">
            BONUS YANG KALIAN DAPATKAN SETELAH BERGABUNG MENJADI MEMBER
          </p>
        </div>
        <div
          className="text-white p-[1.5px] bg-gradient-to-r from-primary to-[#00adcf] shadow-2xl shadow-blue-500/50 rounded-3xl relative max-w-[1100px] mx-auto"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <div className="px-4 py-8 bg-black rounded-3xl flex flex-col md:flex-row justify-center max-w-[1100px] mx-auto items-center">
            <div>
              <img src={img} className="pb-5 md:pb-0 md:w-[400px]" />
            </div>

            <div className="flex flex-col gap-y-6 md:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="gradient-1 text-4xl md:text-6xl font-bold">
                    AC Terminal
                  </p>
                </div>
                <div className="md:absolute top-8 right-8">
                  <p className="text-slate-500 font-bold text-xl">01.</p>
                </div>
              </div>

              <div className="flex flex-col gap-y-4 max-w-xl">
                <div>
                  <p className="md:text-xl">
                    <span className="font-bold">
                      {" "}
                      Data onchain dan quantitative ekslusif yang kita olah
                      sendiri & tarik dari provider luar seharga ribuan dollar
                    </span>
                    kalian gak perlu subs tools apapun, kita yang akan pilah ke
                    kalian data mana yang paling penting.
                  </p>
                </div>
                <div>
                  <p className="md:text-xl">
                    Anggep ini kaya bloomberg terminal untuk crypto.{" "}
                    <span className="font-bold">
                      kalian hemat subscribe ITC, Kingfisher, glassnode,
                      coingecko, dan banyak tools lainnya
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus1;
