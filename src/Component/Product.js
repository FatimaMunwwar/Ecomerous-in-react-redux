import React from "react";
import { data } from "./Data";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart, addAllItem } from "../Store/ProductSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const dispatch = useDispatch();

  const add = (item) => {
    dispatch(addToCart(item));
  };

  const addAllToCart = () => {
    const allItems = data.map((value) => {
      return dispatch(addAllItem(value));
    });
  };

  return (
    <div>
      <div className="container m-auto mt-5">
        <div className="flex justify-between items-center mb-7">
          <div>
            <h1>Total Products (10)</h1>
          </div>
          <div className="">
            <button className="border px-7 py-3" onClick={addAllToCart}>
              Move All To Cart
            </button>
          </div>
        </div>
        <div className="row flex flex-wrap">
          {data.map((item, index) => (
            <div className="item mt-7" key={index}>
              <div className="border rounded h-64 w-70 bg-stone-200">
                <div className="flex justify-between">
                  <div className="flex me-3 mt-1  px-3">
                    {item.discountInPercentage > 0 ? (
                      <p className="bg-red-600 px-2 pt-1 rounded mt-2 text-white">
                        {item.discountInPercentage} %
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="items-center flex justify-center mt-3">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              <div className="flex border rounded bg-black py-2 items-center justify-center">
                <FontAwesomeIcon
                  className="ms-3 ps-3 pr-3 text-white"
                  icon={faShoppingCart}
                />
                <button onClick={() => add(item)} className="text-white ">
                  Add to cart
                </button>
              </div>

              <h1 className="pt-2">{item.title}</h1>
              <div className="flex pt-1">
                <p className="text-red-700">${item.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
