import { fetchMeals } from "../../assets/js/utils/http.js";
import { createWithEqualityFn } from "zustand/traditional";

const initialValues = {
  meals: [],
  isFetchingMeals: false,
  errorFetchingMeals: "",
};

export const useMealsStore = createWithEqualityFn((set) => ({
  meals: initialValues.meals,
  isFetchingMeals: initialValues.isFetchingMeals,
  errorFetchingMeals: initialValues.errorFetchingMeals,

  fetchMeals: async () => {
    (prevState) => ({ ...prevState, isFetchingMeals: true });
    try {
      const meals = await fetchMeals();
      set((prevState) => ({
        ...prevState,
        meals: meals,
        errorFetchingMeals: "",
      }));
    } catch (error) {
      set((prevState) => ({ ...prevState, errorFetchingMeals: error.message }));
    } finally {
      set((prevState) => ({ ...prevState, isFetchingMeals: false }));
    }
  },
}));