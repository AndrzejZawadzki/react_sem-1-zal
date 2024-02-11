import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import produkty from "./common/consts/produkty";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);
  console.log(shoppingList);
  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList
          listaProduktow={products}
          addProductToShoppingList={(productToAdd) =>
            setShoppingList((prev) => prev.concat(productToAdd))
          }
        />
        <ShopingList listaZakupow={shoppingList} />
      </div>
    </div>
  );
}

export default App;
