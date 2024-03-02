import { TabsContent } from "@/components/ui/tabs";
import { FormEvent, memo, useCallback, useMemo, useState } from "react";
import PersonalDetailsOne from "./personal-details-one/page";
import PersonalDetailsTwo from "./personal-details-two/page";
import AccountDetails from "./account-details/page";
import BusinessDetails from "./business-details/page";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MdOutlineError } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/endpoints";
import { RegisterType } from "@/constants/types";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface RegisterFormProps {
	currentTab: string;
	setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm = memo(
	({ currentTab, setCurrentTab }: RegisterFormProps) => {
		// Personal Details - 1
		const [lastName, setLastName] = useState("");
		const [firstName, setFirstName] = useState("");
		const [middleName, setMiddleName] = useState("");
		const [birthdate, setBirthdate] = useState<Date | undefined>();
		const [gender, setGender] = useState("");

		// Personal Details - 2
		const [province, setProvince] = useState("");
		const [municipality, setMunicipality] = useState("");
		const [barangay, setBarangay] = useState("");
		const [email, setEmail] = useState("");

		// Account Details
		const [mobileNumber, setMobileNumber] = useState("");
		const [pin, setPin] = useState("");
		const [confirmPin, setConfirmPin] = useState("");
		const [recoveryQuestion, setRecoveryQuestion] = useState("");
		const [recoveryAnswer, setRecoveryAnswer] = useState<Date | undefined>();

		// Business Details
		const [businessName, setBusinessName] = useState("");
		const [address, setAddress] = useState("");

		const router = useNavigate();

		const mutatation = useMutation({
			mutationFn: register,
			onSuccess: ({ message, success }) => {
				if (success) {
					router("/login?isRegisterSuccess=true");
				} else {
					displayError(message);
				}
			},
		});

		const handleFormSubmit = useCallback(
			(event: FormEvent<HTMLFormElement>) => {
				event.preventDefault();

				validateUserData(currentTab);
			},
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[
				currentTab,
				firstName,
				lastName,
				birthdate,
				gender,
				middleName,
				province,
				municipality,
				barangay,
				email,
				mobileNumber,
				pin,
				confirmPin,
				recoveryAnswer,
				recoveryQuestion,
			],
		);

		const handlePrevious = useCallback(() => {
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
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [currentTab]);

		function displayError(customMessage?: string) {
			return toast(
				<h3 className="flex flex-row gap-2 items-center">
					<MdOutlineError className="text-red-500 text-xl" />
					{customMessage ? customMessage : "All fields are required"}
				</h3>,
			);
		}

		function validateUserData(currentTab: string) {
			switch (currentTab) {
				case "personal_details_1":
					// Check if data field for tab 1 is filled
					if (firstName && lastName && gender && birthdate && middleName) {
						setCurrentTab("personal_details_2");
					} else {
						displayError();
					}
					break;
				case "personal_details_2":
					// Check if data field for tab 2 is filled
					if (province && municipality && barangay && email) {
						setCurrentTab("account_details");
					} else {
						displayError();
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
						if (pin !== confirmPin) {
							displayError("Pin and confirm pin are not equal.");
							return;
						}
						setCurrentTab("business_details");
					} else {
						displayError();
					}
					break;
				default:
					if (businessName && address) {
						// ! create a request for account creation
						// ! dont forget to clear the local storage after the success register
						console.log("success!");

						const newBirthdate = format(birthdate!, "MM-dd-yyyy");
						const newRA = format(recoveryAnswer!, "MM-dd-yyyy");

						const registerData: RegisterType = {
							birthDate: newBirthdate,
							brgy: barangay,
							businessName,
							city: municipality,
							email,
							firstName,
							gender,
							lastName,
							map: address,
							middleName,
							pin,
							province,
							recoveryAnswer: newRA,
							recoveryQuestion,
						};
						mutatation.mutate(registerData);
					} else {
						displayError();
					}
					break;
			}
		}

		const displayButtons = useMemo(() => {
			return (
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
			);
		}, [currentTab, handlePrevious]);

		return (
			<form onSubmit={handleFormSubmit} className="w-full">
				<TabsContent value="personal_details_1">
					<PersonalDetailsOne
						{...{
							birthdate,
							firstName,
							gender,
							lastName,
							middleName,
							setBirthdate,
							setFirstName,
							setGender,
							setLastName,
							setMiddleName,
						}}
					/>
				</TabsContent>
				<TabsContent value="personal_details_2">
					<PersonalDetailsTwo
						{...{
							barangay,
							email,
							municipality,
							province,
							setBarangay,
							setEmail,
							setMunicipality,
							setProvince,
						}}
					/>
				</TabsContent>
				<TabsContent value="account_details">
					<AccountDetails
						{...{
							confirmPin,
							mobileNumber,
							pin,
							recoveryAnswer,
							recoveryQuestion,
							setConfirmPin,
							setMobileNumber,
							setPin,
							setRecoveryAnswer,
							setRecoveryQuestion,
						}}
					/>
				</TabsContent>
				<TabsContent value="business_details">
					<BusinessDetails
						{...{
							address,
							businessName,
							setAddress,
							setBusinessName,
						}}
					/>
				</TabsContent>
				{mutatation.isPending ? (
					<Button disabled type="button">
						Loading...
					</Button>
				) : (
					displayButtons
				)}
			</form>
		);
	},
);

export default RegisterForm;
