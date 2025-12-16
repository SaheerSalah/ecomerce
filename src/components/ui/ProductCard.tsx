import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
interface ProductCardProps {
  imageSrc: string;
  title: string;
  priceAfterDiscount: number;
  price: number;
  rating: number;
}
export default function ProductCard({
  imageSrc,
  title,
  priceAfterDiscount,
  price,
  rating,
}: ProductCardProps) {
  return (
    <article className="bg-white border border-gray-300 rounded-lg ">
      <div className="relative w-full h-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="px-2 mb-2">
        <h2 className="truncate"> {title}</h2>
        <div className="flex gap-2">
          <div className="">
            <Star className="" />
          </div>
          {rating}
        </div>
        <div className="flex justify-between">
          <p className="  line-through">${price}</p>
          <p className=" text-secondary">${priceAfterDiscount}</p>
        </div>
      </div>
      <div>
        <button className="gap-2 mb-5 flex items-center mx-auto justify-center rounded-md border border-secondary text-secondary px-5 py-1 text-lg w-[90%] ">
          <ShoppingCart />
          Add to cart{" "}
        </button>
      </div>
    </article>
  );
}
