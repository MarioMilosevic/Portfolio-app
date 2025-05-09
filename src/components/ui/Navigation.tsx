
const Header = () => {
  return (
    <nav className="border-b border-b-slate-600 fixed w-full h-16 flex justify-center gap-2 py-2">
      <button className="btn bg-slate-700">HOME</button>
      <button className="btn">ABOUT</button>
      <button className="btn">EXPERIENCE</button>
      <button className="btn">PROJECTS</button>
      <button className="btn">RECOMMENDATIONS</button>
      <button className="btn">EXPLORE</button>
    </nav>
  );
};

export default Header;
