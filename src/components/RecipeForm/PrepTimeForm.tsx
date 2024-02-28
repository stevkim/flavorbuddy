import PrepTimeField from "./Fields/PrepTimeField";

interface PrepProps {
  total: number;
}

const prepTypes = ["Preparation", "Cooking"];

const PrepTimeForm = ({ total }: PrepProps) => {
  return (
    <div className="flex w-full flex-col">
      <h4>Preparation Time</h4>
      <ul className="mx-auto mt-4 w-[90%]">
        {prepTypes.map((type) => {
          return <PrepTimeField key={type} type={type} />;
        })}
      </ul>
      <div className="ml-auto">
        <span className="font-semibold">Total time:</span> {total} minutes
      </div>
    </div>
  );
};

export default PrepTimeForm;
