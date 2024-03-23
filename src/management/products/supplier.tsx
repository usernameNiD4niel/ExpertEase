import { AddService } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { memo, useState, useRef, useEffect } from "react";

type Props = {
	isEditable: boolean;
};

const Supplier = memo(({ isEditable }: Props) => {
	const [suppliers, setSuppliers] = useState(["hello", "world", "again"]);
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

	function handleAddSupplier() {
		setSuppliers((prev) => [...prev, ""]);
	}

	return (
		<div className="w-full space-y-3 pt-3">
			<hr className="my-8" />
			<h3 className="font-semibold">Supplier</h3>
			{suppliers.map((supplier, index) => (
				<div
					className="w-full flex items-center gap-2"
					key={`${supplier}-${index}`}>
					<Input
						className="py-5"
						placeholder={supplier ? "" : "Company Name"}
						value={supplier}
						onChange={(e) => handleInputChange(index, e.target.value)}
						disabled={isEditable}
						name="supplier"
						ref={(input) => {
							inputRefs.current[index] = input;
						}}
					/>
					{index >= 1 && (
						<Button
							variant={"destructive"}
							type="button"
							onClick={() => handleRemoveInput(index)}>
							<Trash2 className="w-4 h-4" />
						</Button>
					)}
				</div>
			))}

			<div className="w-full flex justify-end items-center">
				<button
					className="text-blue-500 flex items-center gap-x-2 text-sm mt-2"
					onClick={handleAddSupplier}
					type="button">
					<AddService className="text-lg mt-1" />
					<span>ADD SUPPLIER</span>
				</button>
			</div>
		</div>
	);
});

export default Supplier;
