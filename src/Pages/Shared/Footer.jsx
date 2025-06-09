import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import logo from "../../assets/Logo/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-base-content p-6">
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
      <footer className="footer bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-base-content border-lime-800 border-t px-6 py-3">
        <aside className="grid-flow-col items-center">
          <img src={logo} alt="Logo" className="w-15 h-15" />
          <p>
            <span className="font-bold text-2xl">Bite & Bliss</span>
            <br />
            <span className="text-gray-700">Taste The Difference</span>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-2 items-center justify-center">
            <a>
              <FaFacebookSquare className="w-8 h-8" />
            </a>
            <a>
              <AiFillInstagram className="w-8 h-8" />
            </a>
            <a>
              <GrLinkedin className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
