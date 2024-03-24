import { AddService } from "@/components/icons";
import { Switch } from "@/components/ui/switch";
import { memo } from "react";

type Props = {
	isEditable: boolean;
};

const Taxes = memo(({ isEditable }: Props) => {
	return (
		<div className="w-full space-y-3 py-3">
			<hr className="my-8" />
			<h3 className="font-semibold">Taxes</h3>
			<div className="flex w-full items-center justify-between">
				<label htmlFor="vat" className="space-y-1">
					<h4 className="text-lg text-slate-500">VAT</h4>
					<p className="text-xs md:text-sm">
						VAT will be deducted from final price assigned above
					</p>
				</label>
				<Switch id="vat" name="vat" disabled={isEditable} />
			</div>

			<div className="w-full flex justify-end items-center">
				<button
					className="text-blue-500 flex items-center gap-x-2 text-sm mt-2 py-3"
					type="button">
					<AddService className="text-lg mt-1" />
					<span>ADD OTHER TAX</span>
				</button>
			</div>
		</div>
	);
});

export default Taxes;
