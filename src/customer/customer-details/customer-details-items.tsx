import HeaderWithBack from "@/components/custom/header-with-back";
import { Button } from "@/components/ui/button";
import PersonalDetails from "./personal-details-item";
import ContactInfoItem from "./contact-info-item";
import DeleteIcon from "@/public/delete.svg";
import EditIcon from "@/public/edit.svg";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AddCustomerType } from "@/constants/types";
import { FormEvent, useMemo, useState } from "react";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";
import MyDialog from "@/components/custom/my-dialog";
import { deleteCustomer, postCustomer } from "@/endpoints";
import { displayMessage } from "@/constants/helper-function";
import { useMutation } from "@tanstack/react-query";

type RouteParams = {
	customerId: string;
};

export default function CustomerDetailsItems() {
	const { contactInformation, customerInformation } =
		useLoaderData() as AddCustomerType;

	const router = useNavigate();
	const { customerId } = useParams<RouteParams>();

	const [isEditable, setIsEditable] = useState(false);

	const mutation = useMutation({
		mutationFn: postCustomer,
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

	const tabMutator = useMemo(
		() => <TabMutator currentTab={AvailableTabs["Customer Management"]} />,
		[],
	);

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
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

		const customerData: AddCustomerType = {
			contactInformation: {
				brgy,
				mobileNumber,
				municipality,
				province,
			},
			customerInformation: {
				birthday,
				firstName,
				gender,
				lastName,
				middleInitial,
			},
		};

		mutation.mutate(customerData);
		// use -> patchCustomer
	}

	return (
		<>
			<div className="fixed top-0 left-0 w-full md:ms-[320px] z-50">
				{tabMutator}
				<HeaderWithBack
					text="Customer Details"
					key={"CustomerDetailsItemsHeader"}
				/>
			</div>
			<div className="w-full flex items-center justify-center">
				<form
					className="flex gap-4 flex-col p-4 my-4 md:my-16 w-full max-w-4xl"
					onSubmit={handleFormSubmit}>
					<div className="w-full flex justify-between items-center">
						<h3>Personal Details</h3>
						<div className="flex items-center gap-4">
							<MyDialog
								button={
									<button
										className="flex gap-2 items-center text-red-500 dark:text-red-900"
										type="button">
										<img src={DeleteIcon} alt="Delete icon" />
										<span className="text-sm text-red-500 dark:text-red-900">
											DELETE
										</span>
									</button>
								}
								action={handleDelete}
								description="When you click continue button, the selected customer will be deleted from the database"
								title="Are you sure you want to delete this customer?"
							/>

							<button
								className="flex gap-2 items-center text-[#284B63]"
								type="button"
								onClick={handleEdit}>
								<img src={EditIcon} alt="Edit icon" />
								<span className="text-blue-500 text-sm">EDIT</span>
							</button>
						</div>
					</div>
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
				</form>
			</div>
		</>
	);
}
