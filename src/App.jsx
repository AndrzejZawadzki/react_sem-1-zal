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
  const [maxCurrentId, setMaxCurrentId] = useState(
    products[products.length - 1].id + 1
  );
  const handleFoodFilter = (e) => {
    const nameFilter = e.currentTarget.elements.filterName.value.toLowerCase();
    const category = e.currentTarget.elements.category.value;
    const isFoodProduct = e.currentTarget.elements.isFoodProduct.checked;
    console.log("nameFilter: ", nameFilter);
    console.log("category", category);
    const result = products.filter((prod) => {
      if (isFoodProduct) {
        return category
          ? prod.kategoria === category &&
              prod.nazwa.toLowerCase().startsWith(nameFilter)
          : prod.nazwa.toLowerCase().startsWith(nameFilter) &&
              prod.produktSpozywczy;
      }
      return category
        ? prod.kategoria === category && prod.nazwa.startsWith(nameFilter)
        : prod.nazwa.startsWith(nameFilter);
    });
    console.log("lista prod", products);
    console.log("result", result);

    setProductListToDisplay(result);
  };
  const addProduct = (e) => {
    const productName = e?.currentTarget?.productName?.value;
    const categoryName = e?.currentTarget?.productCategory?.value;
    const isFood = e?.currentTarget?.isFood?.checked;
    const productId = maxCurrentId;
    setMaxCurrentId((prevId) => prevId + 1);
    if (productName && categoryName !== undefined && isFood !== undefined) {
      const newProduct = {
        id: productId,
        nazwa: productName,
        kategoria: categoryName,
        produktSpozywczy: isFood,
      };

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setProductListToDisplay((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts addProduct={addProduct} />
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
