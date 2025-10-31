import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import ProductCard from "./components/product/ProductCard";
import productsData from "./mocks/products.json";

function App() {
  const products = productsData;

  return (
    <>
      <div>
        <div className="flex justify-around bg-zinc-800  text-white p-10">
          <div className="flex items-center">
            <Avatar className="size-14">
              <AvatarImage src="https://github.com/Lato001.png"></AvatarImage>
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
          <ul className="flex justify-center gap-6 py-5">
            <li>
              <Button className="bg-white text-zinc-800 text-2xl px-20 py-5">
                <a href="">Home</a>
              </Button>
            </li>
            <li>
              <Button className="bg-white text-zinc-800 text-2xl px-20 py-5">
                <a href="">Products</a>
              </Button>
            </li>
            <li>
              <Button className="bg-white text-zinc-800 text-2xl px-20 py-5">
                <a href="">Cash</a>
              </Button>
            </li>
            <li>
              <Button className="bg-white text-zinc-800 text-2xl px-20 py-5">
                <a href="">History</a>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-around ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
