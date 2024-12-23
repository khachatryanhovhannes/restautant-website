import { MdOutlineMenuBook } from "react-icons/md";
import { PiCalendar } from "react-icons/pi";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function HomeServices() {
  return (
    <section className="bg-[#FFF7EA]">
      <div className="flex justify-center gap-14 py-20 items-center" >
        <div className="max-w-[400px]">
          <p>
            <span className="border-t border-b border-black text-[15px]">
              WHAT WE OFFER
            </span>
          </p>
          <h3 className="text-4xl font-semibold my-8">Our Great Services</h3>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        <div className="flex text-white gap-10">
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center">
            <MdOutlineMenuBook fontSize={60} color="#f5bb64" />
            <p>Special Menus</p>
          </div>
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center">
            <PiCalendar fontSize={60} color="#f5bb64" />
            <p>Opened 24/7</p>
          </div>
          <div className="text-center bg-gray-800 p-5 flex flex-col items-center">
            <MdOutlineDeliveryDining  fontSize={60} color="#f5bb64" />
            <p>Home Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
