export function getMealsInfo(cart, meals) {
  if(cart.length > 0 && meals.length > 0) {
    const cartItems = cart.map((item) => {
      const meal = meals.find((meal) => meal.id === item.id);
      return {...meal, qty: item.qty};
    })

    return cartItems;
  }
  return [];
}

export function getTotalPrice(cartItems) {
  if(cartItems.length > 0) {
    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + (item.price * item.qty)
    }, 0);
  
    return totalPrice;
  }
  
  return 0;
}

export function getTotalUnits(cartItems) {
  if(cartItems.length > 0) {
    const totalUnits = cartItems.reduce((sum, item) => {
      return sum + (item.qty)
    }, 0);

    console.log(totalUnits, cartItems);
    return totalUnits;
  }

  return 0;
}