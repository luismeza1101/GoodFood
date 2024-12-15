import { supabase } from "@/supaBaseClient";

export const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) 
      throw new Error("The email or password is incorrect.");

    const {display_name, email: userEmail, sub} = data.user.user_metadata

    return { succes: true, message: {display_name, email: userEmail, sub} };

  } catch (error: any) {
    return {
      succes: false,
      message: error.message || "The email or password is incorrect.",
    };
  }
};
