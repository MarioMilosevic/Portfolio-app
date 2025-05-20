const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl uppercase tracking-widest text-slate-50 pb-6">
        {children}
      </h2>
      <hr className="w-[150px] h-[1px] text-center pb-18" />
    </div>
  );
};

export default Subtitle;
