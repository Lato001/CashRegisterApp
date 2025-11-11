import products from "@/core/mocks/products.json";
import { Header } from "@/core/components/header/Header";
import Navbar from "@/core/components/navbar/Navbar";

import ProductsContainer from "@/core/components/product/ProductsContainer";
function ProductsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ProductsContainer products={products}></ProductsContainer>
    </div>
  );
}

export default ProductsPage;
