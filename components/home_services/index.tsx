import { MdOutlineMenuBook } from "react-icons/md";
import { PiCalendar } from "react-icons/pi";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function HomeServices() {
  return (
    <section className="bg-[#FFF7EA]">
      <div className="flex flex-col lg:flex-row justify-center gap-14 py-20 items-center">
        {/* Text Section */}
        <div className="max-w-[400px] text-center sm:text-left">
          <p>
            <span className="border-t border-b border-black text-[15px]">
              WHAT WE OFFER
            </span>
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold my-8">
            Our Great Services
          </h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>

        {/* Icon Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-white">
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center rounded-lg shadow-md">
            <MdOutlineMenuBook fontSize={60} color="#f5bb64" />
            <p className="mt-4">Special Menus</p>
          </div>
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center rounded-lg shadow-md">
            <PiCalendar fontSize={60} color="#f5bb64" />
            <p className="mt-4">Opened 24/7</p>
          </div>
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center rounded-lg shadow-md">
            <MdOutlineDeliveryDining fontSize={60} color="#f5bb64" />
            <p className="mt-4">Home Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
