import { supabase } from "@/supaBaseClient";

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: username },
      },
    });

    if (error) throw new Error("Server error. Try again later.");
    
    return { succes: true, message: "Successful registration" };

  } catch (error: any) {
    console.error("Error registering user", error);
    return {
      succes: false,
      message: error.message || "An unexpected error occurred.",
    };
  }
};
