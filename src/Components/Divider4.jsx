import React from "react";

const Divider4 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto mb-2 md:mb-12 pt-16">
      <div className="relative">
        <div className="absolute left-[50%] -translate-x-52 -translate-y-3 md:-translate-y-4 md:-translate-x-60 lg:-translate-x-[360px] lg:-translate-y-6">
          <div className="flex justify-center bg-black w-[420px] md:w-[500px] items-center mx-auto px-4 lg:w-[720px]">
            <p className="text-white text-md  md:text-2xl font-bold text-center lg:text-4xl">
              <span className="text-slate-500 text-[12px] md:text-lg">
                04.{" "}
              </span>
              <span className="gradient-1 text-md">Private Mentoring, </span>
              Akses Langsung Ke Para Founder Setiap Kita Datang Ke Daerah Kalian
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-opacity-30 border-slate-200"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Divider4;
