import { foodService } from "../../../service"
import { IngredientDto, IngredientSummaryDto } from "../../dto"
import { mapIngredient, mapSearchResult } from "../../mapper/ingredients"

export const searchIngredients = async (queryText: string): Promise<IngredientSummaryDto[]> => {
    const response = await foodService.searchIngredients(queryText)
    return mapSearchResult(response.results)
}

export const getIngredient = async (ingredientId: number): Promise<IngredientDto> => {
    const response = await foodService.getIngredient(ingredientId)
    return mapIngredient(response)
}
