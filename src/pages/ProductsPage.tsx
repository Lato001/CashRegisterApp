import initialProducts from "@/core/mocks/products.json";
import { Header } from "@/core/components/header/Header";
import Navbar from "@/core/components/navbar/Navbar";
import { useState } from "react";
import ProductsContainer from "@/core/components/product/ProductsContainer";


function useFilters(){
  
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  });


  const filterProducts = (products: typeof initialProducts) => {
    return products.filter((product) => {
      return(
        product.price >= filters.minPrice &&
        (filters.category === "all" ||
           product.category === filters.category)
      )
    }
      )};


  return {filterProducts, setFilters}
}

function ProductsPage() {

  const [products] = useState(initialProducts);
  const {filterProducts, setFilters} = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <div>
      <Navbar></Navbar>
      <Header changeFilters = {setFilters}></Header>
      <ProductsContainer products={filteredProducts}></ProductsContainer>
    </div>
  );
}

export default ProductsPage;
