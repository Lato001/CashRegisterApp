import ProductCard from "../core/components/product/ProductCard";
import productsData from "../core/mocks/products.json";
import Navbar from "../core/components/navbar/Navbar";

function HomePage() {
  const products = productsData;
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
