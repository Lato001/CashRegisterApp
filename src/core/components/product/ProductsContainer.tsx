import initialProducts from "@/core/mocks/products.json";
import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductsContainer() {
  const [products] = useState(initialProducts);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
      {filterProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );

  return filteredProducts;
}

export default ProductsContainer;
