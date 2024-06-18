import MealItem from "./MealItem";
import { useMealsFacade } from "../stores/useMealsFacade";
import { useEffect } from "react";
import { useCartFacade } from "../stores/useCartFacade";

export default function Meals({}) {
  const { addCartItem }= useCartFacade();
  const { meals, fetchMeals} = useMealsFacade();

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((mealItem) => {
        return (
          <MealItem
            key={mealItem.id}
            onAddToCart={addCartItem}
            {...mealItem}
          />
        );
      })}
    </ul>
  );
}
