"use client";

import { Card_Error } from "@/components/Cards_Status";
import { addUser } from "@/services/AddUser";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const pageSignUp = () => {
  const [showCheckAccount, setShowCheckAccount] = useState(false);
  const [userName, setUserName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false)

  const handleAddUser = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      if (!userName || !email || !password) {
        setMessage('Please complete all fields.')
        setShowMessage(true)
        throw new Error("Please complete all fields.");
      }

      if (password.length < 6){
        setMessage("The password must have at least 6 characters");
        setShowMessage(true)
        throw new Error("The password must have at least 6 characters");
        
      }
      
      const { succes, message } = await addUser(userName, email, password);
      
      if (succes) {
        setUserName("");
        setEmail("");
        setPassword("");
        setShowCheckAccount(true);
      } else {
        setMessage(message);
        setShowMessage(true)
        throw new Error(message);
      }
    } catch (error: any) {
      console.error("Error in registering user", error);
      setUserName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <form className="form-register" onSubmit={handleAddUser}>
        <AnimatePresence>
          {showMessage && message && (
            <div className="absolute top-10 z-40 w-full flex justify-center">
              <Card_Error message={message} setShowMessage={setShowMessage}/>
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
            <input
              type="password"
              required
              placeholder="Password"
              className="input-form"
              value={password ? password : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>
        <button type="submit" className="button-form">
          Sign Up
        </button>
      </form>
      {showCheckAccount && (
        <CheckAccount setShowCheckAccount={setShowCheckAccount} />
      )}
    </>
  );
};

export default pageSignUp;

interface Props {
  setShowCheckAccount: (show: boolean) => void;
}

const CheckAccount: React.FC<Props> = ({ setShowCheckAccount }) => {
  return (
    <div className="absolute w-full h-screen bg-overlay flex items-center justify-center z-50">
      <section className="bg-white p-5 rounded-2xl flex flex-col gap-4 relative">
        <Image src="/imgs/logo.png" alt="Logo" width={100} height={100} />
        <span className="text-3xl font-semibold mt-4">It's almost there</span>
        <p className="text-2xl">
          Activate your account from the email address you entered <br /> it may
          take a few minutes
        </p>
        <button
          className="absolute top-3 right-3"
          onClick={() => setShowCheckAccount(false)}
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
