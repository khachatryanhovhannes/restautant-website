import hero from "../../public/images/hero.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { LuClock10 } from "react-icons/lu";
import Link from "next/link";

function HomeWelcome() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FFF7EA] flex flex-col md:flex-row justify-center items-center p-5">
        <div className="text-center md:text-left">
          <h1 className="text-[32px] md:text-[64px] leading-none font-bold">
            Welcome to <br />
            <span className="text-[#ff9900]">RestoNest</span>
          </h1>
          <p className="max-w-[500px] mt-5 text-[16px] md:text-[20px] mx-auto md:mx-0">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy.
          </p>
          <Link href="/menu">
            <button
              className="text-white bg-black px-10 py-3 rounded-lg mt-8"
              aria-label="View Menu"
            >
              View Menu
            </button>
          </Link>
        </div>
        <div className="mt-5 md:mt-0">
          <Image
            src={hero}
            alt="An image of the restaurant interior showcasing the welcoming atmosphere"
            width={561}
            height={653}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="p-5 sm:p-7 md:px-20 flex flex-col md:flex-row justify-between md:items-center mt-10 space-y-8 md:space-y-0">
        <div className="flex gap-2 items-center">
          <div
            className="bg-[#ff9900] rounded-full w-12 h-12 flex justify-center items-center text-[20px] md:text-[25px]"
            aria-hidden="true"
          >
            <IoLocationOutline color="white" />
          </div>
          <div>
            <span className="font-bold">Locate Us</span> <br />
            <span className="text-sm md:text-base">
              Riverside 25, San Francisco, California
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className="bg-[#ff9900] rounded-full w-12 h-12 flex justify-center items-center text-[20px] md:text-[25px]"
            aria-hidden="true"
          >
            <LuClock10 color="white" />
          </div>
          <div>
            <span className="font-bold">Open Hours</span> <br />
            <span className="text-sm md:text-base">
              Mon To Fri 9:00 AM - 9:00 PM
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className="bg-[#ff9900] rounded-full w-12 h-12 flex justify-center items-center text-[20px] md:text-[25px]"
            aria-hidden="true"
          >
            <GoChecklist color="white" />
          </div>
          <div>
            <span className="font-bold">Reservation</span>
            <br />
            <span className="text-sm md:text-base">
              hirestaurantate@gmail.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeWelcome;
