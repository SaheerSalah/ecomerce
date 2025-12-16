import Container from "./Container";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  description: string;
  actions?: React.ReactNode[] | React.ReactNode;
}
export default function ProductSection({
  title,
  description,
  actions
}: ProductSectionProps) {
  return (
    <Container className="">
      <section className="">
        <div className="flex justify-between">
          <div className="mb-5">
            <h1 className="text-gray-800 font-bold text-xl">{title}</h1>
            <p className="text-gray-600 ">{description}</p>
          </div>
          <div>{actions}</div>
        </div>

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
    </Container>
  );
}
