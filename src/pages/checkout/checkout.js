import React, { useState } from "react";
import data from '../shoppingcart/Data'
import selectedProduct from '../cartcompanents/shop_data';
function Checkout() {
    const [selproducts, setSelproducts] = useState(selectedProduct);
    const [count, setCount] = useState(0);
    function Incraese(product) {
      setCount(count + 1);
      setSelproducts(selproducts.push(data[`${product.id}`]));
    }
    function Decrease() {
      setCount(count - 1);
    }
  
    // function remvBtn(items) {
    //   setSelproducts(selproducts.filter((itemss) => itemss !== items));
    function remvBtn(items) {
      setSelproducts(selproducts.filter((itemss) => itemss !== items));
  
      // console.log(arr);
    }
  return (
<div className="shopcart">
        <div>
          <h1 className="h1">Shopping Cart {}</h1>
          <div className="selected">
            {/* {items.map(createShopCart)} */}
            {selproducts.map((items, inx) => {
              const { id, image, name, price } = items;

              let a = price;
              return (
                <div key={inx} className="kart">
                  {" "}
                  <div className="img">
                    {" "}
                    <img src={image} alt=".png" />
                    <div>
                      <h4>{name}</h4>
                      <div className="numItem">
                        {" "}
                        <button onClick={Decrease}>{"<"}</button>
                        {count}
                        <button onClick={Incraese}>{">"}</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>{price}</h4>{" "}
                    <button
                      className="bttn"
                      onClick={() => {
                        remvBtn(items);
                      }}
                    >
                      {"X  "}Remove
                    </button>
                  </div>
                </div>
              );
            })}
            {/* <button onClick={removeItem}>remove</button>{" "} */}
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="cupon">
            <div className="cupon1">
              {" "}
              <h4>Coupon code:</h4>
              <input type="text" placeholder="  Enter cupon code*"></input>
              <button>Apply</button>
            </div>
            <div className="btn">
              <button type="button"> Update Cart</button>
            </div>
          </div>
        </div>

        <div className="costrow">
          {" "}
          <div className="Total">
            <div className="subtotal">
              Subtotal
              <p>
                {selproducts.reduce((sum, object) => {
                  return sum + object.price;
                }, 0)}
                $
              </p>
            </div>
            <div className="tax">
              Tax
              <p>00.00$</p>
            </div>
            <div className="total">
              <h3>Total</h3>
              <p>
                {selproducts.reduce((sum, object) => {
                  return sum + object.price;
                }, 0)}
                $
              </p>
            </div>
            <p className="p">Shipping cost calculated at Checkout *</p>
          </div>
          <button>Proceed to Checkout</button>
          <div className="coun">
            {" "}
            <a href="/"> {`< `}Continue Shopping</a>
          </div>
        </div>
      </div>  )
}

export default Checkout