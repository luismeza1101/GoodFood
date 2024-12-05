import { supabase } from "@/supaBaseClient"
import { Type_To_Add_Favorites } from "@/types/types"

interface ReturnFavorites {
    succes: boolean
    data: Type_To_Add_Favorites[] 
}

export const getFavorites = async (userId: string) : Promise<ReturnFavorites> => {
    try {
        const {data, error} = await supabase.from('favorites').select('*').eq('userId', userId)

        if(error) throw error
        
        return {succes: true, data: data}
    } catch (error) {
        console.error(error)
        return {succes: false, data: []}
    }
}