const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-neutral-content p-10 flex justify-between">
      <nav>
        <h6 className="footer-title">Useful links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Experience</a>
        <a className="link link-hover">Freetime projects</a>
        <a className="link link-hover">Explore</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social media</h6>
        <a className="link link-hover">Linkedin</a>
        <a className="link link-hover">GitHub</a>
      </nav>
    </footer>
  );
};

export default Footer;
