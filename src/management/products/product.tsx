import MyComboboxResponsive from "@/components/custom/my-combobox-responsive";
import { Input } from "@/components/ui/input";
import { memo } from "react";

type Props = {
	isEditable: boolean;
};

const Product = memo(({ isEditable }: Props) => {
	return (
		<div className="w-full space-y-3">
			<div className="space-y-1">
				<label htmlFor="name" className="text-sm">
					Name
				</label>
				<Input className="py-5" name="name" disabled={isEditable} id="name" />
			</div>
			<div className="space-y-1">
				<label className="text-sm" htmlFor="description">
					Short description/Brand
				</label>
				<Input
					className="py-5"
					name="description"
					id="description"
					disabled={isEditable}
				/>
			</div>
			<div className="space-y-1">
				<label className="text-sm" htmlFor="category">
					Category
				</label>
				<MyComboboxResponsive
					list={["Soft drinks", "Ketchup", "Rice"]}
					placeholder=""
					commandPlaceholder="Choose a category"
					disabled={isEditable}
					name="category"
				/>
			</div>
			<div className="space-y-1">
				<label htmlFor="variant" className="text-sm">
					Variant/Size/Dimensions
				</label>
				<Input
					className="py-5"
					name="variant"
					id="variant"
					disabled={isEditable}
				/>
			</div>
		</div>
	);
});

export default Product;
