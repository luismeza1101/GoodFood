"use client";

import { loginUser } from "@/services/LoginUser";
import { authStore } from "@/stores/AuthStore";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { Card_Error } from "@/components/Cards_Status";
import { userIsRegistered } from "@/services/UserIsRegistered";
import { Loader_Forms } from "@/components/Loaders";

const pageLogin = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const {setIsAuth, setUser} = authStore()
  const router = useRouter()

  useEffect(() => {
    const isRegistered = userIsRegistered()
    if(isRegistered) router.push('/home')
  },[])

  const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!email || !password) {
      setMessage("Please complete all fields.");
      setShowMessage(true)
      return
    }

      setShowLoader(true)
      const {succes, message} = await loginUser(email, password)

      if(succes) {
        setUser(message)
        setIsAuth(true)
        localStorage.setItem('user', JSON.stringify(message))
        setShowLoader(false)
        router.push('/home')
      } else {
        setMessage(message);
        setShowMessage(true)
        setEmail('')
        setPassword('')
        setShowLoader(false)
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
          <div className="input-form w-full flex gap-3 items-center">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="bg-transparent outline-none w-[90%]"
                value={password ? password : ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="flex-1"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eye-cancel"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M17 21l4 -4" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                )}
              </button>
            </div>
        </div>
      </section>
      <button type="submit" className="button-form">
        Log In
        { showLoader && <Loader_Forms/>}
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
