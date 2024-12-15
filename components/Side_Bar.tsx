import { authStore } from "@/stores/AuthStore";
import { motion } from "motion/react";

interface Props {
  showSideBar: boolean;
  handleShowSideBar: (show: boolean) => void;
  setShowSideBar: (show: boolean) => void
}

export const Side_Bar: React.FC<Props> = ({ handleShowSideBar, showSideBar, setShowSideBar }) => {
  return (
    <>
      <div className="bg-overlay w-full h-screen absolute top-0 left-0 z-50 flex justify-end desktop:hidden">
        <Options handleShowSideBar={handleShowSideBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      </div>
      <div className="hidden desktop:block fixed h-screen top-0 right-0 z-50">
        <Options handleShowSideBar={handleShowSideBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      </div>
    </>
  );
};

interface PropsOptions{
  showSideBar: boolean;
  handleShowSideBar: (show: boolean) => void;
  setShowSideBar: (show: boolean) => void
}

const Options: React.FC<PropsOptions> = ({handleShowSideBar, showSideBar, setShowSideBar}) => {

  const {user, setIsAuth} = authStore()

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setIsAuth(false)
    setShowSideBar(false)
    window.location.reload()
  }

  return(
    <motion.section
        className="bg-white h-full w-[300px] flex flex-col justify-between p-10 desktop:border-l-2 border-black"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <button
          className="absolute top-3 right-6 desktop:hidden"
          onClick={() => handleShowSideBar(showSideBar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <button
          className="absolute top-3 right-6 hidden desktop:block"
          onClick={() => setShowSideBar(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle mb-7"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
          <span className="text-gray-400 font-semibold">
            {user?.email}
          </span>
          <h5 className="text-2xl">{user?.display_name}</h5>
        </div>
        <button
          type="button"
          className="bg-black text-white py-4 rounded-full text-lg"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </motion.section>
  )
}