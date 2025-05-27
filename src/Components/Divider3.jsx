const Divider3 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto mb-2 md:mb-20 pt-20 ">
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-3 md:-translate-y-6 md:-translate-x-1/2 lg:-translate-x-1/2">
          <div className="flex justify-center bg-black w-[300px] md:w-[500px] lg:w-[800px] items-center  px-4 ">
            <p className="text-white text-md  md:text-2xl font-bold text-center lg:text-4xl ">
              <span className="text-slate-500 text-[12px] md:text-lg">
                03.{" "}
              </span>
              <span className="gradient-1 text-md">Webinar Eksklusif </span>
              Bulanan Seharga 970rb Per Webinar Untuk Orang Luar
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-opacity-30 border-slate-200"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Divider3;
