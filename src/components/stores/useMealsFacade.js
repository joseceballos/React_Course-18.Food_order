import { shallow } from "zustand/shallow";
import { useMealsStore } from "./mealsStore";

export function useMealsFacade() {
  const { meals, isFetchingMeals, errorFetchingMeals, fetchMeals } =
    useMealsStore(
      (state) => ({
        meals: state.meals,
        isFetchingMeals: state.isFetchingMeals,
        errorFetchingMeals: state.errorFetchingMeals,
        fetchMeals: state.fetchMeals,
      }),
      shallow
    );

  return { meals, isFetchingMeals, errorFetchingMeals, fetchMeals };
}
