import React from "react";
import productsData from "@/core/mocks/products.json";
import ProductCard from "./ProductCard";
function ProductsContainer() {
  const products = productsData;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductsContainer;
