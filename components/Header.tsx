"use client";

import Image from "next/image";
import Button_Register from "./Button_Register";
import { Side_Bar } from "./Side_Bar";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { authStore } from "@/stores/AuthStore";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const {isAuth, setUser, setIsAuth} = authStore()

  const handleShowSideBar = (show: boolean) => {
    if (show) {
      setShowSideBar(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setShowSideBar(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  useEffect(() => {
    const getDataUser = () => {
      const data = localStorage.getItem('user')
      if(!data) return
      setUser(JSON.parse(data))
      setIsAuth(true)
    }
    getDataUser()
  },[])

  return (
    <>
      <header className="flex items-center justify-between w-full px-6 py-3 sticky top-0 bg-white z-40 desktop:px-20">
        <Image src="/imgs/logo.png" alt="Logo" width={70} height={70} />
        {isAuth ? (
          <div className="flex gap-8 items-center">
            <Link href="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-home"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
              </svg>
            </Link>
            <Link href="/favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#ff0000"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
            </Link>
            <button
              onClick={() => handleShowSideBar(showSideBar)}
              className="desktop:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </button>
            <button
              onClick={() => setShowSideBar(true)}
              className="hidden desktop:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button_Register href="/login" text="Log In" />
            <Button_Register href="/signup" text="Sign Up" />
          </div>
        )}
      </header>
      <AnimatePresence>
        {showSideBar && (
          <Side_Bar
            showSideBar={showSideBar}
            handleShowSideBar={handleShowSideBar}
            setShowSideBar={setShowSideBar}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
