import logo from "../../assets/images/logo.jpg";
import Button from "../UI/Button";
import { useCartFacade } from "../stores/useCartFacade";

export default function Header({handleOpenCart}) {
  const { totalUnits } = useCartFacade();

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="hamburguer icon" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart} disabled={ totalUnits > 0 ? false : true}>Cart({totalUnits})</Button>
      </nav>
    </header>
  );
}
