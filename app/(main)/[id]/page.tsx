import Button_Favorite from "@/components/Button_Favorite";
import { getInformationRecipe } from "@/services/GetInformationRecipe";
import Image from "next/image";

const pageDynamic = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;

  const information = await getInformationRecipe(id);

  return (
    <>
      {information ? (
        <main className="p-6 grid gap-6 desktop:grid-cols-2 desktop:grid-rows-[50px_1fr_1fr] lg:px-24 lg:mx-auto">
          <div className="flex justify-between items-center w-full desktop:col-span-2">
            <h2 className="text-4xl flex-1 break-words whitespace-normal">
              {information.title}
            </h2>
            <Button_Favorite recipeId={id.toString()} title={information.title} image={information.image}/>
          </div>
          <div className="relative w-[350px] mx-auto h-[350px] desktop:row-start-2">
            <Image
              src={information.image}
              alt="Image"
              fill
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-3 desktop:row-start-2 desktop:text-xl">
            <span className="text-xl">Ingredients</span>
            <ul className="list-disc list-inside">
              {information.ingredients.map((ingredient) => (
                <li
                  key={ingredient.id}
                >{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</li>
              ))}
            </ul>
          </div>
          <div className="desktop:col-span-2 desktop:row-start-3 desktop:text-xl">
            <span className="text-xl">Preparation:</span>
            <p dangerouslySetInnerHTML={{ __html: information.instructions }} />
          </div>
        </main>
      ) : (
        <main className="w-full h-full text-3xl flex items-center justify-center">Product not found</main>
      )}
    </>
  );
};

export default pageDynamic;
