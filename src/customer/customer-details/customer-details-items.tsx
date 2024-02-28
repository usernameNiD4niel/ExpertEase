import HeaderWithBack from "@/components/custom/header-with-back";
import { Button } from "@/components/ui/button";
import PersonalDetails from "./personal-details-item";
import ContactInfoItem from "./contact-info-item";
import DeleteIcon from "@/public/delete.svg";
import EditIcon from "@/public/edit.svg";

export default function CustomerDetailsItems() {
	/**
	 * <div className="fixed top-0 left-0 w-full md:ms-[320px]">
				<HeaderWithBack text="Add Customer - Personal" />
			</div>
			<div className="w-full flex items-center justify-center">
				<form className="flex gap-4 flex-col p-4 my-16 w-full max-w-4xl">
					<h3>Personal Details</h3>
					<PersonalDetails />
					<hr className="my-8" />
					<h3>Contact Information</h3>
					<ContactInformation />
					<div className="w-full flex justify-end items-center">
						<Button
							className="w-full md:w-fit bg-[#284B63] dark:bg-[#0A1526] text-white"
							size={"lg"}>
							Create Customer Profile
						</Button>
					</div>
				</form>
			</div>
	 */
	return (
		<>
			<div className="fixed top-0 left-0 w-full md:ms-[320px]">
				<HeaderWithBack
					text="Customer Details"
					key={"CustomerDetailsItemsHeader"}
				/>
			</div>
			<div className="w-full flex items-center justify-center">
				<form className="flex gap-4 flex-col p-4 my-16 w-full max-w-4xl">
					<div className="w-full flex justify-between items-center">
						<h3>Personal Details</h3>
						<div className="flex items-center gap-4">
							<button
								className="flex gap-2 items-center text-red-500 dark:text-red-900"
								type="button">
								<img src={DeleteIcon} alt="Delete icon" />
								<span className="text-sm text-red-500 dark:text-red-900">
									DELETE
								</span>
							</button>
							<button
								className="flex gap-2 items-center text-[#284B63]"
								type="button">
								<img src={EditIcon} alt="Edit icon" />
								<span className="text-blue-500 text-sm">EDIT</span>
							</button>
						</div>
					</div>
					<PersonalDetails
						firstName="Jose"
						gender="male"
						lastName="Rizal"
						middleName="P"
					/>
					<hr className="my-8" />
					<h3>Contact Information</h3>
					<ContactInfoItem
						barangay="Pioneer"
						mobileNumber="09154814993"
						municipality="Mandaluyong City"
						province="NCR"
					/>
					<div className="w-full flex justify-end items-center">
						<Button
							className="w-full md:w-fit bg-[#284B63] dark:bg-[#0A1526] text-white"
							size={"lg"}>
							Create Customer Profile
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
