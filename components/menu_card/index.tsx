import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface IMenuCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: number;
  };
}

export default function MenuCard({ ...props }: IMenuCardProps) {
  const { title, image, price, rating } = props.product;

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={`Image of ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Card Content */}
      <div className="px-5 py-6">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-[#ff9900] font-semibold text-xl">${price}</p>
        </div>

        {/* Rating Section */}
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-2 items-center">
            <div className="flex" aria-label={`Rating: ${rating} out of 5`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  size={20}
                  color={rating >= i ? "#ff9900" : "gray"}
                  aria-hidden="true" // icons don't need to be read by screen readers
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{rating}</span>
          </div>

          {/* Order Button */}
          <button
            className="bg-[#ff9900] py-2 px-8 rounded-md text-white font-semibold"
            aria-label={`Order ${title}`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
