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

        <form className="mt-8 space-y-6" aria-labelledby="contact-form">
          {/* Name and Email */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative w-full">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
                required
              />
            </div>
            <div className="relative w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
                required
              />
            </div>
          </div>

          {/* Subject and Phone */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative w-full">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
                required
              />
            </div>
            <div className="relative w-full">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="p-4 outline-none placeholder-gray-600 caret-black border-2 text-black bg-transparent rounded-lg w-full"
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ff9900] hover:bg-[#ff8800] transition-all py-3 px-8 rounded-md font-semibold text-lg text-black mx-auto block"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
