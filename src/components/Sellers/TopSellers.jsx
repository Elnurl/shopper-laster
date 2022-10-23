import React, { useEffect } from "react";
import { useState } from "react";
import "./TopSellers.css";
// import Women from "../../asset/images/famale.jpg";
import Men from "../../asset/images/male.jpg";
import Child from "../../asset/images/child.jpg";
import datat from '../../pages/shoppingcart/Data'
import Mainkid from '../../pages/cartcompanents/mainkid'
import Mainmen from '../../pages/cartcompanents/mainmen'
import Mainwomen from '../../pages/cartcompanents/mainwmen'
const TopSellers = () => {
  
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  const [data, setData] = useState([]);
  const getPorductmen = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
      // console.log(json);
      setData(json);
    })
  }; const getPorductwmen = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
      // console.log(json);
      setData(json);
    })
  }; const getPorductkid = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
      // console.log(json);
      setData(json);
    })
  };
  useEffect(() => {
    getPorductwmen();
  }, []);

  // async function datas(){
  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  return (
    <div className="py-24">
      <div className="header flex justify-center items-center">
        <p className="font-bold text-4xl">Top month Sellers</p>
      </div>
      <div className="bloc-tabs">
        <button
          className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Women
        </button>
        <button
          className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Men
        </button>
        <button
          className={toggle === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Kids
        </button>
      </div>
      <div className="container flex-wrap">
        <div
          className={toggle === 1 ? "content p-0 active-content" : "content"}
        >
          {/* <div className="items">
            {datat.map((product) => (
              <div className="item item-1 hover:bg-slate-200" id={product.id}>
               <a href="/item"> <img src={product.image} className="hover:scale-y-90 hover:scale-x-90 transition-all ease-in duration-300" alt="" /> </a>
                <span className="badgeintop">New</span>
                <div className="item-info">
                  <a href={`/item`} className="hover:bg-slate-300">{product.category}</a>
                  <b>
                  <a href="/item"> <h5 className="fw-bold hover:bg-slate-400 ">{product.title}</h5> </a>
                  </b>
                  <span className="price hover:bg-slate-300 cursor-pointer">{product.price} $</span>
                </div>
                <button id="button">Add to Cart</button>

              </div>
            ))}
          </div> */}
          <Mainwomen/>
        </div>

        <div className={toggle === 2 ? "content  active-content" : "content"}>
          {/* ------------------ */}
          {/* <div className="items">
            {data.map((product) => (
              <div className="item item-1 hover:bg-slate-200" id={product.id}>
               <a href="/item"> <img src={product.image} className="hover:scale-y-90 hover:scale-x-90 transition-all ease-in duration-300" alt="" /> </a>
                <span className="badgeintop">New</span>
                <div className="item-info">
                  <a href={`/item`} className="hover:bg-slate-300">{product.category}</a>
                  <b>
                  <a href="/item"> <h5 className="fw-bold hover:bg-slate-400 ">{product.title}</h5> </a>
                  </b>
                  <span className="price hover:bg-slate-300 cursor-pointer">{product.price} $</span>
                </div>
                <button id="button">Add to Cart</button>

              </div>
            ))}
          </div> */}
          <Mainmen/>
          {/* ------------------------------- */}
          
        </div>

        <div className={toggle === 3 ? "content  active-content" : "content"}>
          {/* ---------------------------- */}
          {/* <div className="items">
            {data.map((product) => (
              <div className="item item-1 hover:bg-slate-200" id={product.id}>
               <a href="/item"> <img src={product.image} className="hover:scale-y-90 hover:scale-x-90 transition-all ease-in duration-300" alt="" /> </a>
                <span className="badgeintop">New</span>
                <div className="item-info">
                  <a href={`/item`} className="hover:bg-slate-300">{product.category}</a>
                  <b>
                  <a href="/item"> <h5 className="fw-bold hover:bg-slate-400 ">{product.title}</h5> </a>
                  </b>
                  <span className="price hover:bg-slate-300 cursor-pointer">{product.price} $</span>
                </div>
                <button id="button">Add to Cart</button>

              </div>
            ))}
          </div> */}
          {/* -------------------------------------- */}
          <Mainkid/>
          
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
