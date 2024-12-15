import { Type_Recipes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Card_Recipe: React.FC<Type_Recipes> = ({ id, image, title }) => {
  return (
    <Link
      href={`/${id}`}
      className="bg-white rounded-2xl flex px-5 py-8 desktop:flex-col desktop:gap-4"
    >
      <div className="flex-1 relative min-h-24 w-[80%] mx-auto">
        {image ? (
          <Image
            src={image}
            alt="image"
            fill
            loading="lazy"
            sizes="(max-width: 200px)"
            className="rounded-2xl"
          />
        ) : (
          <Image
            src="/imgs/fondo.png"
            alt="image"
            fill
            loading="lazy"
            className="rounded-2xl"
          />
        )}
      </div>
      <span className="w-[60%] text-2xl pl-3 break-words desktop:w-full">{title}</span>
    </Link>
  );
};

export default Card_Recipe;
