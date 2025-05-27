import Logo from "../assets/images/logo-1.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="max-w-screen-3xl mx-auto text-white py-16 px-5 text-sm font-thin border-t-[0.5px] border-slate-200 border-opacity-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-10">
          <div className="md:w-1/4 flex flex-col gap-y-3">
            <div>
              <img src={Logo} className="w-[110px]" />
            </div>
            <div>
              <p className="font-bold">PT. Akademi Uang Digital</p>
            </div>
            <div>
              <p>
                Gedung District 8, Treasury Tower Lantai 6, Unit F, SCBD Lot 28,
                Jakarta Selatan 12190​
              </p>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-col gap-y-3  md:translate-y-10">
            <div>
              <p className="font-bold">Contact Us</p>
            </div>
            <div>
              <a href="#">tanya@akademicrypto.com</a>
            </div>
            <div>
              <a href="#">+62 813-8995-0105 (Wa Only)</a>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-col gap-y-3 md:translate-y-10">
            <div>
              <p className="font-bold">Others</p>
            </div>
            <div>
              <a href="#">Privacy & Policy</a>
            </div>
            <div>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
          <div className="md:w-1/4 flex flex-col gap-y-3 md:translate-y-10">
            <div>
              <p className="font-bold">Akademi Crypto </p>
            </div>
            <div>
              <p className="flex items-center gap-x-1">
                Copy Right <FaRegCopyright className="font-thin" /> 2023 All
                right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
