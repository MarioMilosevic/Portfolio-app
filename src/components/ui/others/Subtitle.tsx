const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-3xl pb-4 uppercase tracking-widest">
        {children}
      </h2>
      <hr className="w-[150px] h-[1px] text-center"/>
    </div>
  );
};

export default Subtitle;
