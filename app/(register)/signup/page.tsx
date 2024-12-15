"use client";

import { Card_Error } from "@/components/Cards_Status";
import { Loader_Forms } from "@/components/Loaders";
import useVerifiedUserRegistered from "@/hooks/useVerifiedUserRegistered";
import { addUser } from "@/services/AddUser";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const PageSignUp = () => {
  const [showCheckAccount, setShowCheckAccount] = useState(false);
  const [userName, setUserName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoader, setShowLoader] = useState(false)

  useVerifiedUserRegistered()

  const handleShowCheckAccount = () => {
    if(showCheckAccount){
      setShowCheckAccount(false)
      document.body.classList.remove('overflow-hidden')
    } else {
      setShowCheckAccount(true)
      document.body.classList.add('overflow-hidden')
    }
  }

  const clearInputs = () => {
    setUserName("");
    setEmail("");
    setPassword("");
  };

  const handleAddUser = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!userName || !email || !password) {
      setMessage("Please complete all fields.");
      setShowMessage(true);
      return;
    }

    if (password.length < 6) {
      setMessage("The password must have at least 6 characters.");
      setShowMessage(true);
      clearInputs();
      return;
    }

    setShowLoader(true)
    const { succes, message } = await addUser(userName, email, password);

    if (succes) {
      clearInputs();
      handleShowCheckAccount()
      setShowLoader(false)
    } else {
      clearInputs();
      setMessage(message);
      setShowMessage(true);
      setShowLoader(false)
    }
  };

  return (
    <>
      <form className="form-register" onSubmit={handleAddUser}>
        <AnimatePresence>
          {showMessage && message && (
            <div className="absolute top-10 z-40 w-full flex justify-center">
              <Card_Error message={message} setShowMessage={setShowMessage} />
            </div>
          )}
        </AnimatePresence>
        <p className="font-semibold text-2xl">
          Welcome to <span className="text-main">GOOD FOOD</span>
        </p>
        <h2 className="text-5xl font-extrabold">SIGN IN</h2>
        <section className="flex flex-col items-center w-full gap-5 my-10">
          <div className="container-input-form">
            <label>Enter your user name</label>
            <input
              type="text"
              required
              placeholder="Username"
              className="input-form"
              value={userName ? userName : ""}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="container-input-form">
            <label>Enter your email address</label>
            <input
              type="email"
              required
              placeholder="Email"
              className="input-form"
              value={email ? email : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container-input-form">
            <label>Enter your user password</label>
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
          Sign Up
          { showLoader && <Loader_Forms/>}
        </button>
        <p className="text-sm desktop:text-base">Do you already have an account? <Link href='/login' className="hover:underline">Log in</Link></p>
      </form>
      {showCheckAccount && (
        <CheckAccount handleShowCheckAccount={handleShowCheckAccount}/>
      )}
    </>
  );
};

export default PageSignUp;

interface Props {
  handleShowCheckAccount: () => void;
}

const CheckAccount: React.FC<Props> = ({ handleShowCheckAccount }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-overlay flex items-center justify-center z-50">
      <section className="bg-white p-5 rounded-2xl flex flex-col gap-4 relative max-w-[90%]">
        <Image src="/imgs/logo.png" alt="Logo" width={100} height={100} />
        <span className="text-3xl font-semibold mt-4">It&apos;s almost there</span>
        <p className="text-2xl">
          Activate your account from the email address you entered <br /> It may
          take a few minutes
        </p>
        <button
          className="absolute top-3 right-3"
          onClick={handleShowCheckAccount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
            <path d="M9 8l6 8" />
            <path d="M15 8l-6 8" />
          </svg>
        </button>
      </section>
    </div>
  );
};
