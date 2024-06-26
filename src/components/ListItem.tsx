type Props = {
  name?: string;
  description: string;
  isOrdered?: boolean;
};

function ListItem({ name, description, isOrdered }: Props) {
  return (
    <li
      className={`pl-4 text-base ${
        isOrdered
          ? "list-decimal marker:font-semibold marker:text-custom-nutmeg"
          : "list-disc"
      }  font-outfit text-custom-wenge-brown`}
    >
      <span className="font-bold">{name}</span> {description}
    </li>
  );
}

export default ListItem;
