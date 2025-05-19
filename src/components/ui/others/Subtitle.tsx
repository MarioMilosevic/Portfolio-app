const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-12 relative">
      <h2 className="text-3xl uppercase tracking-widest text-slate-50">
        {children}
      </h2>
      <hr className="w-[150px] h-[1px] text-center absolute bottom-6 right-1/2 translate-x-1/2" />
    </div>
  );
};

export default Subtitle;
