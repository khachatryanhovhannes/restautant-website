import Image from "next/image";
import blog_1 from "../../public/images/blog_1.png";
import blog_2 from "../../public/images/blog_2.png";

export default function HomeBlog() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900]">BLOG</span>
      </h4>
      <h2 className="text-center mt-3 text-3xl sm:text-5xl font-bold">
        Be First Who Read News
      </h2>
      <p className="max-w-[700px] mx-auto text-center mt-3 text-gray-600">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content making.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-7">
        {/* Blog 1 */}
        <div>
          <Image
            src={blog_1}
            alt="Blog 1"
            objectFit="contain"
            className="w-full"
          />
          <div className="px-8 py-10 border-b border-r border-l shadow-md mt-5">
            <div className="flex gap-5">
              <span className="border-t border-b border-[#ff9900]">
                RESTAURANTS
              </span>
              <span className="border-t border-b border-[#ff9900]">
                FEB 22, 2022
              </span>
            </div>
            <h4 className="text-lg font-semibold my-5">
              The Most Popular Delicious Food Of Mediterranean Cuisine
            </h4>
            <p className="text-gray-500">
              Capitalize on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>

        {/* Blog 2 */}
        <div>
          <Image
            src={blog_2}
            alt="Blog 2"
            objectFit="contain"
            className="w-full"
          />
          <div className="px-8 py-10 border-b border-r border-l shadow-md mt-5">
            <div className="flex gap-5">
              <span className="border-t border-b border-[#ff9900]">
                RESTAURANTS
              </span>
              <span className="border-t border-b border-[#ff9900]">
                FEB 22, 2022
              </span>
            </div>
            <h4 className="text-lg font-semibold my-5">
              The Most Popular Delicious Food Of Mediterranean Cuisine
            </h4>
            <p className="text-gray-500">
              Capitalize on low-hanging fruit to identify a ballpark value added
              matrix economically and the creative activity to beta test
              override the food quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
