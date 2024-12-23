import Image from "next/image";
import reviewer_1 from "../../public/images/reviewer_1.png";
import reviewer_2 from "../../public/images/reviewer_2.png";
import reviewer_3 from "../../public/images/reviewer_3.png";

export default function HomeOpinion() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900]">TESTIMONIAL</span>
      </h4>
      <h2 className="text-center mt-3 text-3xl sm:text-5xl font-bold">
        What our clients say
      </h2>
      <p className="max-w-[700px] mx-auto text-center mt-3 text-gray-600">
        We love to hear from customers, so please leave a comment or say hello
        in an email.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {/* Testimonial 1 */}
        <div className="p-10 bg-gray-800 rounded-lg">
          <div className="flex items-center pb-5 gap-5 border-b border-gray-600">
            <Image
              src={reviewer_1}
              alt="Reviewer Daniyal Sppra from New York"
              width={62}
              height={63}
            />
            <div>
              <h5 className="text-white">Daniyal Sppra</h5>
              <p className="text-[#ff9900] text-sm">New York</p>
            </div>
          </div>
          <p className="text-white py-5">
            &quot;It is professional, considers everyone&apos;s time, can think
            about the many variations of small problems, niche, friendly and
            efficient service.&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="p-10 bg-gray-800 rounded-lg">
          <div className="flex items-center pb-5 gap-5 border-b border-gray-600">
            <Image
              src={reviewer_2}
              alt="Reviewer Natasha D from Salt Lake City"
              width={62}
              height={63}
            />
            <div>
              <h5 className="text-white">Natasha D</h5>
              <p className="text-[#ff9900] text-sm">Salt Lake City</p>
            </div>
          </div>
          <p className="text-white py-5">
            &quot;It is professional, considers everyone&apos;s time, can think
            about the many variations of small problems, niche, friendly and
            efficient service.&quot;
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="p-10 bg-gray-800 rounded-lg">
          <div className="flex items-center pb-5 gap-5 border-b border-gray-600">
            <Image
              src={reviewer_3}
              alt="Reviewer Jack Sparrow from San Diego"
              width={62}
              height={63}
            />
            <div>
              <h5 className="text-white">Jack Sparrow</h5>
              <p className="text-[#ff9900] text-sm">San Diego</p>
            </div>
          </div>
          <p className="text-white py-5">
            &quot;It is professional, considers everyone&apos;s time, can think
            about the many variations of small problems, niche, friendly and
            efficient service.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
