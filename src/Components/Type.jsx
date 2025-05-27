import img1 from "../assets/images/Type/Type-1.webp";
import img2 from "../assets/images/Type/Type-2.webp";
import { FaPlay } from "react-icons/fa";

const Type = () => {
  return (
    <section className="max-w-screen-2xl mx-auto pt-8">
      <div>
        <div
          className="py-8"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <h1 className="text-white text-5xl text-center font-bold">
            di Dunia ini Ada 2 Tipe Orang,
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto py-4">
          <div className="flex flex-col px-3 md:px-6 gap-y-6 md:gap-y-0  md:flex-row  items-center justify-center md:gap-x-6 ">
            <div
              data-aos="fade-up"
              duration="2000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
            >
              <img
                src={img1}
                className="md:-translate-y-4 transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div
              data-aos="fade-up"
              duration="2000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
            >
              <img
                src={img2}
                className="-translate-x-2 md:-translate-x-0 transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div
          className="flex justify-center pt-10"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <button className="button-4 gap-x-2">
            <span>
              <FaPlay className=" w-3 opacity-50 relative z-10" />
            </span>
            <span className="relative z-10">Take Action Sekarang</span>
            <span>
              <FaPlay className="rotate-180 w-3 opacity-50 relative z-10" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Type;
