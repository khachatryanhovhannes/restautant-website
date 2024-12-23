import { getPopular } from "@/services";
import MenuCard from "../menu_card";

export default async function HomeMenu() {
  const popular = await getPopular(3);

  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      {/* Heading Section */}
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900]">MENU</span>
      </h4>
      <h2 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
        Popular Dishes
      </h2>
      <p className="max-w-[700px] mx-auto text-center mt-3 text-gray-600 text-sm sm:text-base">
        Discover our selection of popular dishes, carefully curated to satisfy
        all tastes.
      </p>

      {/* Menu Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {popular.map((product) => (
          <MenuCard product={product} key={product.id} />
        ))}
      </div>

      {/* See All Dishes Button */}
      <div className="text-center mt-10">
        <button className="bg-[#ff9900] py-4 px-12 rounded-md font-semibold text-xl">
          See all dishes
        </button>
      </div>
    </section>
  );
}
