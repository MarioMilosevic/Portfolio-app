const Contact = ({
  children,
  path,
  target = true,
}: {
  children: React.ReactNode;
  path: string;
  target?: boolean;
}) => {
  return (
    <a
      href={path}
      target={target ? "_blank" : ""}
      className="flex items-center gap-3 text-slate-400 hover:text-slate-200 cursor-pointer"
    >
      {children}
    </a>
  );
};

export default Contact;
