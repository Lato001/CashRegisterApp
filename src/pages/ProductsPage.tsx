import { Header } from "@/core/components/header/Header";
import Navbar from "@/core/components/navbar/Navbar";
import ProductsContainer from "@/core/components/product/ProductsContainer";
function ProductsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ProductsContainer></ProductsContainer>
    </div>
  );
}

export default ProductsPage;
