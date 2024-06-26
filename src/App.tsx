import ListItem from "./components/ListItem";
import TableRow from "./components/TableRow";
import { NutritionType, RecipeType, recipe } from "./data/recipe-data";

function App() {
  const { preparationTime, ingredients, instructions, nutritions }: RecipeType =
    recipe;
  return (
    <>
      <main className="flex items-center justify-center w-screen min-h-screen bg-white md:py-32 md:bg-custom-eggshell">
        <div className="flex flex-col w-full max-w-screen-md gap-6 bg-white md:p-10 rounded-3xl">
          <img
            src="images/image-omelette.jpeg"
            alt="hero image omelette"
            className="md:rounded-2xl"
          />
          <div className="flex flex-col w-10/12 gap-4 mx-auto md:w-full">
            <h1 className="text-4xl md:text-[40px] font-young-serif text-custom-dark-charcoal">
              Simple Omelette Recipe
            </h1>
            <p className="text-base font-outfit text-custom-wenge-brown">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="flex flex-col w-10/12 gap-4 py-4 mx-auto md:w-full bg-custom-rose-white rounded-2xl">
            <h2 className="w-11/12 mx-auto text-xl font-semibold text-custom-dark-raspberry font-outfit">
              Preparation time
            </h2>
            <ul className="flex flex-col w-11/12 gap-4 pl-6 mx-auto ">
              {preparationTime.map((item: string, index: number) => {
                const [name, description] = item.split(":");
                return (
                  <ListItem name={name} description={description} key={index} />
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col w-10/12 gap-4 mx-auto md:w-full">
            <h2 className="text-[28px] font-semibold text-custom-nutmeg font-young-serif">
              Ingredients
            </h2>
            <ul className="flex flex-col w-11/12 gap-4 pl-6 ">
              {ingredients.map((item: string, index: number) => {
                return <ListItem description={item} key={index} />;
              })}
            </ul>
            <div className="border-b border-custom-light-grey"></div>
          </div>
          <div className="flex flex-col w-10/12 gap-4 mx-auto md:w-full">
            <h2 className="text-[28px] font-semibold text-custom-nutmeg font-young-serif">
              Instructions
            </h2>
            <ol className="flex flex-col w-11/12 gap-4 pl-6 ">
              {instructions.map((item: string, index: number) => {
                const [name, description] = item.split(":");
                return (
                  <ListItem
                    name={name}
                    description={description}
                    key={index}
                    isOrdered={true}
                  />
                );
              })}
            </ol>
            <div className="border-b border-custom-light-grey"></div>
          </div>
          <div className="flex flex-col w-10/12 gap-4 mx-auto md:w-full">
            <h2 className="text-[28px] font-semibold text-custom-nutmeg font-young-serif">
              Nutritions
            </h2>
            <p className="text-base font-outfit text-custom-wenge-brown">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tbody>
                {nutritions.map((item: NutritionType, index: number) => {
                  return (
                    <TableRow
                      name={item.name}
                      ammount={item.ammount}
                      key={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-white md:bg-custom-eggshell">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          <br /> Coded by{" "}
          <a
            href="https://www.linkedin.com/in/dianprasetyo-2021/"
            target="_blank"
          >
            Dian Prasetyo
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
