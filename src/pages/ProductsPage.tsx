import React from "react";
import Navbar from "@/core/components/navbar/Navbar";
import ProductsContainer from "@/core/components/product/ProductsContainer";
function ProductsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductsContainer></ProductsContainer>
    </div>
  );
}

export default ProductsPage;
