import {
  hasMinLength,
  isEmail,
  isNotEmpty,
} from "../../assets/js/utils/validation";
import Input from "../UI/Input";
import { useInput } from "../hooks/useInput";
import { useCartFacade } from "../stores/useCartFacade";

export default function Checkout({ onCloseCheckout, onSubmitOrder }) {
  const { totalPrice } = useCartFacade();

  const {
    value: fullNameValue,
    handleInputChange: fullNameInputChange,
    handleInputBlur: fullNameInputBlur,
    hasError: fullNameHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  const {
    value: emailValue,
    handleInputChange: emailInputChange,
    handleInputBlur: emailInputBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: streetValue,
    handleInputChange: streetInputChange,
    handleInputBlur: streetInputBlur,
    hasError: streetHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  const {
    value: postalCodeValue,
    handleInputChange: postalCodeInputChange,
    handleInputBlur: postalCodeInputBlur,
    hasError: postalCodeHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 5));

  const {
    value: cityValue,
    handleInputChange: cityInputChange,
    handleInputBlur: cityInputBlur,
    hasError: cityHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 4));

  const orderInfo = {
    name: fullNameValue,
    email: emailValue,
    street: streetValue,
    'postal-code': postalCodeValue,
    city: cityValue,
  };

  return (
    <div id="checkout">
      <h2>Checkout</h2>
      <p id="totalPrice">{`Total Amount $${totalPrice}`}</p>
      <form>
        <Input
          label="Full Name"
          id="fullName"
          type="text"
          name="fullName"
          onChange={fullNameInputChange}
          onBlur={fullNameInputBlur}
          value={fullNameValue}
          error={fullNameHasError && "Please enter a valid name"}
        />
        <Input
          label="E-Mail Address"
          id="email"
          type="email"
          name="email"
          onChange={emailInputChange}
          onBlur={emailInputBlur}
          value={emailValue}
          error={emailHasError && "Please enter a valid e-mail"}
        />
        <Input
          label="Street"
          id="street"
          type="text"
          name="street"
          onChange={streetInputChange}
          onBlur={streetInputBlur}
          value={streetValue}
          error={streetHasError && "Please enter a valid street"}
        />

        <div className="control-row">
          <Input
            label="Postal Code"
            id="postalCode"
            type="number"
            name="postalCode"
            onChange={postalCodeInputChange}
            onBlur={postalCodeInputBlur}
            value={postalCodeValue}
            error={postalCodeHasError && "Please enter a valid postal code"}
          />
          <Input
            label="City"
            id="city"
            type="text"
            name="city"
            onChange={cityInputChange}
            onBlur={cityInputBlur}
            value={cityValue}
            error={cityHasError && "Please enter a valid city"}
          />
        </div>
      </form>
      <p className="modal-actions">
        <button className="text-button" onClick={onCloseCheckout}>
          Close
        </button>
        <button className="button" onClick={() => onSubmitOrder(orderInfo)}>
          Submit Order
        </button>
      </p>
    </div>
  );
}
