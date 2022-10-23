// function CreateCart(items) {
//   // const [cart, setCart] = useState([]);
//   return (
//     <Cart
//       key={items.id}
//       id={items.id}
//       name={items.name}
//       price={items.price}
//       image={items.image}
//     />
//   );
// }
// export default function main(props) {
//   // const { name, id, mail } = props;
//   return (
//     <div>
//       {data.map(CreateCart)}
//       {/* <div>
//         <Cart />
//       </div> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import "./mainmen.css";
import men from "../../data/men";
// import Shoppingcart from "./cartcompanents/shoppingcart";
// import "./main.css";
// import Shoppingcart from "./cartcompanents/shoppingcart";
import selectedProduct from "./shop_data";

function Cart(product) {
  const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(["products"]);
  const [products] = useState(men);
  // const state = useState(data);
  function addBtn(product) {
    selectedProduct.push(men[`${product.id}`]);
    console.log(selectedProduct);
    // console.log(cart);
    setCart([...cart, product]);
  }
  // function removeBtn() {
  //   selectedProduct = selectedProduct.filter(function (value, index, arr) {
  //     return data[0].id !== props.id;
  //   });
  //   // setArr(selectedProduct);
  // }
  // const renderProducts = () => {};
  return (
    <div className="cart">
      <header>
        <button>Go to Crt({selectedProduct.length})</button>
      </header>{" "}
      {/* {page === "products" && renderProducts()} */}
      {products.map((product, indx) => {
        const { name, image, price, title } = product;
        return (
          <div className="cart_element" key={indx}>
            <div className="imgmen">
              <i class="fa-regular fa-heart"></i> <img src={image} alt=".png" />{" "}
            </div>
            <div>
              {" "}
              <p>{title}</p>
            </div>
            <div className="menbtn">
              {" "}
              <button className="crtbtnm" onClick={() => addBtn(product)}>
                Add to Cart
              </button>
              <div className="price">
                {" "}
                <h6>${price}</h6>

                <h5>$10</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
