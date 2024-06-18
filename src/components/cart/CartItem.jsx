import { useState } from "react";

export default function CartItem({ cartItem, onAddQty, onRemoveQty }) {

  function changeQty(change) {
    if(change>0)
      onAddQty(cartItem.id);
    else
      onRemoveQty(cartItem.id)
  }

  return (
    <li key={cartItem.id} className="cart-item">
      <p>{cartItem.name} - {cartItem.price} x {cartItem.qty}</p>
      <p className="cart-item-actions">
        <button onClick={() => changeQty(-1)}>-</button>
        <span>{cartItem.qty}</span>
        <button onClick={() => changeQty(1)}>+</button>
      </p>
    </li>
  );
}
