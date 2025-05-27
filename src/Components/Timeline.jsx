import img1 from "../assets/images/02/timeline-1.webp";
import img2 from "../assets/images/02/timeline-2.webp";
import img3 from "../assets/images/02/timeline-3.webp";
import icon1 from "../assets/images/02/timeline-number-1.svg";
import icon2 from "../assets/images/02/timeline-number-2.svg";
import icon3 from "../assets/images/02/timeline-number-3.svg";

const Timeline = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-4">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div
          className="mb-8"
          data-aos="fade-up"
          duration="2000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
        >
          <p className="text-white text-2xl md:text-4xl font-bold text-center">
            Kenapa Akademi Crypto?
          </p>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] md:border-s-0  relative">
          <div
            className="md:w-1/2 ps-8 md:pe-16 text-left pb-6  md:text-right md:pb-24"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <p className="text-white text-lg md:text-2xl">
              <span className="gradient-1 font-bold">
                {" "}
                Kalian akan dibimbing dari 0 sampai bisa melipatgandakan
                portofolio melalui aset crypto dengan 200+ modul E-learning,
              </span>
              yang bisa di akses 24 jam dan di update setiap bulannya yang
              diajar langsung dengan pakar Phd.
            </p>
          </div>
          <div
            className="md:w-1/2 md:border-s-[1px] ps-8 md:ps-16 pb-8 md:pb-8"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <img src={img1} className="w-[500px]" />
          </div>
          <div>
            <img
              src={icon1}
              className="w-[40px] absolute top-0 left-0 -translate-x-4 md:w-[80px] md:left-[50%] md:-translate-x-6"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row border-s-[1px] md:border-s-0 relative">
          <div className="flex flex-col-reverse md:flex-row">
            <div
              className="md:w-1/2 pe-16 text-right md:pb-32 flex justify-center items-center pb-8"
              data-aos="fade-up"
              duration="2000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
            >
              <img src={img2} className="ms-12 md:ms-0" />
            </div>
            <div
              className="md:w-1/2 md:border-s-[1px] md:ps-8 pb-8 md:pb-0"
              data-aos="fade-up"
              duration="2000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
            >
              <p className="text-white text-lg md:text-2xl ps-8">
                <span className="gradient-1 font-bold">
                  {" "}
                  Kalian akan mendapatkan akses ke Ekslusif Riset independen
                  dari team Akademi Crypto, untuk mengetahui narative apa yang
                  akan jalan duluan di cycle selanjutnya,
                </span>
                testimoni bisa dibuktikan sendiri dengan bergabung di group
                discord gratis kita.
              </p>
            </div>
          </div>
          <div>
            <img
              src={icon2}
              className="w-[40px] absolute top-0 left-0 -translate-x-4 md:w-[80px] md:left-[50%] md:-translate-x-6"
            />
          </div>
        </div>
        <div className="flex flex-col ps-4 md:flex-row relative">
          <div
            className="md:w-1/2 ps-8 md:ps-0 md:pe-16 md:text-right pb-8 md:pb-0"
            data-aos="fade-up"
            duration="2000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
          >
            <p className="text-white text-lg md:text-2xl">
              <span className="gradient-1 font-bold">
                Kalian akan mendapatkan banyak event ekslusif, dan komunitas
                yang mau belajar bareng dan saling support,
              </span>
              Sangat cocok untuk kalian yang mau mengembangkan network karena
              sukses tidak bisa dicapai sendirian.
            </p>
          </div>
          <div className="md:w-1/2 ps-8 md:ps-16">
            <img
              src={img3}
              className="md:w-[500px]  "
              data-aos="fade-up"
              duration="2000"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
            />
          </div>
          <div>
            <img
              src={icon3}
              className="w-[40px] absolute top-0 left-0 -translate-x-4 md:w-[80px] md:left-[50%] md:-translate-x-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
