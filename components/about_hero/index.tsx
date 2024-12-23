import Image from "next/image";
import aboutHero from "../../public/images/about_hero.png";

export default function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-5 py-24">
      <div className="">
        <h4 className="tracking-widest ">
          <span className="border-t border-b border-[#ff9900]">ABOUT US</span>
        </h4>
        <h2 className=" mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
          Quality and Tradition
        </h2>
        <p className="max-w-[700px] mx-auto mt-3 text-gray-600 text-sm sm:text-base">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content gfshere
          making look like readable English. Many desktop publishing packages.
        </p>
        <button className="bg-[#ff9900] py-4 my-10 px-12 rounded-md font-semibold text-xl">
          See More
        </button>
      </div>
      <div className="mt-5 md:mt-0">
        <Image src={aboutHero} alt="Image" width={308} height={314} />
      </div>
    </section>
  );
}
