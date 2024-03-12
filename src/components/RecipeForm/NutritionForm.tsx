import NutritionTypeField from "./Fields/NutritionTypeField";

interface NutritionProps {
  kcal: number;
}

const nutritionTypes = ["Carbs", "Protein", "Fat"];

const NutritionForm = ({ kcal }: NutritionProps) => {
  return (
		<>
			<div className="flex w-full flex-col">
				<h4 className="font-semibold">Nutrition</h4>
				<ul className="mx-auto mt-4 flex w-[90%] flex-col">
					{nutritionTypes.map((type) => {
						return (
							<NutritionTypeField
								key={type}
								type={type}
							/>
						);
					})}
				</ul>
				<div className="ml-auto">
					<span className="mr-2 font-semibold">Total:</span>
					{kcal} kcal
				</div>
			</div>
		</>
	);
};

export default NutritionForm;
