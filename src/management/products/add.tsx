import MyDismissableDialog from "@/components/custom/my-dismissable-dialog";
import { AddService } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { memo, useCallback, useState } from "react";
import { toast } from "sonner";

type Props = {
	setSuppliers: React.Dispatch<React.SetStateAction<string[]>>;
};

const Add = memo(({ setSuppliers }: Props) => {
	const [supplier, setSupplier] = useState("");

	const handleAddSupplier = useCallback(() => {
		if (!supplier) {
			toast("Cannot add empty supplier");
			return;
		}

		setSuppliers((prev) => [...prev, supplier]);
	}, [setSuppliers, supplier]);

	return (
		<div className="w-full flex justify-end items-center">
			<MyDismissableDialog
				triggerChild={
					<button
						className="text-blue-500 flex items-center gap-x-2 text-sm mt-2"
						// onClick={handleAddSupplier}
						type="button">
						<AddService className="text-lg mt-1" />
						<span>ADD SUPPLIER</span>
					</button>
				}
				withHeader
				title="Add Supplier"
				description="Enter a supplier company name or supplier name"
				content={
					<div className="w-full space-y-4">
						<Input
							placeholder="Supplier"
							value={supplier}
							onChange={(e) => setSupplier(e.target.value)}
						/>
						<div className="w-full flex justify-end items-center gap-2">
							<DialogClose asChild>
								<Button type="button" variant={"ghost"}>
									Cancel
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button type="button" onClick={handleAddSupplier}>
									Submit
								</Button>
							</DialogClose>
						</div>
					</div>
				}
			/>
		</div>
	);
});

export default Add;
