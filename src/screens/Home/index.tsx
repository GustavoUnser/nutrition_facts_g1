import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import useSearch from './hooks/use-search'
import Styles from './styles'
import { AppNavigationProp } from '../../navigation/interface';
import Loading from '../components/Loading';

export const Home = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const { loading, setQuery, apiResult} = useSearch()
    const navigation = useNavigation<AppNavigationProp>()
    
    const openDetails = useCallback((foodId: number) => navigation.navigate('Details', { foodId }), [])

    useEffect(() => {
        loading
    }, [])
    
    
    // O onChangeText do text input não funcionou, mas se deixar um texto fixo e dar reload, ele faz a chamada na API

    return (
        <View style={Styles.wrapper}>
            <TextInput
                onChangeText={newQuery => setQuery(newQuery)}
                style={Styles.input}
                placeholder="Type the food you wan't to search..."
                placeholderTextColor="grey"
            />
            {
                apiResult?.map(food => {
                    return (
                        <TouchableOpacity key={food.id} onPress={() => openDetails(food.id)}>
                            <View style={Styles.textWrapper}>
                                <Text style={Styles.text}>{food.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default Home