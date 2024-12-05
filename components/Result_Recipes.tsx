import { Type_Recipes } from "@/types/types";
import Card_Recipe from "./Card_Recipe";

interface Props{
    recipes: Type_Recipes[]
    message: string
}

const Result_Recipes: React.FC<Props> = ({recipes, message}) => {
  return (
    <section className="grid grid-cols-1 gap-5 py-6 lg:grid-cols-2 xl:grid-cols-3">
      {recipes.length != 0 ? (
        recipes.map((recipe) => <Card_Recipe key={recipe.id} {...recipe} />)
      ) : (
        <p className="col-span-3">{message}</p>
      )}
    </section>
  );
};

export default Result_Recipes;
