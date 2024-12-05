"use client";

import { loginUser } from "@/services/LoginUser";
import { authStore } from "@/stores/AuthStore";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { Card_Error } from "@/components/Cards_Status";

const pageLogin = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const {setIsAuth, setUser} = authStore()
  const router = useRouter()

  const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!email || !password) {
      setMessage("Please complete all fields.");
      setShowMessage(true)
      throw new Error("Please complete all fields.");
    }
    try {
      const {succes, message} = await loginUser(email, password)

      if(succes) {
        setUser(message)
        setIsAuth(true)
        localStorage.setItem('user', JSON.stringify(message))
        router.push('/home')
      } else {
        setMessage(message);
        setShowMessage(true)
        setEmail('')
        setPassword('')
        throw new Error(message);
      }

    } catch (error) {
      console.error("Error in login user", error);
    }
  };
  return (
    <form className="form-register" onSubmit={handleLogin}>
      <AnimatePresence>
          {showMessage && message && (
            <div className="absolute top-10 z-40 w-full flex justify-center">
              <Card_Error message={message} setShowMessage={setShowMessage}/>
            </div>
          )}
        </AnimatePresence>
      <p className="font-semibold text-2xl">Welcome to <span className="text-main">GOOD FOOD</span></p>
      <h2 className="text-5xl font-extrabold">LOG IN</h2>
      <section className="w-full flex flex-col items-center gap-5 my-10">
        <div className="container-input-form">
          <label>Enter your email address</label>
          <input
            type="email"
            required
            placeholder="Email"
            className="input-form"
            value={email ? email : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container-input-form">
          <label>Enter your password</label>
          <input
            type="password"
            required
            placeholder="Password"
            className="input-form"
            value={password ? password : ''}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>
      <button type="submit" className="button-form">
        Log In
      </button>
      <div className="text-center">
        <p>Do you have an acount?</p>
        <Link href="/signup" className="hover:underline">
          Create an acount
        </Link>
      </div>
    </form>
  );
};

export default pageLogin;
