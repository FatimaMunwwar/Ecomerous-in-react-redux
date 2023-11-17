import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, clear } from "../Store/ProductSlice";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [hovered, setHovered] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products);
  const [quantity, setquantity] = useState(items.map(() => 1));

  const handleHover = (item) => {
    setHovered(item);
  };
  const leaveMouse = () => {
    setHovered(null);
  };

  if (!items || items.length === 0) {
    return (
      <h1 className="font-bold text-5xl text-slate-400 flex item-center justify-center ">
        no products left
      </h1>
    );
  }

  const deleteItem = (item) => {
    dispatch(remove(item.title));
  };

  const removeAll = () => {
    dispatch(clear());
  };
  const genernatePDF = () => {
    const doc = new jsPDF();

    doc.text(10, 10, "Receipt");

    doc.text(10, 30, `Subtotal: ${valueCart}`);

    doc.text(10, 40, "Shipping: free");
    doc.text(10, 50, `Cart Total: ${valueCart}`);

    doc.save("receipt.pdf");
  };

  const allSubTotal = () => {
    const totalCart = items.reduce((acc, item, index) => {
      const subtotal = item.newPrice * quantity[index];
      return acc + subtotal;
    }, 0);

    return totalCart;
  };

  const valueCart = allSubTotal();

  return (
    <div className="container m-auto">
      <div className="flex ps-2 pb-7 pt-7">
        <Link to="/Home">
          <h1>Home</h1>
        </Link>
        <p className="ps-1">/</p>
        <h1 className="ps-2">Cart</h1>
      </div>
      <div className="  mt-5 ">
        <table className="w-full text-sm text-left   ">
          <thead className="text-xs  uppercase    ">
            <div className=" border shadow-md">
              <tr className=" flex justify-between width my-3 py-2">
                <th scope="col" className="px-6">
                  Product
                </th>
                <th scope="col" className="px-7 padding-left  ">
                  Price
                </th>
                <th scope="col" className="px-6 ">
                  Quantity
                </th>
                <th scope="col" className="px-6 ">
                  Subtotal
                </th>
              </tr>
            </div>
          </thead>

          <tbody className="">
            {items.map((item, index) => (
              <div className="border  shadow-md mb-4 mt-3 ">
                <tr
                  key={index}
                  className="bg-white width-one flex justify-between "
                >
                  <td
                    className="  relative flex items-center font-size "
                    onMouseEnter={() => handleHover(item)}
                    onMouseLeave={leaveMouse}
                  >
                    <img
                      src={item.image}
                      alt="Product Image"
                      height={50}
                      width={50}
                    />

                    {hovered === item && (
                      <button
                        className="cross-icon"
                        onClick={() => deleteItem(item)}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          className="rounded-full border bg-red-600 px-1 py-1 text-white"
                        />
                      </button>
                    )}
                    <h1 className="text-2xl ps-4"> {item.title}</h1>
                  </td>

                  <td className=" py-4 font-semibold text-gray-900  ">
                    ${item.newPrice}
                  </td>
                  <td className=" py-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="w-14 border border-gray-300 text-sm block px-2.5 py-1"
                          placeholder="1"
                          value={quantity[index]}
                          required
                          onChange={(e) => {
                            const newquantity = [...quantity];
                            newquantity[index] = parseInt(e.target.value);
                            setquantity(newquantity);
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {item.newPrice * quantity[index]}
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-3 ">
        <Link to="/product">
          <button className="border px-3 py-3">Return to product</button>
        </Link>
        <button onClick={removeAll} className="border px-4">
          Remove All
        </button>
      </div>
      <div className="border mt-5 h-64 w-96 flex items-center ps-5 mb-6 border-black ">
        <div>
          <div>
            <div>
              <h1 className="pt-5">Cart Total</h1>
              <div className="flex border-b-2 pb-2 pt-4 justify-between">
                <h1>Sub Total</h1>
                <h1>$ {valueCart}</h1>
              </div>
              <div className="flex border-b-2 pb-2 justify-between pt-2">
                <p>Shipping</p>
                <p className="padding  ps-5"> Free</p>
              </div>
              <div className="flex justify-between pt-1">
                <p>Total:</p>
                <p>$ {valueCart}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 text-white ">
            <button
              className="border px-3 py-3   bg-red-600"
              onClick={genernatePDF}
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
