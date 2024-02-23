import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ProductsList(props) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {props.listaProduktow.map((pojedynczyProdukt) => (
            <li
              key={pojedynczyProdukt.nazwa}
              onClick={() => props.addProductToShoppingList(pojedynczyProdukt)}
            >
              {pojedynczyProdukt.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ProductsList;
