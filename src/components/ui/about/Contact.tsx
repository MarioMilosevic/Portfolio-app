const Contact = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 cursor-pointer">
      {children}
    </div>
  );
}

export default Contact
