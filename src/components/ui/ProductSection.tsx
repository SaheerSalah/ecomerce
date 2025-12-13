import { title } from "process";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  description: string;
}
export default function ProductSection({
  title,
  description,
}: ProductSectionProps) {
  return (
    <section className="bg-gray-200 py-10 ">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            imageSrc="/images/dress.jpg"
            title="mandarin collar printed anarkali kurta"
            priceAfterDiscount={899}
            price={899}
            rating={10}
          />
        ))}
      </div>
    </section>
  );
}
