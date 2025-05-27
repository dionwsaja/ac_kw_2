// import banner from "../assets/images/banner.webp";
import { FaPlay } from "react-icons/fa";

const Banner2 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto relative ">
      <div>
        <div className="m-auto text-center text-white z-50 custom-bg py-36 ">
          <div
            className="max-w-[450px] md:max-w-[600px] lg:max-w-[1200px] mx-auto flex flex-col gap-y-4"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <p className="text-2xl md:text-3xl lg:text-6xl font-extrabold">
              “If A Man Empties His Purse Into His Head No Man Can Take It Away”
            </p>
            <p className="tracking-[0.2em] text-md md:text-lg">
              BENJAMIN FRANKLIN
            </p>
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
              <span className="relative z-10">Join Now</span>
              <span>
                <FaPlay className="rotate-180 w-3 opacity-50 relative z-10" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
