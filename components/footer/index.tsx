import Image from "next/image";
import logo from "../../public/images/logo-restonest.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 sm:p-7 md:px-20 bg-black">
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
        <div className="w-[30%] hidden lg:block"></div>
        <div className="w-[150px] max-w-[30%] justify-between">
          <Image
            src={logo}
            alt="RestoNest Logo - A restaurant specializing in high-quality food"
            height={314.35}
            width={327}
          />
        </div>
        <div className="flex gap-5 text-3xl w-[30%] justify-center lg:justify-end">
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram color="white" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook color="white" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter color="white" />
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest">
            <FaPinterest color="white" />
          </a>
        </div>
      </div>
      <div className="text-white flex lg:flex-row flex-col gap-5 items-center justify-between my-7">
        <div className="lg:w-[30%]">
          <span className="border-t border-b border-[#ff9900] tracking-widest p-[2px]">
            <Link href="/contact" aria-label="Contact us page">
              CONTACT
            </Link>
          </span>
        </div>
        <div className="text-center">
          Join our mailing list for updates, <br /> Get news & offers events.
        </div>
        <div className="lg:w-[30%] lg:text-right">
          <span className="border-t border-b border-[#ff9900] tracking-widest p-[2px]">
            <Link href="/working-hours" aria-label="Working hours page">
              WORKING HOURS
            </Link>
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:flex-row flex-col items-center">
        <address className="text-white">
          <p>5 Rue Dalou, 75015 Paris</p>
          <p>
            <span className="text-[#ff9900]">Call</span> - +33 156 78 89 56
          </p>
          <p>
            <span className="text-[#ff9900]">restonest@mail.com</span>
          </p>
        </address>
        <div className="flex w-[70%] sm:[30%] md:25 lg:w-[35%]">
          <input
            type="email"
            placeholder="Email"
            className="border-4 border-[#ff9900] outline-none bg-transparent w-full text-white placeholder-white caret-white p-2 rounded-tl-lg rounded-bl-lg"
            aria-required="true"
            aria-placeholder="Email"
          />
          <button
            className="bg-[#ff9900] py-2 rounded-tr-lg rounded-br-lg min-w-[35%]"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </div>
        <div className="text-center lg:text-right text-white">
          <p>
            <span className="text-[#ff9900]">Mon - Fri: </span>7:00am - 10:00pm
          </p>
          <p>
            <span className="text-[#ff9900]">Sat: </span>7:00am - 6:00pm
          </p>
          <p>
            <span className="text-[#ff9900]">Sun: </span>8:00am - 6:00pm
          </p>
        </div>
      </div>
      <div className="text-white text-center mt-4">
        © Copyright - <span className="text-[#ff9900]">RestoNest</span> 2024 |
        Designed by <span className="text-[#ff9900]">Sushmitha Shettigar</span>
      </div>
    </footer>
  );
}
