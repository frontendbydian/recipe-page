import { NutritionType } from "../data/recipe-data";

function TableRow({ name, ammount }: NutritionType) {
  return (
    <tr className="border-b border-custom-light-grey last:border-none">
      <td className="py-4 pl-8 text-base font-semibold text-custom-wenge-brown">
        {name}
      </td>
      <td className="px-8 py-4 font-bold text-custom-nutmeg">{ammount}</td>
    </tr>
  );
}

export default TableRow;
