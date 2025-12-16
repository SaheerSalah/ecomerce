import ProductSection from "@/components/ui/ProductSection";
import { Categories } from "@/constants/Categories";

export default function PopularProduct() {
  return (
    <ProductSection
      title="Popular Product"
      description="Do not miss the current offers until the end of March."
      actions={<div className="flex  gap-2">
          {Categories.map((category) => (
            <span
              key={category.id}
              className="px-3 py-1  rounded-full text-md active:text-secondary"
            >
              {category.title}
            </span>
          ))}
        </div>}
    />
  );
}
