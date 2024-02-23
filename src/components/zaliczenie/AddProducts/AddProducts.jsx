import styles from "../../../common/styles/Headers.module.scss";
import { useState } from "react";

const AddProducts = (props) => {
  const [productFields, setProductFields] = useState({
    productName: "",
    productCategory: "",
    isFood: false,
  });
  const submit = (e) => {
    e.preventDefault();
    props.addProduct(productFields);
    setProductFields({
      productName: "",
      productCategory: "",
      isFood: false,
    });
  };
  const changeProduct = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setProductFields({
      ...productFields,
      [name]: inputValue,
    });
  };

  return (
    <form className={styles.Wrapper} onSubmit={submit}>
      <label htmlFor="productName">Name:</label>
      <input
        type="text"
        name="productName"
        id="productName"
        value={productFields.productName}
        onChange={changeProduct}
        required
      />
      <label htmlFor="productCategory">Category: </label>
      <input
        type="text"
        name="productCategory"
        id="productCategory"
        value={productFields.productCategory}
        onChange={changeProduct}
        required
      />
      <label htmlFor="isFood">Food</label>
      <input
        type="checkbox"
        name="isFood"
        id="isFood"
        checked={productFields.isFood}
        onChange={changeProduct}
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProducts;
