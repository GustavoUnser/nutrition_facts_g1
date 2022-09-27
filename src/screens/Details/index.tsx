import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Text, View } from "react-native"
import { IngredientDto } from '../../domain/dto'
import { foodRepository } from '../../domain/repository'
import { DetailsRouteProps } from '../../navigation/interface'
import useDetails from './hooks/use-details'

const Details = () => {
    const { params: propsParams } = useRoute<DetailsRouteProps>()
    const { loading, ingredients } = useDetails(propsParams.foodId)
    const [ details, setDetails ] = useState<IngredientDto>() 


    // useEffect(() => {
    //     const result = foodRepository.getCategories()
    //     setCategories(result)
    // }, [])

    return(
        <View>
            <Text>
                {propsParams.foodId}
            </Text>

            {
                ingredients?.nutrients.map( nutrient => {
                    return(
                        <View>
                            <Text>{nutrient.name}</Text>
                            <Text>{nutrient.amount}</Text>
                            <Text>{nutrient.percentOfDailyNeeds}</Text>
                        </View>
                    )
                })
            }

        </View>
    )
}

export default Details