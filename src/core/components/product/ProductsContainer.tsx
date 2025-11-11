import type { Product } from "@/core/types/product";
import ProductCard from "./ProductCard";
type ProductsContainerProps = {
  products: Product[];
};
//import ProductCard from "./ProductCard";
//import { useState } from "react";
export default function ProductsContainer({
  products,
}: ProductsContainerProps) {
  const productsData = products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
      {productsData.map((p) => (
        <ProductCard key={p.id} product={p}></ProductCard>
      ))}
    </div>
  );
  /*const [products] = useState(initialProducts);
    const [filters, setFilters] = useState({
      category: "all",
      minPrice: 0,
    });

    const filterProducts = products.filter((product) => {
      return (
        product.price > filters.minPrice &&
        (filters.category == "all" || product.category == filters.category)
      );
    });

    const filteredProducts = (
      <div >
        {filterProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    );
  */
}
