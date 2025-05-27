import img1 from "../assets/images/charity/1.webp";
import img2 from "../assets/images/charity/2.webp";
import img3 from "../assets/images/charity/3.webp";
import img4 from "../assets/images/charity/4.webp";
import { FaDiscord } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Charity = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div>
        <div className="flex px-2 py-4 flex-col gap-y-5 mb-6 md:flex-row md:gap-x-3 md:px-4 max-w-screen-xl mx-auto lg:gap-x-5">
          <div className="flex flex-row gap-x-3 lg:gap-x-5">
            <div>
              <img
                src={img1}
                data-aos="fade-up"
                duration="1000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="50"
              />
            </div>
            <div>
              <img
                src={img2}
                data-aos="fade-up"
                duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="50"
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-3 lg:gap-x-5">
            <div>
              <img
                src={img3}
                data-aos="fade-up"
                duration="1500"
                data-aos-anchor-placement="top-center"
                data-aos-delay="50"
              />
            </div>
            <div>
              <img
                src={img4}
                data-aos="fade-up"
                duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="50"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="px-6 pb-6"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <p className="text-white text-lg text-center md:text-xl">
              Jangan percaya kita, lihat sendiri aja testimoni mereka yang bisa
              banyak membantu orang dari hasil cuan di discord
            </p>
          </div>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <button className="button-3">
              <span className="relative z-10">
                <FaDiscord />
              </span>
              <span className="relative z-10">Join Group Discord</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charity;
