"use client";

import { addToFavorites } from "@/services/AddFavorite";
import { checkIsFavorite } from "@/services/CheckIsFavorite";
import { deleteFavorite } from "@/services/DeleteFavorite";
import { authStore } from "@/stores/AuthStore";
import { Type_To_Add_Favorites } from "@/types/types";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Card_Error, Card_Succes } from "./Cards_Status";
import { useRouter } from "next/navigation";

interface Props {
  recipeId: string;
  title: string;
  image: string;
}

const Button_Favorite: React.FC<Props> = ({ recipeId, image, title }) => {
  const { user } = authStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState<null | string>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [launchCheckFavorite, setLaunchCheckFavorite] = useState(false);
  const [message, setMessage] = useState({ status: false, message: "" });
  const router = useRouter();

  const handleAddFavorite = async () => {
    if (!user?.sub) {
      alert("You must log in");
      return;
    }

    const params: Type_To_Add_Favorites = {
      recipeId: recipeId,
      title: title,
      image: image,
      userId: user.sub,
    };
    const { message, succes } = await addToFavorites(params);

    setMessage({ status: succes, message: message });
    setShowMessage(true);
    if (succes) setLaunchCheckFavorite((prev) => !prev);
  };

  const handleDeleteFavorite = async () => {
    if (!user?.sub) {
      alert("You must log in");
      return;
    }

    if (!favoriteId) return;

    const { message, succes } = await deleteFavorite(favoriteId, user.sub);

    if (succes) router.push("/favorites");
    else {
      setMessage({ status: succes, message: message });
      setShowMessage(true);
    }
  };

  useEffect(() => {
    const handleCheckFavorite = async () => {
      if (!user?.sub) {
        alert("You must log in");
        return;
      }
      const { succes, isFavorite, id } = await checkIsFavorite(
        recipeId,
        user.sub
      );

      if (succes) {
        if (isFavorite) {
          setIsFavorite(true);
          setFavoriteId(id);
        } else {
          setIsFavorite(false);
          setFavoriteId(null);
        }
      }
    };

    if (user?.sub) {
      const timer = setTimeout(() => {
        handleCheckFavorite();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [user?.sub, launchCheckFavorite]);

  return (
    <>
      {isFavorite ? (
        <button
          className="w-[50px] flex justify-center hover:text-orange-600"
          onClick={handleDeleteFavorite}
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart-off"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3l18 18" />
            <path d="M19.5 12.572l-1.5 1.428m-2 2l-4 4l-7.5 -7.428a5 5 0 0 1 -1.288 -5.068a4.976 4.976 0 0 1 1.788 -2.504m3 -1c1.56 0 3.05 .727 4 2a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      ) : (
        <button
          className="w-[50px] flex justify-center hover:text-main"
          onClick={handleAddFavorite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      )}
      <AnimatePresence>
        {showMessage && (
          <div className="absolute w-full flex justify-center">
            {message.status ? (
              <Card_Succes
                message={message.message}
                setShowMessage={setShowMessage}
              />
            ) : (
              <Card_Error
                message={message.message}
                setShowMessage={setShowMessage}
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Button_Favorite;
