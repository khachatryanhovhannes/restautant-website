export default function ContactForm() {
  return (
    <section className="p-4 sm:p-6 md:px-16 lg:px-32 xl:px-64 mt-10">
      {/* Heading Section */}
      <div className="w-full bg-[#FFF7EA] rounded-lg shadow-lg py-6 px-4 sm:px-8 lg:py-8 lg:px-12 xl:px-20 text-black">
        <h4 className="tracking-widest text-center text-sm sm:text-base md:text-lg">
          <span className="border-t border-b border-[#ff9900]">CONTACT US</span>
        </h4>
        <h2 className="text-center mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Send Valuable Feedback To Us
        </h2>

        <form className="mt-8 space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
            />
          </div>

          {/* Subject and Phone */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Subject"
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ff9900] hover:bg-[#ff8800] transition-all py-3 px-8 rounded-md font-semibold text-lg text-black mx-auto block"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
