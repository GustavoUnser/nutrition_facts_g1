import { CaloricBreakdown, Ingredient, Nutrient, SearchIngredientItem } from "../../../service/food/interface"
import { CaloricBreakdownDto, IngredientDto, IngredientSummaryDto, NutrientDto } from "../../dto"

const mapImageUrl = (image: string) => {
    return `https://spoonacular.com/cdn/ingredients_500x500/${image}`
}

const mapNutrient = (nutrient: Nutrient): NutrientDto => {
    return {
        name: nutrient.name,
        amount: `${nutrient.amount} ${nutrient.unit}`,
        percentOfDailyNeeds: `(${nutrient.percentOfDailyNeeds}%)`,
    }
}

const mapCaloricBreakdown = (calories: CaloricBreakdown): CaloricBreakdownDto => {
    return {
        percentCarbs: `${calories.percentCarbs}%`,
        percentFat: `${calories.percentFat}%`,
        percentProtein: `${calories.percentProtein}%`,
    }
}

export const mapIngredient = (ingredient: Ingredient): IngredientDto => {
    const nutrients = ingredient.nutrition.nutrients.map(nutrient => mapNutrient(nutrient))

    return {
        id: ingredient.id,
        name: ingredient.name,
        image: mapImageUrl(ingredient.image),
        portion: `${ingredient.nutrition.weightPerServing.amount}${ingredient.nutrition.weightPerServing.unit}`,
        caloricBreakdown: mapCaloricBreakdown(ingredient.nutrition.caloricBreakdown),
        nutrients,
    }
}

export const mapSearchResult = (result: SearchIngredientItem[]): IngredientSummaryDto[] => { 
    return result.map(item => ({
        id: item.id,
        name: item.name,
    }))
}
