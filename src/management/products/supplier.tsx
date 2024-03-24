import { Input } from "@/components/ui/input";
import { memo, useState, useRef, useEffect } from "react";
import Edit from "./edit";
import Add from "./add";

type Props = {
	isEditable: boolean;
};

const Supplier = memo(({ isEditable }: Props) => {
	const [suppliers, setSuppliers] = useState<string[]>([]);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		// Ensure inputRefs array is updated with correct number of refs
		inputRefs.current = inputRefs.current.slice(0, suppliers.length);
	}, [suppliers.length]);

	function handleRemoveInput(index: number) {
		const filtered = suppliers.filter((_, index_) => index_ !== index);
		setSuppliers(filtered);
	}

	function handleInputChange(index: number, value: string) {
		const updatedSuppliers = [...suppliers];
		updatedSuppliers[index] = value;
		setSuppliers(updatedSuppliers);
	}

	return (
		<div className="w-full space-y-3 py-3">
			<hr className="my-8" />
			<h3 className="font-semibold">Supplier</h3>
			{suppliers.length > 0 ? (
				suppliers.map((supplier, index) => (
					<div
						className="w-full flex items-center gap-2"
						key={`${supplier}-${index}`}>
						<Input
							className="py-5"
							placeholder={supplier ? "" : "Company Name"}
							value={supplier}
							onChange={(e) => handleInputChange(index, e.target.value)}
							disabled
							name="supplier"
						/>
						<Edit
							handleRemoveInput={handleRemoveInput}
							index={index}
							setSuppliers={setSuppliers}
							supplier={supplier}
							suppliers={suppliers}
						/>
					</div>
				))
			) : (
				<div className="w-full flex items-center justify-center">
					<p className="text-slate-500 text-xs">
						Click "ADD SUPPLIER" to add your first supplier
					</p>
				</div>
			)}

			<Add setSuppliers={setSuppliers} />

			<div className="space-y-1">
				<label htmlFor="address" className="text-sm">
					Address
				</label>
				<Input name="address" id="address" disabled={!isEditable} required />
			</div>
		</div>
	);
});

export default Supplier;
