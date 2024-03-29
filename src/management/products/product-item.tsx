import HeaderWithBack from "@/components/custom/header-with-back";
import MyModal from "@/components/custom/my-modal";
import { displayMessage } from "@/constants/helper-function";
import { DropdownItem } from "@/constants/types";
import CustomerDetailsDropdown from "@/customer/customer-details/dropdown";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { TfiTrash } from "react-icons/tfi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Product from "./product";
import Pricing from "./pricing";
import Supplier from "./supplier";
import Discount from "./discount";
import Taxes from "./taxes";
import { Button } from "@/components/ui/button";

type RouteParams = {
	productId: string;
};

export default function ProductItem() {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const location = useLocation();

	const pathname = useMemo(() => {
		const path = location.pathname;
		const splittedPath = path.split("/");
		const end = splittedPath[splittedPath.length - 1];

		return end;
	}, [location]);

	useEffect(() => {
		if (pathname === "add") {
			setIsEditable(true);
		}
	}, [pathname]);

	const { productId } = useParams<RouteParams>();
	const router = useNavigate();

	const handleEdit = useCallback(() => {
		setIsEditable((prevState) => !prevState);
	}, []);

	const items: DropdownItem[] = useMemo(
		() => [
			{
				action: handleEdit,
				text: "Edit",
				Icon: FiEdit,
			},
			{
				text: (
					<button
						onClick={() => setIsDeleting(true)}
						className="flex items-center gap-2 justify-center">
						<TfiTrash />
						<span>Delete</span>
					</button>
				),
			},
		],
		[handleEdit],
	);

	const handleDelete = useCallback(async () => {
		if (!productId) {
			router("-1");
			return;
		}

		// const { message, success } = await deleteCustomer(productId); //! create a separated delete
		// if (success) {
		// 	router("/customer-management/list");
		// }
		displayMessage(true, "You have successfully deleted the product");
	}, [productId, router]);

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const suppliers = formData.getAll("supplier");

		suppliers.forEach((supplier) => {
			console.log(supplier.toString());
		});
	}
	return (
		<>
			<section className="absolute top-0 left-0 flex items-center flex-col md:left-[320px] right-0 bg-white z-50">
				<div className="fixed top-0 left-0 md:left-[320px] w-full">
					<HeaderWithBack
						text={pathname === "add" ? "Add Product" : "Update Product"}
					/>
				</div>

				<form
					className="w-full max-w-screen-md p-4 space-y-2 pt-20 -z-10"
					onSubmit={handleFormSubmit}>
					{/* Header */}
					<div className="w-full flex items-center justify-between">
						<h3 className="font-semibold">Product</h3>
						{pathname !== "add" && (
							<CustomerDetailsDropdown
								triggerText="Options"
								TriggerIcon={IoChevronDownOutline}
								items={items}
							/>
						)}
					</div>

					{/* Products fields */}
					<Product isEditable={isEditable} />

					{/* Pricing fields */}
					<Pricing isEditable={isEditable} />

					{/* Supplier fields */}
					<Supplier isEditable={isEditable} />

					{/* Discount fields */}
					<Discount isEditable={isEditable} />

					{/* Taxes fields */}
					<Taxes isEditable={isEditable} />

					{isEditable && (
						<div className="w-full flex justify-end items-center py-4">
							<Button size={"lg"}>
								{pathname === "add" ? "Create Product" : "Update Product"}
							</Button>
						</div>
					)}
				</form>
			</section>
			{/* This will be shown when the user clicks the delete button */}
			<MyModal
				isDeleting={isDeleting}
				setIsDeleting={setIsDeleting}
				action={handleDelete}
				title="Deleting selected customer detail"
				description="If you delete the selected customer, the record of that customer will be deleted in our entire database. This action cannot be undo."
			/>
		</>
	);
}
