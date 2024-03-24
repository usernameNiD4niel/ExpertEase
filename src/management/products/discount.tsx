import { Input } from "@/components/ui/input";
import { memo } from "react";

type Props = {
	isEditable: boolean;
};

const Discount = memo(({ isEditable }: Props) => {
	return (
		<div className="w-full space-y-3 py-3">
			<hr className="my-8" />
			<h3 className="font-semibold">Discount</h3>
			<div className="w-full relative">
				<Input
					placeholder="0.00"
					className="w-full pe-9"
					disabled={!isEditable}
					required
				/>
				<p className="w-5 h-5 absolute right-1 top-[.40rem]">%</p>
			</div>
		</div>
	);
});

export default Discount;
