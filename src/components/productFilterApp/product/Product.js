import React from "react";
// import { products } from "./../products-data";
// import productImg from "./../images/7.png";
import "./Product.css";

const Product = ({ title, img, price }) => {
  return (
    <div className="product --card">
      <img src={img} alt="Product " />
      <div className="--bg-primary --center-all --p">
        <h3 className="--text-light">{title}</h3>
        <div className="--flex-between --width-100">
          <p className="--text-light"> ${price} </p>
          <button className="--btn --btn-danger">To Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
