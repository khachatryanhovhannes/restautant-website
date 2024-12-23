import Image from "next/image";
import theStoryImage from "../../public/images/the_story.png";
export default function HomeTheStroy() {
  return (
    <section className="p-5 sm:p-7 md:px-20 flex flex-col justify-center items-center md:items-stretch md:flex-row md:justify-between gap-5 mt-10">
      <div className="flex items-center">
        <Image src={theStoryImage} alt="The Story" width={524} height={324} />
      </div>
      <div className="border-b-2 w-full md:w-0 md:border-l-2 border-black"></div>
      <div className="max-w-[680px] flex flex-col justify-center">
        <h2 className="text-4xl font-semibold">The Story</h2>
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content
          gfshere&apos;, makinlook like readable English. Many desktop
          publishing packages.
        </p>
        <div className="flex gap-2 mt-4">
          <div className="max-w-48">
            <h3 className="text-3xl font-semibold ">1996</h3>
            <p>Lorem Ipsum is that it has a more-or-less normal distribution</p>
          </div>
          <div className="max-w-48">
            <h3 className="text-3xl font-semibold">2021</h3>
            <p>
              Lorem Ipsum is that it has a more-or-less normal Content content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
