import { supabase } from "@/supaBaseClient";

export const checkIsFavorite = async (
  recipeId: string,
  userId: string
) => {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .select("id")
      .eq("recipeId", recipeId)
      .eq("userId", userId);

      if(error) throw error

      return {succes: true, isFavorite: data.length == 0 ? false : true, id: data[0].id}
      
    } catch (error) {
      return {succes: false, isFavorite: false, id: null}
  }
};
