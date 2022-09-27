export interface SearchIngredientItem {
    id: number;
    name: string;
}

export interface SearchIngredientsResult {
    results: SearchIngredientItem[]
}

export interface Nutrient {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

export interface Nutrition {
    nutrients: Nutrient[];
    weightPerServing: Serving;
    caloricBreakdown: CaloricBreakdown;
}

export interface Serving {
    amount: number;
    unit: string;
}

export interface CaloricBreakdown {
    percentProtein: number;
    percentFat: number;
    percentCarbs: number;
}

export interface Ingredient {
    id: number;
    name: string;
    image: string;
    nutrition: Nutrition;
}
