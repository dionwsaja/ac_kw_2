import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Charity from "../Components/Charity";

import glow1 from "../assets/images/01/glow-top.svg";
import globe from "../assets/images/01/bg-globe-1.webp";
import glow2 from "../assets/images/01/glow-2-a.svg";
import Divider from "../Components/Divider";

// import purpleLine from "../Components/purpleLine";

const Banner = () => {
  return (
    <section className=" relative">
      <div>
        <img src={glow1} className="absolute" />
      </div>
      <Navbar />
      <Home />

      <Divider />
      <Charity />
    </section>
  );
};

export default Banner;
