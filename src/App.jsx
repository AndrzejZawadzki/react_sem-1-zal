import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShoppingList from "./components/zaliczenie/ShoppingList/ShoppingList";
import produkty from "./common/consts/produkty";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);
  const [productListToDisplay, setProductListToDisplay] = useState(products);

  const handleFoodFilter = (e) => {
    const nameFilter = e.currentTarget.value;
    /* const categoryFilter = e.currentTarget.elements.category.value;
    const isFoodProduct = e.currentTarget.elements.isFoodProduct.checked; */
    console.log("nameFilter: ", nameFilter);
    const result = products.filter((prod) => {
      return prod.nazwa.startsWith(nameFilter);
    });
    console.log("lista prod", products);
    setProductListToDisplay(result);
    console.log("result", result);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters foodFilter={handleFoodFilter} />
      <div className={styles.columnsWrapper}>
        <ProductsList
          listaProduktow={productListToDisplay}
          addProductToShoppingList={(productToAdd) =>
            setShoppingList((prev) => prev.concat(productToAdd))
          }
        />
        <ShoppingList
          listaZakupow={shoppingList}
          removeProductFromShoppingList={(productIndexToRemove) => {
            shoppingList.splice(productIndexToRemove, 1);
            setShoppingList([...shoppingList]);
          }}
        />
      </div>
    </div>
  );
}

export default App;
