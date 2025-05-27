import "./App.css";
import Pricing from "./Components/Pricing";
import Timeline from "./Components/Timeline";
import Type from "./Components/Type";
import Line from "./Components/line";
import Banner from "./shared/Banner";
import bannerImg1 from "./assets/images/03/frame.webp";
import bannerImg2 from "./assets/images/03/frame1.webp";
import Footer from "./Components/Footer";
import Banner2 from "./Components/Banner2";
import Accordion from "./Components/Accordion";
import Bonus from "./shared/Bonus";
import Timeline2 from "./Components/Timeline2";
import Divider5 from "./Components/Divider5";
import Divider6 from "./Components/Divider6";

function App() {
  return (
    <section className="">
      <Banner />
      <Line />
      <Timeline />
      <Line />
      <Timeline2 />
      <Line />
      <Bonus />
      <Divider5 />
      <Type />
      <Line />
      <Pricing />
      <Banner2 />
      <Divider6 />
      <Accordion />
      <div
        className="max-w-screen-xl mx-auto py-16 px-4"
        data-aos="fade-up"
        duration="2000"
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
      >
        <div>
          <img src={bannerImg1} className="block w-full md:hidden" />
          <img src={bannerImg2} className="hidden md:block" />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
