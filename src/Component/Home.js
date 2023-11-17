import React  from "react";
import mobile from "../Assest/mobile.png";
import heart from "../Assest/heart.png";
import fillheart from "../Assest/fillheart.png";
import { data } from "./Data";
import apple from "../Assest/apple.png";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { showMore, showLess } from "../Store/VisibilitySlice";
import { Handlefavourite } from "../Store/FavouriteSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const searchSelector = useSelector((state) => state.product.searchResults);
  const favProduct = useSelector(
    (state) => state.favouriteItem.favouriteProduct
  );
  const selector = useSelector((state) => state.visibility.visibleCount);
  const dispatch = useDispatch();
  console.log(favProduct);

  const addToFavourite = (item) => {
    dispatch(Handlefavourite(item));
  };

  const searchItem = data.filter((item) => item.title.includes(searchSelector));

  const handleShowLess = () => {
    if (selector >= data.length) { 
      dispatch(showLess(6));
    } else {
      dispatch(showMore(4));
    }
  };

  const buttonText =
    selector >= data.length ? "Hide Product" : "View All Product";

  return (
    <div>
      <div className="container m-auto mt-5 bg-black">
        <div className="grid grid-cols-3 gap-7">
          <div className="flex items-center ms-8 ">
            <div>
              <div className="grid-rows-2 flex ms-8">
                <div>
                  <img src={apple} alt="iPhone" className="image" />
                </div>
                <div>
                  <p className="text-white pt-3 ps-5">iPhone 14 series</p>
                </div>
              </div>
              <div className="text-white text-6xl pt-3 ms-8">
                <h1 className="">Up to 10%</h1>
                <h1>off Voucher</h1>
              </div>
              <div className="pt-5 ms-8 flex">
                <h1 className="text-white border-b-2 border-zinc-600 w-1/4">
                  Shop now
                </h1>
                <FontAwesomeIcon
                  className="text-white pt-2 ps-3"
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <img src={mobile} alt="Mobile" />
          </div>
        </div>
      </div>
      <div className="container m-auto mt-5">
        <div className="row flex flex-wrap">
          {searchSelector
            ? searchItem.map((item, index) => (
                <div className="item" key={index}>
                  <div className="  h-64 w-70 bg-stone-200 ">
                    <div>
                      <div className="flex items-end justify-end  py-1 mx-3 mt-3   text-2xl">
                        <img
                          onClick={() => addToFavourite(item)}
                          alt="#"
                          className="rounded-full py-1 height"
                          src={favProduct.includes(item) ? fillheart : heart}
                        />
                      </div>
                    </div>
                    <div className="items-center flex justify-center">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <h1 className="pt-2">{item.title}</h1>
                  <div className="flex pt-1">
                    <p className="text-red-700">${item.newPrice}</p>
                    <h1 className="ps-2 line-through">${item.oldPrice}</h1>
                  </div>
                </div>
              ))
            : data.slice(0, selector).map((item, index) => (
                <div className="item mt-8" key={index}>
                  <div className="border  h-64 w-70 bg-stone-200 mt-8">
                    <div className="flex justify-between">
                      <div>
                        {item.discountInPercentage > 0 ? (
                          <p className="bg-red-600 text-white px-2 mt-3 ms-2 rounded ">
                            {item.discountInPercentage}%
                          </p>
                        ) : null}
                      </div>
                      <div className="mx-3 mt-2 text-2xl border  rounded-full px-1 bg-white border-white">
                        <img

                          onClick={() => addToFavourite(item)}
                          className="height"
                          alt="#"
                          src={favProduct.includes(item) ? fillheart : heart}
                        />
                      </div>
                    </div>
                    <div className="items-center flex justify-center">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <h1 className="pt-2">{item.title}</h1>
                  <div className="flex pt-1">
                    <p className="text-red-700">${item.newPrice}</p>
                    <h1 className="ps-2 line-through text-slate-400">
                      ${item.oldPrice}
                    </h1>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex justify-center items-center bg-red-600  py-3 text-white w-60 mt-3 mb-4 m-auto">
          <button onClick={handleShowLess}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
