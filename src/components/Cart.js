import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price) * curr.qty,0))
  },[cart])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <b
        style={{
          fontSize: 30,
          alignSelf: "center",
        }}
      >
        Cart
      </b>
      <b
        style={{
          alignSelf: "center",
        }}
      >
        Subtotal: ${total}
      </b>
      {cart.map((prod) => (
        <div
          key={prod.title}
          style={{
            display: "flex",
            padding: 10,
            border: "1px solid grey",
            margin: 5,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <img
              src={prod.image}
              alt={prod.title}
              style={{
                width: 70,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <p>{prod.title}</p>
              <p>${prod.price}</p>
            </div>
          </div>
          <div>
            <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
            <span>{prod.qty}</span>
            <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
