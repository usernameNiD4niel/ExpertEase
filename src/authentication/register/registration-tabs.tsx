import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormEvent, useState } from "react";
import { HiMiniUser, HiMiniUsers } from "react-icons/hi2";
import PersonalDetailsOne from "./personal-details-one/page";
import PersonalDetailsTwo from "./personal-details-two/page";
import AccountDetails from "./account-details/page";
import { MdManageAccounts, MdOutlineError } from "react-icons/md";

import { toast } from "sonner";

import "@/styles/remove-input-spinner.css";
import BusinessDetails from "./business-details/page";
import { FaBusinessTime } from "react-icons/fa";

export default function RegistrationTabs() {
	const [currentTab, setCurrentTab] = useState("personal_details_1");

	const iconClass = "w-6 h-5";

	function handleFormSubmmit(event: FormEvent<HTMLFormElement>) {
		console.log("handle form submit");
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		validateUserData(formData, currentTab);
	}

	function validateUserData(formData: FormData, currentTab: string) {
		// personal details 1
		const firstName = formData.get("firstName")?.toString();
		const lastName = formData.get("lastName")?.toString();
		const gender = formData.get("gender")?.toString();
		const birthdate = formData.get("birthdate")?.toString();
		const middleName = formData.get("middleName")?.toString();

		// personal details 2
		const province = formData.get("province")?.toString();
		const municipalityCity = formData.get("municipalityCity")?.toString();
		const barangay = formData.get("barangay")?.toString();
		const email = formData.get("email")?.toString();

		// account details
		const mobileNumber = formData.get("mobileNumber")?.toString();
		const pin = formData.get("pin")?.toString();
		const confirmPin = formData.get("confirmPin")?.toString();
		const recoveryQuestion = formData.get("recoveryQuestion")?.toString();
		const recoveryAnswer = formData.get("recoveryAnswer")?.toString();

		// business details
		const businessName = formData.get("businessName")?.toString();
		const address = formData.get("address")?.toString();

		switch (currentTab) {
			case "personal_details_1":
				// Check if data field for tab 1 is filled
				if (firstName && lastName && gender && birthdate && middleName) {
					localStorage.setItem("firstName", firstName);
					localStorage.setItem("lastName", lastName);
					localStorage.setItem("gender", gender);
					localStorage.setItem("middleName", middleName);
					localStorage.setItem("birthdate", birthdate);
					setCurrentTab("personal_details_2");
				} else {
					toast(
						<h3 className="flex flex-row gap-2 items-center">
							<MdOutlineError className="text-red-500 text-xl" />
							All fields are required
						</h3>,
					);
				}
				break;
			case "personal_details_2":
				// Check if data field for tab 2 is filled
				if (province && municipalityCity && barangay && email) {
					localStorage.setItem("province", province);
					localStorage.setItem("municipalityCity", municipalityCity);
					localStorage.setItem("barangay", barangay);
					localStorage.setItem("email", email);
					setCurrentTab("account_details");
				} else {
					toast(
						<h3 className="flex flex-row gap-2 items-center">
							<MdOutlineError className="text-red-500 text-xl" />
							All fields are required
						</h3>,
					);
				}
				break;
			case "account_details":
				if (
					mobileNumber &&
					pin &&
					confirmPin &&
					recoveryQuestion &&
					recoveryAnswer
				) {
					localStorage.setItem("mobileNumber", mobileNumber);
					localStorage.setItem("pin", pin);
					localStorage.setItem("confirmPin", confirmPin);
					localStorage.setItem("recoveryQuestion", recoveryQuestion);
					localStorage.setItem("recoveryAnswer", recoveryAnswer);
					setCurrentTab("business_details");
				} else {
					toast(
						<h3 className="flex flex-row gap-2 items-center">
							<MdOutlineError className="text-red-500 text-xl" />
							All fields are required
						</h3>,
					);
				}
				break;
			default:
				if (businessName && address) {
					// ! create a request for account creation
					// ! dont forget to clear the local storage after the success register
				} else {
					toast(
						<h3 className="flex flex-row gap-2 items-center">
							<MdOutlineError className="text-red-500 text-xl" />
							All fields are required
						</h3>,
					);
				}
				break;
		}
	}

	function handleTabValueChange(value: string) {
		setCurrentTab(value);
	}

	function handlePrevious() {
		switch (currentTab) {
			case "personal_details_2":
				setCurrentTab("personal_details_1");
				break;
			case "account_details":
				setCurrentTab("personal_details_2");
				break;
			case "business_details":
				setCurrentTab("account_details");
				break;
		}
	}

	return (
		<Tabs
			value={currentTab}
			onValueChange={handleTabValueChange}
			className="w-full flex flex-col">
			<TabsList className="flex gap-3 h-[40px]">
				<TabsTrigger value="personal_details_1">
					<HiMiniUser className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="personal_details_2"
					disabled={currentTab === "personal_details_1"}>
					<HiMiniUsers className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="account_details"
					disabled={
						currentTab === "personal_details_1" ||
						currentTab === "personal_details_2"
					}>
					<MdManageAccounts className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="business_details"
					disabled={
						currentTab === "personal_details_1" ||
						currentTab === "personal_details_2" ||
						currentTab === "account_details"
					}>
					<FaBusinessTime className={iconClass} />
				</TabsTrigger>
			</TabsList>
			<form onSubmit={handleFormSubmmit} className="w-full">
				<TabsContent value="personal_details_1">
					<PersonalDetailsOne />
				</TabsContent>
				<TabsContent value="personal_details_2">
					<PersonalDetailsTwo />
				</TabsContent>
				<TabsContent value="account_details">
					<AccountDetails />
				</TabsContent>
				<TabsContent value="business_details">
					<BusinessDetails />
				</TabsContent>
				<div className="w-full flex items-center justify-between my-3">
					<Button
						variant={"secondary"}
						type="button"
						size={"lg"}
						onClick={handlePrevious}
						disabled={currentTab === "personal_details_1"}>
						Previous
					</Button>
					{currentTab !== "business_details" ? (
						<Button type="submit" size={"lg"}>
							Next
						</Button>
					) : (
						<Button type="submit" size={"lg"}>
							Create account
						</Button>
					)}
				</div>
			</form>
		</Tabs>
	);
}
