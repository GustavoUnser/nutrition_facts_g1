import foodApi from "../../commons/api";
import { GET_INGREDIENT_INFORMATION, GET_SEARCH_INGREDIENTS } from "../../config/api";
import { Ingredient, SearchIngredientsResult } from "./interface";

export const searchIngredients = async (queryText: string): Promise<SearchIngredientsResult> => {
    const url = GET_SEARCH_INGREDIENTS(queryText)
    const response = await foodApi.get<SearchIngredientsResult>(url)
    return response.data
}

export const getIngredient = async (ingredientId: number): Promise<Ingredient> => {
    const url = GET_INGREDIENT_INFORMATION(ingredientId)
    const response = await foodApi.get<Ingredient>(url)
    return response.data
}
