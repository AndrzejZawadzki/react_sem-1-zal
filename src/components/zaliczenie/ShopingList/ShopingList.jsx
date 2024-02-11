import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ShopingList(props) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {props.listaZakupow.map((pojedynczyProdukt) => (
            <li
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

export default ShopingList;
