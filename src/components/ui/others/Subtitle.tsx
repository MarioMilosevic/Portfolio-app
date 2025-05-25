const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="md:text-3xl text-xl uppercase tracking-widest text-slate-50 pb-6">
        {children}
      </h2>
      <hr className="md:w-[150px] w-[130px] h-[1px] text-center pb-12 md:pb-18" />
    </div>
  );
};

export default Subtitle;
