const Divider3 = () => {
  return (
    <section className="max-w-screen-3xl mx-auto mb-2 md:mb-20 pt-20">
      <div className="relative">
        <div className="absolute left-[50%] -translate-x-52 -translate-y-3 md:-translate-y-6 md:-translate-x-60 lg:-translate-x-[280px]">
          <div className="flex justify-center bg-black w-[420px] md:w-[500px] items-center mx-auto px-4 lg:w-[600px]">
            <p className="text-white text-md  md:text-2xl font-bold text-center lg:text-4xl">
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
