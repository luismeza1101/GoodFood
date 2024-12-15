import Button_Favorite from "@/components/Button_Favorite";
import { getInformationRecipe } from "@/services/GetInformationRecipe";
import Image from "next/image";

const pageDynamic = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;

  const information = await getInformationRecipe(id);

  return (
    <>
      {information ? (
        <main className="p-6 flex flex-col gap-6 desktop:gap-10 lg:px-24 lg:mx-auto">
          <div className="flex justify-between items-center w-full desktop:col-span-2">
            <h2 className="text-4xl flex-1 break-words whitespace-normal">
              {information.title}
            </h2>
            <Button_Favorite recipeId={id.toString()} title={information.title} image={information.image}/>
          </div>
          <div className="w-full flex flex-col gap-6 desktop:gap-10 desktop:flex-row">
            <div className="relative w-[95%] mx-auto min-h-[340px] desktop:w-[50%]">
              <Image
                src={information.image}
                alt="Image"
                fill
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 gap-3 desktop:text-xl">
              <strong className="text-xl">Ingredients</strong>
              <ul className="list-disc list-inside">
                {information.ingredients.map((ingredient) => (
                  <li
                    key={ingredient.id}
                  >{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="desktop:text-xl"><strong>Servings: </strong>{information.servings}</p>
            <p className="desktop:text-xl"><strong>Ready In: </strong>{information.readyInMinutes} minutes</p>
            <p className="desktop:text-xl"><strong>Diets: </strong>{information.diets.join(', ')}</p>
          </div>
          <div className="desktop:text-xl">
            <strong className="text-xl">Preparation:</strong>
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
