import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import logo from "../../assets/Logo/logo.png";

// bg-gradient-to-r from-green-100 via-blue-100 to-purple-100
const Footer = () => {
  return (
    <div className="text-white">
      <footer className="footer text-white sm:footer-horizontal bg-black p-6">
        <nav>
          <h6 className="footer-title">Dining Services</h6>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Special Offers</a>
          <a className="link link-hover">Catering</a>
          <a className="link link-hover">Reservations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer text-white bg-black border-lime-800 border-t px-6 py-3">
        <aside className="grid-flow-col items-center">
          <img src={logo} alt="Logo" className="w-15 h-15" />
          <p>
            <span className="font-bold text-2xl">Bite & Bliss</span>
            <br />
            <span className="text-rose-500">Taste The Difference</span>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-2 items-center justify-center">
            <a href="https://www.facebook.com/share/1LLmiEeYXT/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/anik_804/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/anik-chakraborty-101962262/" target="_blank" rel="noopener noreferrer">
              <GrLinkedin className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
