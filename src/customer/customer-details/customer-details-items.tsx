import { TfiTrash } from "react-icons/tfi";
import { Button } from "@/components/ui/button";
import PersonalDetails from "./personal-details-item";
import ContactInfoItem from "./contact-info-item";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AddCustomerType, DropdownItem } from "@/constants/types";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { deleteCustomer, patchCustomer } from "@/endpoints";
import { displayMessage } from "@/constants/helper-function";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import CustomerDetailsDropdown from "./dropdown";
import { FiEdit } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import MyModal from "@/components/custom/my-modal";
import DisplayStickyHeader from "@/components/custom/display-sticky-header";

type RouteParams = {
	customerId: string;
};

export default function CustomerDetailsItems() {
	const { contactInformation, customerInformation } =
		useLoaderData() as AddCustomerType;

	const router = useNavigate();
	const { customerId } = useParams<RouteParams>();

	const [isDeleting, setIsDeleting] = useState(false);

	const [isEditable, setIsEditable] = useState(false);

	const mutation = useMutation({
		mutationFn: patchCustomer,
		onSuccess: ({ message, success }) => {
			displayMessage(success, message);
			if (success) {
				router("/customer-management/list");
			}
		},
	});

	function handleEdit() {
		setIsEditable((prevState) => !prevState);
	}

	async function handleDelete() {
		if (!customerId) {
			router("-1");
			return;
		}

		const { message, success } = await deleteCustomer(customerId);
		if (success) {
			router("/customer-management/list");
		}
		displayMessage(success, message);
	}

	const items: DropdownItem[] = [
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
	];

	const handleFormSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			// Personal Details
			const firstName = formData.get("firstName")?.toString();
			const lastName = formData.get("lastName")?.toString();
			const gender = formData.get("gender")?.toString();
			const birthday = formData.get("birthday")?.toString();
			const middleInitial = formData.get("middleInitial")?.toString();
			// Customer Details
			const brgy = formData.get("brgy")?.toString();
			const mobileNumber = formData.get("mobileNumber")?.toString();
			const municipality = formData.get("municipality")?.toString();
			const province = formData.get("province")?.toString();

			if (
				!firstName ||
				!lastName ||
				!gender ||
				!birthday ||
				!middleInitial ||
				!brgy ||
				!mobileNumber ||
				!municipality ||
				!province
			) {
				displayMessage(false, "All fields are required");
				return;
			}

			const formattedBDay = format(birthday, "yyyy-MM-dd");

			const customerData: AddCustomerType = {
				contactInformation: {
					brgy,
					mobileNumber,
					municipality,
					province,
				},
				customerInformation: {
					birthday: formattedBDay,
					firstName,
					gender,
					lastName,
					middleInitial,
				},
			};

			mutation.mutate({ id: customerId!, customerPatch: customerData });
			// use -> patchCustomer
		},
		[customerId, mutation],
	);

	const formContent = useMemo(
		() => (
			<>
				<PersonalDetails
					firstName={customerInformation.firstName}
					gender={customerInformation.gender}
					lastName={customerInformation.lastName}
					middleName={customerInformation.middleInitial}
					birthday={customerInformation.birthday}
					disabled={!isEditable}
				/>
				<hr className="my-8" />
				<h3>Contact Information</h3>
				<ContactInfoItem
					barangay={contactInformation.brgy}
					mobileNumber={contactInformation.mobileNumber}
					municipality={contactInformation.municipality}
					province={contactInformation.province}
					disabled={!isEditable}
				/>
				<div className="w-full flex justify-end items-center">
					{isEditable && (
						<Button
							className="w-full md:w-fit bg-[#284B63] dark:bg-[#0A1526] text-white"
							size={"lg"}
							disabled={mutation.isPending}>
							{mutation.isPending ? "Loading..." : "Update Customer Profile"}
						</Button>
					)}
				</div>
			</>
		),
		[
			contactInformation.brgy,
			contactInformation.mobileNumber,
			contactInformation.municipality,
			contactInformation.province,
			customerInformation.birthday,
			customerInformation.firstName,
			customerInformation.gender,
			customerInformation.lastName,
			customerInformation.middleInitial,
			isEditable,
			mutation.isPending,
		],
	);

	return (
		<>
			<DisplayStickyHeader />

			<div className="w-full flex items-center justify-center">
				<form
					className="flex gap-4 flex-col p-4 my-4 md:my-16 w-full max-w-4xl"
					onSubmit={handleFormSubmit}>
					{/* Header Form */}
					<div className="w-full flex justify-between items-center">
						<h3>Personal Details</h3>
						<CustomerDetailsDropdown
							triggerText="Options"
							TriggerIcon={IoChevronDownOutline}
							items={items}
						/>
					</div>

					{/* The main content of the form */}
					{formContent}
				</form>
			</div>

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
