//helper function for always fixing the decimal to 2
function addDecimals(price: number) {
  return ((price * 100) / 100).toFixed(2);
}

export default function updateCard(state: any) {
  //Calculate item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (sumOf: number, item: any) => sumOf + item.price * item.quantity,
      0
    )
  );
  //Calculate shippingPrice
  //if the itemsPrice is greater than 100, then 10
  state.shippingPrice = state.itemsPrice < 100 ? 0 : 10;

  //Calcuate taxPrice
  state.taxPrice = addDecimals(0.15 * state.itemsPrice);

  //Calcuate totalPrice
  state.totalPrice = addDecimals(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );

  localStorage.setItem('cart', JSON.stringify(state));
}
