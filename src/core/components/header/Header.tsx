import { Filters } from "./Filters";
export function Header({changeFilters}: {changeFilters: Function}) {
  return (
    <header>
      <div></div>
      <Filters onChange={changeFilters}></Filters>
    </header>
  );
}
