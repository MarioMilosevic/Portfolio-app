const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-slate-400 hover:text-slate-200 cursor-pointer">
      {children}
    </p>
  );
};

export default Content;
