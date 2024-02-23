import produkty from "../../../common/consts/produkty";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ShoppingList(props) {
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shopping List</p>
        <ul>
          {props.listaZakupow.map((pojedynczyProdukt, index) => (
            <li
              key={index}
              onContextMenu={(e) => {
                e.preventDefault();
                props.removeProductFromShoppingList(e, index);
              }}
            >
              {pojedynczyProdukt.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShoppingList;
