import ProductSection from "@/components/ui/ProductSection";
import { MoveRight } from "lucide-react";

export default function LatestProducts() {
  return (
    <ProductSection
      title="Latest Products"
      description="Do not miss the current offers until the end of March."
      actions={
        <button className="flex gap-1">
          View All
          <MoveRight />
        </button>
      }
    />
  );
}
