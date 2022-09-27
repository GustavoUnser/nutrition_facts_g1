import { useCallback, useEffect, useState } from "react"
import { IngredientDto } from "../../../../domain/dto"
import { foodRepository } from "../../../../domain/repository"

const useDetails = (foodId: number) => {
    const [loading, setLoading] = useState(false)
    const [ingredients, setIngredients] = useState<IngredientDto>()

    const loadDetails = useCallback(async () => {
        setLoading(true)
        const result = await foodRepository.getIngredient(foodId)
        setIngredients(result)
        setLoading(false)
    }, [foodId])

    useEffect(() => {
        loadDetails()
    }, [])

    return {
        loading,
        ingredients,
    }
    
}

export default useDetails
