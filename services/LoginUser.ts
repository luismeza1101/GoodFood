import { supabase } from "@/supaBaseClient";

export const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error("Server error. Try again later.");

    const {display_name, email: userEmail, sub} = data.user.user_metadata

    return { succes: true, message: {display_name, email: userEmail, sub} };

  } catch (error: any) {
    console.error("Error registering user", error);
    return {
      succes: false,
      message: error.message || "An unexpected error occurred.",
    };
  }
};
