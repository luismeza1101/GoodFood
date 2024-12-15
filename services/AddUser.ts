import { supabase } from "@/supaBaseClient";

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: username },
      },
    });

    if (error) throw new Error("Server error. Try again later.");

    if(!('email_verified' in data.user!.user_metadata)) throw new Error('Email already registered')

    return { succes: true, message: "Successful registration" };

  } catch (error: any) {
    return {
      succes: false,
      message: error.message || "An unexpected error occurred.",
    };
  }
};
