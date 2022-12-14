// import React from 'react'
// import { useState } from 'react'
// const Modal = () => {
//     const [showModal,setShowModal]=useState(false)
//   return (
//     <div>
//       <button
//         className="flex bg-green-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-1000"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open regular modal
//       </button>
//       {showModal ? (
//         <>
//           <div
//             className="transition-timing-function: ease-in-out duration-500 max-w-md right-0 fixed  top-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto  h-[100vh] mx-auto ">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">
//                     Modal Title
//                   </h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </div>
//   )
// }

// export default Modal

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import selectedProduct from "../pages/cartcompanents/shop_data";
import data from '../pages/shoppingcart/Data'
// import { data } from "flickity";

export default function Modal() {
  const [open, setOpen] = useState(true);
  //   const[count,setCount]=useState(0)
  const [selproducts, setSelproducts] = useState(selectedProduct);
  const lookup = selproducts.reduce((a, e) => {
    a[e.id] = (a[e.id] || 0) + 1;
    return a;
  }, {});
  const [count, setCount] = useState(lookup);
  const [price, setPrice] = useState(
    selproducts.reduce((sum, object) => {
      return sum + object.price;
    }, 0)
  );

  const unique = [...new Set(selproducts)];
  function Incraese(items) {
    let oldcount = count;
    oldcount[items.id] += 1;
    setCount(oldcount);
    setPrice(price + items.price);
    console.log(items.price);
    // setSelproducts(selproducts.push(data[`${product.id}`]));
  }
  function Decrease(items) {
    let oldcount = count;
    oldcount[items.id] -= 1;
    setCount(oldcount);
    // setCount(count - 1);
    setPrice(price - items.price);
  }

  // function remvBtn(items) {
  //   setSelproducts(selproducts.filter((itemss) => itemss !== items));
  function remvBtn(items) {
    setSelproducts(selproducts.filter((itemss) => itemss !== items));

    setPrice(price - items.price * count[items.id]);
    // console.log(selproducts.filter((e) => lookup[e.id]));
    console.log(lookup[`${items.id}`]);
    // setCount(lookup[`${items.id}`]);
    console.log(lookup);
    // console.log(selproducts.length);
    // console.log(selproducts.indexOf(items));

    // console.log(arr);
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Modali ac</button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-black pl-[40%]">
                            Your cart <span className="pl-1">(2)</span>
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className=" text-gray-500 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="selected">
                          {/* {items.map(createShopCart)} */}
                          {/* {selproducts.map((items, inx) => {
              const { id, image, name, price } = items; */}
                          {data.map((items, inx) => {
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
                                      <button
                                        disabled={count[id] == 0 ? true : false}
                                        onClick={() => Decrease(items)}
                                      >
                                        {"<"}
                                      </button>
                                      {count[id]}
                                      <button onClick={() => Incraese(items)}>
                                        {">"}
                                      </button>
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
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                            <a href="/shoppingcart">go to Cart</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
