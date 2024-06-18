import Header from "./components/header/Header";
import Container from "./components/containers/Container";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart.jsx";
import { useState } from "react";
import Modal from "./components/containers/Modal.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import { postOrder } from "./assets/js/utils/http.js";
import { useCartFacade } from "./components/stores/useCartFacade.js";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState("cart");
  const [errorPostingOrder, setErrorPostingOrder] = useState("");

  const { cartWithDetails: cart, resetCart } = useCartFacade();

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenCheckout() {
    setModalState("checkout");
  }

  function handleCloseCheckout() {
    setModalState(() => {
      setOpenModal(false);
      return "cart";
    });
  }

  async function handleSubmitOrder(customer) {
    console.log("...submitting", customer);
    handleCloseCheckout();

    try {
      await postOrder({
        items: cart,
        customer: customer
      });
      resetCart();
    } catch(error) {
      setErrorPostingOrder({
        message: error.message || "Failed to post order."
      });
    }
  }

  let modalContent;
  if(modalState === "cart" && cart.length > 0){
    modalContent = <Cart onCloseCart={handleCloseModal} onOpenCheckout ={handleOpenCheckout} />;
  } else if(modalState === "checkout"){
    modalContent = <Checkout onCloseCheckout={handleCloseCheckout} onSubmitOrder={handleSubmitOrder} />
  }

  return (
    <>
      <Modal open={openModal}>
        { modalContent }
      </Modal>

      <Header handleOpenCart={handleOpenModal} />
      <Container>
        <Meals />
      </Container>
    </>
  );
}

export default App;
