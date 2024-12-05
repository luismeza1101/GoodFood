import { supabase } from "@/supaBaseClient";

export const deleteFavorite = async (id: string, userId: string) => {
  try {
    const { error } = await supabase
      .from('favorites') 
      .delete() 
      .eq('id', id) 
      .eq('userId', userId); 

    if (error) throw error;

    return {succes: true, message: 'Deleted recipe'}
  } catch (error) {
    console.error("Error al eliminar el registro:", error);
    return {succes: false, message: 'Error deleting recipe'}
  }
};
