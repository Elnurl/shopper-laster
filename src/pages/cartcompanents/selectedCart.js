import React from "react";
import "./selectedCart.css";
import { useState } from "react";
import selectedProduct from "./shop_data";
function removeItem(selPro, setSelPro) {
  return () => {
    const selDat = selectedProduct.splice(1, 1);
    console.log(selDat);
    setSelPro(selDat);
  };
}
function SelectedCart(props) {
  const [selPro, setSelPro] = useState(selectedProduct);
  return (
    <div>
      <div className="cart_element">
        <div className="cartInfo">
          <div className="img">
            <img src={props.image} alt=".png" />
          </div>{" "}
          <div className="cartmain">
            <h4>{props.name}</h4>
            <div>
              <h5>{props.price}</h5>
              <button
                onClick={() => {
                  selectedProduct.splice(0, 1);
                  console.log(selectedProduct);
                  setSelPro(selectedProduct);
                  console.log(selPro);
                  // selPro = props;
                }}
              >
                {`x  `}remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedCart;
