import type { TFormProps } from "./FormPropType";

interface PrepProps extends TFormProps {
  total: number;
}

const PrepTimeForm = ({ register, total }: PrepProps) => {
  return (
    <div className="flex w-full flex-col">
      <h4>Preparation Time</h4>
      <ul className="mx-auto mt-4 w-[90%]">
        <li>
          <label>
            <span className="font-semibold">Preparation:</span>
            <input
              type="number"
              {...(register("prepTime.prep"),
              {
                required: true,
              })}
              className="border-underline ml-2 w-[3rem] border-b-2 text-right"
              step={5}
              min={0}
            />
            minutes
          </label>
        </li>
        <li>
          <label>
            <span className="font-semibold">Cooking:</span>
            <input
              type="number"
              {...(register("prepTime.cook"),
              {
                required: true,
              })}
              className="border-underline ml-2 w-[3rem] border-b-2 text-right"
              step={5}
              min={0}
            />
            minutes
          </label>
        </li>
      </ul>
      <div className="ml-auto">
        <span className="font-semibold">Total time:</span> {total} minutes
      </div>
    </div>
  );
};

export default PrepTimeForm;
