import { getPopular } from "@/services";
import MenuCard from "../menu_card";

export default async function MenuFull() {
  const popular = await getPopular();

  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      <h4 className="tracking-widest text-center">
        <span className="border-t border-b border-[#ff9900] mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
          MENU
        </span>
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {popular.map((product) => (
          <MenuCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
