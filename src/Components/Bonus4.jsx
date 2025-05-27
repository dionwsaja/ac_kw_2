import logo from "../assets/images/Bonus/04/logo.webp";
import group from "../assets/images/Bonus/04/group.webp";
import Line from "./line";

const Bonus4 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto py-16">
      <div
        className="mb-12"
        data-aos="fade-up"
        duration="2000"
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
      >
        <p className="text-white text-center">
          untuk{" "}
          <span className="font-extrabold">
            private mentoring dengan komunitas.
          </span>
        </p>
      </div>
      <div className="relative mb-4">
        <img src={group} alt="" />
        <div className="absolute top-[50%] left-[50%] -translate-x-[26px] -translate-y-6 md:-translate-x-12 md:-translate-y-14 lg:-translate-x-[68px] lg:-translate-y-20">
          <img src={logo} className="w-[50px] md:w-24 lg:w-32" />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto  flex flex-col gap-y-4">
        <div
          className="animate-pulse max-w-screen-md mx-auto "
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <div className="px-4 py-2 bg-[#1D8704] rounded-xl text-white font-extrabold tracking-wide text-[10px] text-center md:py-3 md:px-8 md:text-xl">
            VALUE, KALIAN GAAKAN BISA BAYAR WAKTU MEREKA
          </div>
        </div>
        <div
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <p className="text-white text-center text-[12px] font-bold tracking-widest md:text-lg">
            BONUS VALUE SENILAI{" "}
            <span className="text-lg text-green-500 tracking-normal md:text-3xl">
              45.200.000
            </span>
            <span className="text-sm text-green-500 tracking-normal">
              /TAHUN
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonus4;
