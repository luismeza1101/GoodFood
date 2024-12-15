'use client'

import { motion } from "motion/react";
import { useEffect } from "react";

interface Props {
  message: string;
  setShowMessage: (show: boolean) => void;
}

export const Card_Error: React.FC<Props> = ({ message, setShowMessage }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="max-w-[370px] w-[90%] flex gap-3 items-center justify-center py-3 px-4 rounded-lg text-base font-medium  text-white bg-[#f85149]"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="28"
        width="28"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
      <p className="flex justify-center items-center">{message}</p>
    </motion.section>
  );
};

export const Card_Succes: React.FC<Props> = ({ message, setShowMessage }) => {
  return (
    <motion.section
      className="max-w-[370px] w-[90%] flex gap-3 items-center justify-center py-3 px-4 rounded-lg text-base font-medium  text-white bg-[#25d366]"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
        <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
        <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
        <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
      <p className="flex justify-center items-center">{message}</p>
      <button
        type="button"
        aria-label="close-error"
        className="rounded-md text-white border border-white opacity-40 hover:opacity-100"
        onClick={() => setShowMessage(false)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </motion.section>
  );
};
