export default function HomeReservation() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/home_reserve_back.jpg')",
      }}
      className=" bg-cover bg-center"
    >
      <div className="w-full px-5 md:px-16 ld:px-32 py-10 xl:px-64  text-white">
        <div
          style={{ background: "rgb(0, 0, 0, 0.4)" }}
          className="py-10 px-2 lg:py-32 lg:px-16"
        >
          <h4 className="tracking-widest text-center">
            <span className="border-t border-b border-[#ff9900]">
              RESERVATION
            </span>
          </h4>
          <h2 className="text-center mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Book your table now
          </h2>
          <form>
            <div className="flex flex-col md:flex-row  justify-center gap-10 py-5">
              <input
                type="text"
                placeholder="Name"
                className="p-4 outline-none placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-4 outline-none placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 py-5">
              <input
                type="text"
                placeholder="Person"
                className="p-4 outline-none placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Timing"
                className="p-4 outline-none placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Date"
                className="p-4 outline-none placeholder-gray-600 caret-black text-black rounded-lg w-full"
              />
            </div>
            <div className="text-center my-5">
              <button className="bg-[#ff9900] py-4 px-12 rounded-md font-semibold text-xl text-black">
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
