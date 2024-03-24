import MyComboboxResponsive from "@/components/custom/my-combobox-responsive";
import { Input } from "@/components/ui/input";
import { memo } from "react";

type Props = {
	isEditable: boolean;
};

const Pricing = memo(({ isEditable }: Props) => {
	return (
		<div className="w-full space-y-3 pt-3">
			<hr className="my-8" />
			<h3 className="font-semibold">Pricing</h3>
			<div className="space-y-1">
				<label htmlFor="unit" className="text-sm">
					Unit
				</label>
				<MyComboboxResponsive
					list={["Piece", "Box", "Bundle", "KG", "Meters", "Liter"]}
					placeholder=""
					commandPlaceholder="Choose a unit"
					disabled={!isEditable}
					name="unit"
				/>
			</div>
			<div className="space-y-1">
				<label htmlFor="price_per_unit" className="text-sm">
					Price per Unit
				</label>
				<Input
					className="py-5"
					id="price_per_unit"
					name="price_per_unit"
					required
					disabled={!isEditable}
				/>
			</div>
			<div className="space-y-1">
				<label className="text-sm" htmlFor="cost_per_unit">
					Cost Per Unit
				</label>
				<Input
					className="py-5"
					name="cost_per_unit"
					id="cost_per_unit"
					required
					disabled={!isEditable}
				/>
			</div>
			<div className="space-y-1">
				<label className="text-sm" htmlFor="gross_margin">
					Gross Margin[(price-cost)/cost]
				</label>
				<Input
					className="py-5"
					id="gross_margin"
					required
					name="gross_margin"
					disabled={!isEditable}
				/>
			</div>
		</div>
	);
});

export default Pricing;
