import styles from "../../../common/styles/Headers.module.scss";

function ProductsFilters(props) {
  const { foodFilter } = props;

  return (
    <div className={styles.Wrapper}>
      <label htmlFor="name">FILTERS: Search by name:</label>
      <input onChange={foodFilter} type="text" id="name" name="filterName" />
      Filter by category:
      <select name="category">
        <option>Wszystkie</option>
        <option>nabiał</option>
        <option>warzywa</option>
        <option>nasiona</option>
        <option>narzędzia</option>
        <option>inne</option>
        <option>owoce</option>
      </select>
      Food only:
      <input type="checkbox" name="isFoodProduct" />
      <button>Reset filters</button>
    </div>
  );
}

export default ProductsFilters;
