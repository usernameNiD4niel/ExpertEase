import MyDismissableDialog from "@/components/custom/my-dismissable-dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit2, Trash2 } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

type Props = {
	supplier: string;
	handleRemoveInput: (index: number) => void;
	index: number;
	suppliers: string[];
	setSuppliers: (suppliers: string[]) => void;
};

const Edit = memo(
	({ supplier, handleRemoveInput, index, setSuppliers, suppliers }: Props) => {
		const [currentSupplier, setCurrentSupplier] = useState("");

		const handleUpdateSupplier = useCallback(() => {
			if (!currentSupplier) {
				toast("Supplier is a required field");
				return;
			}

			const filtered = suppliers.map((_, i) => {
				if (i === index) {
					// This is what we want to update
					return currentSupplier;
				}

				return _;
			});
			// const filtered = suppliers.filter((_, index_) => index_ !== index);
			setSuppliers(filtered);
		}, [currentSupplier, index, setSuppliers, suppliers]);

		useEffect(() => {
			setCurrentSupplier(supplier);
		}, [supplier]);

		const displayContent = useMemo(() => {
			return (
				<div className="w-full space-y-4">
					<Input
						placeholder="Supplier"
						value={currentSupplier}
						onChange={(e) => setCurrentSupplier(e.target.value)}
					/>
					<div className="w-full flex justify-end items-center gap-2">
						<DialogClose asChild>
							<Button type="button" variant={"ghost"}>
								Cancel
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button type="button" onClick={handleUpdateSupplier}>
								Update
							</Button>
						</DialogClose>
					</div>
				</div>
			);
		}, [handleUpdateSupplier, currentSupplier]);

		return (
			<div className="space-x-1 flex items-center">
				<MyDismissableDialog
					triggerChild={
						<Button
							variant={"outline"}
							type="button"
							className="bg-blue-500 text-white hover:bg-blue-500/90 hover:text-white">
							<Edit2 className="w-4 h-4" />
						</Button>
					}
					withHeader
					title="Update Supplier"
					description="Enter a supplier company name or supplier name"
					content={displayContent}
				/>
				<Button
					variant={"destructive"}
					type="button"
					onClick={() => handleRemoveInput(index)}>
					<Trash2 className="w-4 h-4" />
				</Button>
			</div>
		);
	},
);

export default Edit;
