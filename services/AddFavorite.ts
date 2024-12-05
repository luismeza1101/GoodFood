import { supabase } from "@/supaBaseClient"
import { Type_To_Add_Favorites } from "@/types/types"

export const addToFavorites = async (infoRecipe: Type_To_Add_Favorites) => {
    try {
        const { error} = await supabase.from('favorites').insert([{
            recipeId: infoRecipe.recipeId,
            title: infoRecipe.title,
            image: infoRecipe.image,
            userId: infoRecipe.userId
        }])

        if(error) throw (error)

        return {succes: true, message: 'Recipe added successfully'}
        
    } catch (error: any) {
        console.error(error.message)
        return {succes: false, message: error.message, }
    }
}