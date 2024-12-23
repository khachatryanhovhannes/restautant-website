import Link from "next/link";
import { LuSoup, LuChefHat, LuVegan } from "react-icons/lu";
import { RiDrinks2Fill } from "react-icons/ri";

const PRODUCTS = [
  {
    id: 0,
    icon: <LuSoup />,
    title: "Fresh Product",
    description: "Professional consider everyone probls small niche friendly.",
  },
  {
    id: 1,
    icon: <LuChefHat />,
    title: "Skilled Chefs",
    description: "Professional consider everyone probls small niche friendly.",
  },
  {
    id: 2,
    icon: <RiDrinks2Fill />,
    title: "Drinks & Juices",
    description: "Professional consider everyone probls small niche friendly.",
  },
  {
    id: 3,
    icon: <LuVegan />,
    title: "Vegan Cuisine",
    description: "Professional consider everyone probls small niche friendly.",
  },
];

export default function AboutProducts() {
  return (
    <section className="p-5 sm:p-7 md:px-20 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 bg-[#FFF7EA] items-center text-center p-5"
            role="article"
            aria-labelledby={`product-title-${product.id}`}
          >
            <div
              className="text-6xl sm:text-8xl text-[#f5bb64]"
              aria-hidden="true"
            >
              {product.icon}
            </div>
            <h3
              id={`product-title-${product.id}`}
              className="text-xl sm:text-2xl font-semibold"
            >
              {product.title}
            </h3>
            <p className="text-sm sm:text-base">{product.description}</p>
            <div className="text-[#f5bb64] mt-2">
              <Link href="/" aria-label={`Learn more about ${product.title}`}>
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
