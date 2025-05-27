import zoom from "../assets/images/Bonus/03/zoom.webp";
import img1 from "../assets/images/Bonus/03/01.webp";
import img2 from "../assets/images/Bonus/03/02.webp";
import img3 from "../assets/images/Bonus/03/03.webp";
import img4 from "../assets/images/Bonus/03/04.webp";

const Bonus3 = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="px-4">
        <div
          className="max-w-[480px] mx-auto"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <p className="text-white text-sm md:text-lg text-center py-16">
            kalian akan dapatkan{" "}
            <span className="font-bold">
              hanya dengan commitment fee 97rb jika menjadi member.
            </span>
          </p>
        </div>
        <div
          className="max-w-[1200px] mx-auto p-[1.5px] bg-gradient-to-r from-primary to-[#00adcf]  rounded-3xl"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <div className="absolute left-[50%] -translate-x-20 -translate-y-4 md:-translate-y-7 md:-translate-x-40 ">
            <div className="px-4 py-2 bg-[#1D8704] rounded-xl text-white font-extrabold tracking-wide text-[10px] text-center md:py-3 md:px-8 md:text-xl relative">
              VALUE 5.2JT+ PER TAHUN
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto rounded-3xl bg-gradient-to-b from-[#202020] to-black px-6 py-8">
            <div className=" flex justify-center pb-5 pt-0">
              <img src={zoom} className="w-64" />
            </div>
            <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row">
              <div className="flex flex-row gap-x-4">
                <div>
                  <img src={img1} className="" />
                </div>
                <div>
                  <img src={img2} className="" />
                </div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div>
                  <img src={img3} className="" />
                </div>
                <div>
                  <img src={img4} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus3;
