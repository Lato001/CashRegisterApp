import { useState } from "react";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };
  return (
    <section className="filters flex  justify-between m-9">
      <div className="flex gap-4 ">
        <label htmlFor="category">Min Price</label>
        <input
          className="mt-1"
          type="range"
          id="price"
          min="0"
          max="10000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value="lunch">Lunch</option>
          <option value="bakery">Bakery</option>
          <option value="dessert">Dessert</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
    </section>
  );
}
