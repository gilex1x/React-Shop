import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Product = (props) => {
  const { product } = useSelector((state) => state);
  return (
    <>
      <h2>{product.nombre}</h2>
      <span>Imagen</span>
      <span>Descripcion</span>
    </>
  );
};

export default Product;
