import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import product from "../Products/Product";
import shoppingcart from "../../pages/shoppingcart/shoppingcart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../Header/Header.css";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  // FaLinkedin,
} from "react-icons/fa";
import selectedProduct from "../../pages/cartcompanents/shop_data";

const Head = () => {
  const [nav, setNav] = useState(true);
  // const [show,setShow]=useState(false);
  // const handleShow=()=> setShow(true)
  // const handleClose=()=> setShow(false)
  // const [len, Setlen] = useState(0);
  // function length() {
  //   return Setlen(selectedProduct.length);
  // }
  // length();
  return (
    <div className="header">
      {/* <Modal show={show} onHide={handleClose} className="-mt-[400%] block absolute mt-2 ml-[75%] "  >
        <div className="modal">
          <div className="">Your Cart(2)
          <Button onClick={handleClose}>
            <FaTimes/>
          </Button>
          </div>
        </div>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className="bg-" onClick={handleClose}>
           <a href="/checkout"> Continue to Ckeckout</a>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            View Cart
          </Button>
        </Modal.Footer>
      </Modal> */}
      <div className=" flex justify-between pt-6 pb-6">
        <div className="logo">
          <a href="/home" className="text-3xl text-black">
            Shopper
          </a>
        </div>

        <button
          className="hidden closes absolute "
          onClick={() => setNav(!nav)}
        >
          {!nav ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`navLinks ${
            !nav
              ? "block" && "transition-all ease-in duration-1000 opacity-1000"
              : "hidden"
          }`}
        >
          <a href="/home">
            <li className="text-black">Home</li>
          </a>
          <a href="/category">
            <li className="text-black">Catalog</li>
          </a>
          <a href="/product">
            <li className="text-black">Shops </li>
          </a>
          <a href="/about">
            <li className="text-black">About</li>
          </a>
          <a href="contact">
            <li className="text-black">Contact</li>
          </a>
          <a href="/faq">
            <li className="text-black">FAQ</li>
          </a>
        </ul>
        <div> </div>
        <div className={`icons h-9 flex ${!nav ? "block" : "hidden"} `}>
          <FaSearch className=" text-gray-700 rounded border-spacing-4" />

          <a href="/login">
            {" "}
            <FaUser className="text-gray-700" path="/login" />
          </a>
          <a href="/register">
            <FaHeart className="text-gray-700" path="/register" />{" "}
          </a>
          <Link to="/shoppingcart">
            {" "}
            <FaShoppingCart
              className="text-gray-700"
              style={{ stroke: "black", strokeWidth: "1", background: "#fff" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Head;
