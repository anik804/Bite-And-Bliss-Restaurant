import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import logo from "../../assets/Logo/logo.png";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const modalTexts = {
    terms: {
      title: "Terms of Use",
      body: `Welcome to Bite & Bliss! By using our website and services, you agree to the following terms:
- All menu prices and offers are subject to change without notice.
- Reservations are subject to availability and confirmation.
- We strive to provide accurate information, but cannot guarantee absolute accuracy.
- You agree not to misuse our site or interfere with its operation.
- Bite & Bliss reserves the right to refuse service or cancel orders as necessary.`,
    },
    privacy: {
      title: "Privacy Policy",
      body: `At Bite & Bliss, your privacy is very important to us. We collect personal information only to improve your dining experience, process reservations, and communicate with you.
- We do not sell or share your personal data with third parties without consent.
- Your data is securely stored and handled with care.
- Cookies may be used to enhance site functionality and personalize content.
- You may contact us anytime to review or delete your data.`,
    },
    cookie: {
      title: "Cookie Policy",
      body: `Bite & Bliss uses cookies to ensure you have the best possible experience on our website.
- Cookies help us remember your preferences and login information.
- We use cookies to analyze website traffic and improve our services.
- You can choose to disable cookies in your browser settings, but some site features may not function properly.`,
    },
    about: {
      title: "About Us",
      body: `Bite & Bliss is your go-to destination for delightful culinary experiences. Founded in 2025, we specialize in delivering delicious meals crafted from fresh, local ingredients. Our passion is to bring you flavors that feel like home with a modern twist. Join us and Taste The Difference!`,
    },
    contact: {
      title: "Contact Us",
      body: `We'd love to hear from you! For reservations, feedback, or any inquiries:
- Phone : +8801310763509
- Email : chakrabortyanik234@gmail.com
- Address : 123 Foodie Lane, Chittagong, Bangladesh
Our team is here to assist you from 10 AM to 10 PM every day.`,
    },
    jobs: {
      title: "Jobs",
      body: `Join the Bite & Bliss family! We're always looking for passionate, talented individuals to join our team.
Current openings:
- Chef
- Kitchen Staff
- Waitstaff
- Delivery Driver
To apply, please send your resume to careers@biteandbliss.com.`,
    },
    press: {
      title: "Press Kit",
      body: `For media inquiries, downloadable assets, and press releases related to Bite & Bliss, please contact our PR team at press@biteandbliss.com. We are happy to provide high-resolution logos, photos, and company information for your publication.`,
    },
    menu: {
      title: "Menu",
      body: `Explore our diverse menu featuring fresh, locally sourced ingredients:
- Starters : Soups, Salads, Appetizers
- Main Courses : Grilled specialties, Pasta, Vegetarian options
- Desserts : Cakes, Ice creams, Seasonal fruits
We update our menu regularly to keep your dining experience exciting!`,
    },
    offers: {
      title: "Special Offers",
      body: `Check out our current special offers and discounts:
- Weekday Lunch Specials with complimentary drinks
- Seasonal combo deals for families and groups
- Loyalty program rewards for our regular customers
Stay tuned for exclusive online coupons and flash sales!`,
    },
    catering: {
      title: "Catering Services",
      body: `Make your events delicious with Bite & Bliss catering!
- Customized menus tailored to your event and preferences
- Full-service catering with professional staff
- Perfect for weddings, corporate events, parties, and more
Contact us to get a catering quote and consultation.`,
    },
    reservations: {
      title: "Reservations",
      body: `Reserve your table quickly and easily:
- Online reservation available 24/7
- Call us at +880 1310 763509 to book directly
- Special arrangements for large groups and celebrations
We recommend booking in advance to ensure availability.`,
    },
  };

  const openModal = (type) => {
    setModalContent(modalTexts[type]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="text-white relative">
      {/* Main footer */}
      <footer className="footer text-white sm:footer-horizontal bg-black p-6">
        <nav>
          <h6 className="footer-title">Dining Services</h6>
          <button
            onClick={() => openModal("menu")}
            className="link link-hover btn-ghost p-0"
          >
            Menu
          </button>
          <button
            onClick={() => openModal("offers")}
            className="link link-hover btn-ghost p-0"
          >
            Special Offers
          </button>
          <button
            onClick={() => openModal("catering")}
            className="link link-hover btn-ghost p-0"
          >
            Catering
          </button>
          <button
            onClick={() => openModal("reservations")}
            className="link link-hover btn-ghost p-0"
          >
            Reservations
          </button>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <button
            onClick={() => openModal("about")}
            className="link link-hover btn-ghost p-0"
          >
            About us
          </button>
          <button
            onClick={() => openModal("contact")}
            className="link link-hover btn-ghost p-0"
          >
            Contact
          </button>
          <button
            onClick={() => openModal("jobs")}
            className="link link-hover btn-ghost p-0"
          >
            Jobs
          </button>
          <button
            onClick={() => openModal("press")}
            className="link link-hover btn-ghost p-0"
          >
            Press kit
          </button>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <button
            onClick={() => openModal("terms")}
            className="link link-hover btn-ghost p-0"
          >
            Terms of use
          </button>
          <button
            onClick={() => openModal("privacy")}
            className="link link-hover btn-ghost p-0"
          >
            Privacy policy
          </button>
          <button
            onClick={() => openModal("cookie")}
            className="link link-hover btn-ghost p-0"
          >
            Cookie policy
          </button>
        </nav>
      </footer>

      {/* Bottom footer */}
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
            <a
              href="https://www.facebook.com/share/1LLmiEeYXT/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/anik_804/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/anik-chakraborty-101962262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </footer>

      {/* Modal */}
      {modalContent && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeModal}
          ></div>

          <div className="fixed z-50 top-1/2 left-1/2 max-w-lg w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              {modalContent.title}
            </h2>
            <p className="whitespace-pre-wrap text-gray-800 mb-6">{modalContent.body}</p>
            <button
              onClick={closeModal}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
