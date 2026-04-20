import { useState, useId} from "react";

export function Filters({onChange}: {onChange: Function}) {


  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    onChange(prevState => ({...prevState, 
      minPrice: Number(e.target.value)}));
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(prevState => ({...prevState, 
        category: e.target.value}));
  };




  return (
    <section className="filters flex  justify-between m-9">
      <div className="flex gap-4 ">
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <input
          className='mt-1'
          type='range'
          id={minPriceFilterId}
          min='0'
          max='10000'
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor={categoryFilterId}>Category</label>
        
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='Panadería'>Panadería</option>
          <option value='Platos principales'>Platos principales</option>
          <option value='Pastelería'>Pastelería</option>
          <option value='Comidas'>Comidas</option>
        </select>
      </div>
    </section>
  );
}
