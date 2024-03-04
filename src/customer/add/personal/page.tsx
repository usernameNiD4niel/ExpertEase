import HeaderWithBack from "@/components/custom/header-with-back";
import PersonalDetails from "./personal-details";
import ContactInformation from "./contact-information";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { postCustomer } from "@/endpoints";
import { displayMessage } from "@/constants/helper-function";
import { useNavigate } from "react-router-dom";
import { FormEvent, useCallback } from "react";
import { AddCustomerType } from "@/constants/types";
import { format } from "date-fns";

export default function Personal() {
	const router = useNavigate();

	const mutation = useMutation({
		mutationFn: postCustomer,
		onSuccess: ({ message, success }) => {
			if (success) {
				router("/customer-management/list");
				displayMessage(true, message);
			} else {
				displayMessage(false, message);
			}
		},
	});

	const handleFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		// Personal Details
		const lastName = formData.get("lastName")?.toString() ?? "";
		const firstName = formData.get("firstName")?.toString() ?? "";
		const middleInitial = formData.get("middleInitial")?.toString() ?? "";

		const bday = formData.get("birthday")?.toString() ?? "";
		console.log(`bday ${bday}`);
		const birthday = format(bday, "yyyy-MM-dd");

		console.log(`birthday ${birthday}`);

		const gender = formData.get("gender")?.toString() ?? "";

		// Contact Information
		const province = formData.get("province")?.toString() ?? "";
		const municipality = formData.get("municipality")?.toString() ?? "";
		const brgy = formData.get("brgy")?.toString() ?? "";
		const mobileNumber = formData.get("mobileNumber")?.toString() ?? "";

		console.log(`province ${province}`);
		console.log(`municipality ${municipality}`);
		console.log(`brgy ${brgy}`);
		console.log(`mobileNumber ${mobileNumber}`);

		const customer: AddCustomerType = {
			customerInformation: {
				birthday,
				firstName,
				gender,
				lastName,
				middleInitial,
			},
			contactInformation: {
				brgy,
				mobileNumber,
				municipality,
				province,
			},
		};

		mutation.mutate(customer);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="fixed top-0 left-0 w-full md:ms-[320px]">
				<HeaderWithBack text="Add Customer - Personal" />
			</div>
			<div className="w-full flex items-center justify-center">
				<form
					className="flex gap-4 flex-col p-4 my-16 w-full max-w-4xl"
					onSubmit={handleFormSubmit}>
					<h3>Personal Details</h3>
					<PersonalDetails />
					<hr className="my-8" />
					<h3>Contact Information</h3>
					<ContactInformation />
					<div className="w-full flex justify-end items-center">
						<Button
							className="w-full md:w-fit bg-[#284B63] dark:bg-[#0A1526] text-white"
							disabled={mutation.isPending}
							size={"lg"}>
							{mutation.isPending ? "Loading..." : "Create Customer Profile"}
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
