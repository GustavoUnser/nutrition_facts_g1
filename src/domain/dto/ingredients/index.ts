export interface IngredientSummaryDto {
    id: number;
    name: string;
}

export interface NutrientDto {
    name: string;
    amount: string;
    percentOfDailyNeeds: string;
}

export interface CaloricBreakdownDto {
    percentProtein: string;
    percentFat: string;
    percentCarbs: string;
}

export interface IngredientDto {
    id: number;
    name: string;
    image: string;
    portion: string;
    nutrients: NutrientDto[];
    caloricBreakdown: CaloricBreakdownDto;
}
