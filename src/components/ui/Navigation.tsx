
const Header = () => {
  return (
    <nav className="border-b border-b-slate-600 fixed w-full h-16 flex justify-center gap-2 py-2">
      <button className="btn btn-soft btn-primary">HOME</button>
      <button className="btn btn-soft btn-primary">ABOUT</button>
      <button className="btn btn-soft btn-primary">EXPERIENCE</button>
      <button className="btn btn-soft btn-primary">PROJECTS</button>
      <button className="btn btn-soft btn-primary">RECOMMENDATIONS</button>
      <button className="btn btn-soft btn-primary">EXPLORE</button>
    </nav>
  );
};

export default Header;
