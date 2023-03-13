import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import Product from "./Product";
import "./ProductList.css";
import { products as productData } from "../products-data";

//look through productData array and only select only unique categories
const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // a parameter is passed through like this (category) well as a prop ({category})
  //getting the products based on argument/a parameter category
  const filterProducts = (category) => {
    if (category === "all") {
      setProducts(productData);
      //end all the processed
      return;
    } else {
      const newProducts = productData.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };

  useEffect(() => {
    // console.log(search);
    // console.log(allCategories);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);
  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span className="--color-danger">Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories categories={categories} filterItems={filterProducts} />
          </div>
        </header>
      </div>

      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <>
              <h3>No product found !!!</h3>
            </>
          ) : (
            <>
              {filteredProducts.map((product) => {
                const { id, title, price, img } = product;
                return (
                  <div key={id}>
                    <Product title={title} price={price} img={img} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
