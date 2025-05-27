import img from "../assets/images/Bonus/02.webp";
import { BsArrowDownRightCircle } from "react-icons/bs";

const Bonus2 = () => {
  return (
    <section className="max-w-screen-2xl mx-auto pt-16 px-4 md:px-0">
      <div>
        <div
          className="text-white tracking-widest max-w-screen-md mx-auto py-6 mb-8"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <p className="text-center md:text-lg">
            untuk mengetahui narrative apa yang akan jalan duluan di cycle
            selanjutnya, karena di industri crypto kecepatan adalah segalanya.{" "}
          </p>
        </div>
        <div
          className="max-w-[850px] mx-auto relative px-4 "
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <div className="absolute animate-pulse left-[50%] -translate-x-20 -translate-y-4 md:-translate-x-36">
            <div className="px-4 py-2 bg-[#1D8704] rounded-xl text-white font-extrabold tracking-wide text-[10px] text-center md:py-3 md:px-8 md:text-xl">
              VALUE 5.2JT+ PER TAHUN
            </div>
          </div>
          <a href="#">
            <img
              src={img}
              className="rounded-3xl  shadow-2xl shadow-blue-500/30 "
            />
            <div className="hidden md:block absolute right-10 bottom-8">
              <p className=" flex items-center gap-x-2 text-white tracking-[0.2em]">
                LIHAT SAMPLE{" "}
                <span>
                  <BsArrowDownRightCircle className="text-3xl" />
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bonus2;
