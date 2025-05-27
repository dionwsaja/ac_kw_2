import video from "../assets/images/Video/video.mp4";
import { FaPlay } from "react-icons/fa";
import thumbnail from "../assets/images/Video/thumbnail.jpg";

const Home = () => {
  return (
    <section className="max-w-screen mx-auto pt-10 lg:py-3 md:pt-16 lg:pt-24">
      <div>
        <div className="gap-y-4 md:gap-y-8 flex flex-col">
          <div>
            <h1
              className="text-white font-bold text-center text-[22px] md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              duration="500"
            >
              Strategi Trading Crypto Untuk <br />
              <span className="gradient-1">Gandain Uang Kalian</span>{" "}
            </h1>
          </div>
          <div
            className="px-8 mx-auto max-w-[700px]"
            data-aos="fade-up"
            duration="500"
          >
            <p className="text-white text-center tracking-wide text-md md:text-lg lg:text-xl">
              {" "}
              <span className="font-bold">87% Murid </span>
              di Akademi berhasil melipatgandakan portofolionya
              <span className="underline font-bold"> dalam waktu 3 bulan </span>
              menggunakan strategi kita.
            </p>
          </div>
        </div>
        <div
          className="max-w-screen-lg mx-auto py-8 px-2"
          data-aos="fade-up"
          duration="500"
        >
          <div className="mb-8 lg:mb-14">
            <video
              controls
              poster={thumbnail}
              className="shadow-2xl shadow-blue-500/25"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div
            className="flex justify-center md:pb-8"
            data-aos="fade-up"
            duration="500"
          >
            <button className="button-2 gap-x-2">
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

export default Home;
