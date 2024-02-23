import produkty from "../../../common/consts/produkty";
import styles from "../../../common/styles/Headers.module.scss";
import ProductsList from "../ProductsList/ProductsList";

function ProductsFilters(props) {
  const { listaProduktow, foodFilter } = props;
  const kategorie = Array.from(
    new Set(produkty.map((pojedynczyProdukt) => pojedynczyProdukt.kategoria))
  );

  return (
    <form onChange={foodFilter} className={styles.Wrapper}>
      <label htmlFor="name">FILTERS: Search by name:</label>
      <input type="text" id="name" name="filterName" />
      Filter by category:
      <select name="category">
        <option></option>
        {kategorie.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      Food only:
      <input type="checkbox" name="isFoodProduct" />
      <button>Reset filters</button>
    </form>
  );
}

export default ProductsFilters;
