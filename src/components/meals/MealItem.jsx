export default function MealItem({
  id,
  name,
  price,
  description,
  image,
  onAddToCart,
}) {

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="name" />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}
