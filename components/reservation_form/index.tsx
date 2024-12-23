import Image from "next/image";
import reservationImage from "../../public/images/reservation.png";

export default function ReservationForm() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      {/* Heading Section */}
      <h4 className=" text-center tracking-widest text-sm sm:text-base md:text-lg">
        <span className="border-t border-b border-[#ff9900]">RESERVATION</span>
      </h4>
      <h2 className=" text-center mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Book The Seat Now Here Easily
      </h2>
      <div className="my-7 flex flex-col md:flex-row gap-5 lg:gap-20">
        <Image
          src={reservationImage}
          alt="Reservation Form"
          width={503}
          height={590}
          className="object-cover rounded-lg w-full md:w-[45%]"
        />
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Book your table now
          </h3>
          <p className="py-4 text-sm sm:text-base">
            The people, food and the prime locations make Rodich the perfect
            place good friends & family to come together and have great time.
          </p>
          <form>
            <div className="flex flex-col md:flex-row  justify-center gap-10 py-5">
              <input
                type="text"
                placeholder="Name"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row  justify-center gap-10 py-5">
              <input
                type="text"
                placeholder="Phone"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Date"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row  justify-center gap-10 py-5">
              <input
                type="text"
                placeholder="Time"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Person"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
            </div>
            <button className="bg-[#ff9900] py-4 px-12 rounded-md font-semibold text-xl text-black">
              Book a Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
