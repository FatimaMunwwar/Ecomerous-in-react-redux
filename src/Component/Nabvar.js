import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { search } from "../Store/ProductSlice";
import heart from "../Assest/heart.png";
import cart from "../Assest/cart.png";
import "./product.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/Home";
  const isProduct = location.pathname === "/product";

  const dispatched = useDispatch();
  const selector = useSelector((state) => state.product.products);
  const searchSelector = useSelector((state) => state.product.searchResults);

  const favouriteSelect = useSelector(
    (state) => state.favouriteItem.favouriteProduct
  );

  const handleSearch = (items) => {
    dispatched(search(items));
  };

  return (
    <div>
      <nav className="bg-white  border">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Exclusive
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="relative hidden md:flex">
              <input
                type="text"
                id="search-navbar"
                className="block w-64 bg-stone-100  py-2  text-sm rounded-lg focus-ring-blue-500 focus-border-blue-500 dark-bg-gray-700 dark-border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500 px-5"
                placeholder="What are you looking for?"
                value={searchSelector}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>

            <div className="mx-4 flex items-center justify-center relative">
              <span className="absolute right top-0 bg-red-600 text-white rounded-full px-1 font-text">
                {favouriteSelect.length}
              </span>

              <img src={heart} alt="Heart" />

              <Link to="/cart" className="flex">
                <div className="relative">
                  <img src={cart} alt="Cart" />
                  <span className="absolute bottom-5 text-white bg-red-600 rounded-full px-1 font-text right-0">
                    {selector.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus-ring-blue-500 focus-border-blue-500 dark-bg-gray-700 dark-border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500"
                placeholder="what are you looking for?"
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 font-medium rounded-lg md:flex-row md-space-x-8 md-mt-0 md-border-0 md-bg-white dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
              <li>
                <Link
                  to="/Home"
                  className={`block py-2 pl-3 pr-4 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 ${
                    isHome ? "border-b-2 border-slate-200" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className={`block py-2 pl-3 pr-4 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 ${
                    isProduct ? "border-b-2 border-slate-200" : ""
                  }`}
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl mx-auto p-4"></div>
    </div>
  );
};

export default Navbar;
