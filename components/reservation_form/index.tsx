import Image from "next/image";
import reservationImage from "../../public/images/reservation.png";

export default function ReservationForm() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      {/* Heading Section */}
      <h4 className="text-center tracking-widest text-sm sm:text-base md:text-lg">
        <span className="border-t border-b border-[#ff9900]">RESERVATION</span>
      </h4>
      <h2 className="text-center mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Book The Seat Now Here Easily
      </h2>
      <div className="my-7 flex flex-col md:flex-row gap-5 lg:gap-20">
        <Image
          src={reservationImage}
          alt="A person booking a reservation on a phone"
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
            place for good friends & family to come together and have a great
            time.
          </p>
          <form aria-labelledby="reservation-form">
            <div className="flex flex-col md:flex-row justify-center gap-10 py-5">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 py-5">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
              <label htmlFor="date" className="sr-only">
                Date
              </label>
              <input
                type="date"
                id="date"
                placeholder="Date"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 py-5">
              <label htmlFor="time" className="sr-only">
                Time
              </label>
              <input
                type="time"
                id="time"
                placeholder="Time"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
              <label htmlFor="person" className="sr-only">
                Number of People
              </label>
              <input
                type="number"
                id="person"
                placeholder="Person"
                className="p-4 outline-none border-2 placeholder-gray-600 caret-black text-black rounded-lg w-full"
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="bg-[#ff9900] py-4 px-12 rounded-md font-semibold text-xl text-black"
              aria-label="Book a table"
            >
              Book a Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
