import Hero from "./hero";
import ProductHero from "./ProductHero";
import ShoppingMotivation from "./ShoppingMotivation";
import PopularProduct from "./PopularProducts";
import LatestProducts from "./LatestProducts"
export default function HomeSections() {
  return (
    <>
      <Hero />
      <PopularProduct />
      <ProductHero/>
      <LatestProducts />
      {/* <ShoppingMotivation /> */}
    </>
  );
}
