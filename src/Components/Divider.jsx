const Divider = () => {
  return (
    <section className="max-w-screen-3xl mx-auto mb-2 md:mb-4">
      <div className="relative">
        <div className="absolute left-[50%] -translate-x-24 -translate-y-[14px] md:-translate-x-32">
          <div className="flex justify-center bg-black w-48 md:w-64 items-center mx-auto">
            <p className="gradient-1 text-sm md:text-lg font-bold tracking-widest">
              APA KATA MEREKA
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-opacity-30 border-slate-200"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Divider;
