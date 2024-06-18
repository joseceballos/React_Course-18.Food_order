import logo from "../../assets/images/logo.jpg";
import { useCartFacade } from "../stores/useCartFacade";

export default function Header({handleOpenCart}) {
  const { cart } = useCartFacade();

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="hamburguer icon" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button className="text-button" onClick={handleOpenCart} disabled={ cart.length > 0 ? false : true}>Cart({cart && cart.length})</button>
      </nav>
    </header>
  );
}
