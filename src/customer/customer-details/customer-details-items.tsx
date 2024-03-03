import HeaderWithBack from "@/components/custom/header-with-back";
import { Button } from "@/components/ui/button";
import PersonalDetails from "./personal-details-item";
import ContactInfoItem from "./contact-info-item";
import DeleteIcon from "@/public/delete.svg";
import EditIcon from "@/public/edit.svg";
import { useLoaderData } from "react-router-dom";
import { AddCustomerType } from "@/constants/types";
import { useMemo, useState } from "react";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";

export default function CustomerDetailsItems() {
	const { contactInformation, customerInformation } =
		useLoaderData() as AddCustomerType;

	const [isEditable, setIsEditable] = useState(false);

	function handleEdit() {
		setIsEditable((prevState) => !prevState);
	}

	function handleDelete() {
		// ! invoke a delete customer endpoint here...
	}

	const tabMutator = useMemo(
		() => <TabMutator currentTab={AvailableTabs["Customer Management"]} />,
		[],
	);

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
				<form className="flex gap-4 flex-col p-4 my-4 md:my-16 w-full max-w-4xl">
					<div className="w-full flex justify-between items-center">
						<h3>Personal Details</h3>
						<div className="flex items-center gap-4">
							<button
								className="flex gap-2 items-center text-red-500 dark:text-red-900"
								type="button"
								onClick={handleDelete}>
								<img src={DeleteIcon} alt="Delete icon" />
								<span className="text-sm text-red-500 dark:text-red-900">
									DELETE
								</span>
							</button>
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
						barangay={contactInformation[0].brgy}
						mobileNumber={contactInformation[0].mobileNumber}
						municipality={contactInformation[0].municipality}
						province={contactInformation[0].province}
						disabled={!isEditable}
					/>
					<div className="w-full flex justify-end items-center">
						{isEditable && (
							<Button
								className="w-full md:w-fit bg-[#284B63] dark:bg-[#0A1526] text-white"
								size={"lg"}>
								Update Customer Profile
							</Button>
						)}
					</div>
				</form>
			</div>
		</>
	);
}
