interface PrepTimeProps {
  prepTime: { total: number, preparation: number, cooking: number }
}

const PrepTime = ({ prepTime }: PrepTimeProps) => {
  return (
    <div className="mx-auto w-[90%]">
      <h4 className="text-content-accent">Preparation time</h4>
      <ul className="mt-4">
        <li>
          <span className="font-semibold">Total:</span> Approximately {prepTime.total} minutes
        </li>
        <li>
          <span className="font-semibold">Preparation:</span> {prepTime.preparation} minutes
        </li>
        <li>
          <span className="font-semibold">Cooking:</span> {prepTime.cooking} minutes
        </li>
      </ul>
    </div>
  );
};

export default PrepTime;
