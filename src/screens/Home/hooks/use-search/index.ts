import { useCallback, useEffect, useState } from "react"
import { IngredientSummaryDto } from "../../../../domain/dto"
import { foodRepository } from "../../../../domain/repository"
import { UseSearchResult } from "./interface"

const useSearch = () => { 
    const [query, setQuery] = useState('')
    const [apiResult, setResult] = useState<IngredientSummaryDto[]>()
    const [loading, setLoading] = useState(false)
    
    const searchFood = useCallback(async () => {
        setLoading(true)
        const result = await foodRepository.searchIngredients(query)
        if(result.length == 0) {
            console.log("Deu ruim")
        } else {
            setResult(result)
        }

        setLoading(false)
    }, [])

    useEffect(() => {
        searchFood()
    }, [])

    return{
        loading,
        setQuery,
        apiResult
    }

}

export default useSearch