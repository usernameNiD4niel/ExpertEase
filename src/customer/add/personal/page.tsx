import HeaderWithBack from "@/components/custom/header-with-back";
import PersonalDetails from "./personal-details";
import ContactInformation from "./contact-information";
import { Button } from "@/components/ui/button";

export default function Personal() {
	return (
		<>
			<div className="fixed top-0 left-0 w-full md:ms-[320px]">
				<HeaderWithBack text="Add Customer - Personal" />
			</div>
			<div className="w-full flex items-center justify-center">
				<form className="flex gap-4 flex-col p-4 my-16 w-full max-w-4xl">
					<h3>Personal Details</h3>
					<PersonalDetails />
					<hr className="my-10" />
					<h3>Contact Information</h3>
					<ContactInformation />
					<div className="w-full flex justify-end items-center">
						<Button className="w-full md:w-fit" size={"lg"}>
							CREATE CUSTOMER PROFILE
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
