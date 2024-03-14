import MyInput from "@/components/custom/my-input";
import TabMutator from "@/components/custom/tab-mutator";
import { AddService } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AvailableTabs } from "@/constants/enums";
import { useNavigation } from "@/hooks";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PointOfSalePage() {
	const router = useNavigate();
	const [setActive] = useNavigation((state) => [state.setActiveTab]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setActive(AvailableTabs["Point of Sale"]), []);

	function handleFormSubmit(form: FormEvent<HTMLFormElement>) {
		form.preventDefault();
		router("/point-of-sale/module/services");
	}

	return (
		<div className="p-3 headingMargin md:py-4 md:px-12">
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />
			<div className="p-2 flex flex-col w-full justify-end items-end">
				<MyInput
					placeholder="Search Customer"
					className="w-full filter-none"
					name=""
				/>
				<button className="p-2 bg-transparent flex items-center justify-center gap-2 text-[#284B63]">
					<span className="mt-[3px]">
						<AddService />
					</span>
					<span className="text-sm">ADD CUSTOMER</span>
				</button>
			</div>

			<form className="p-3 flex flex-col gap-y-5" onSubmit={handleFormSubmit}>
				<h2 className="font-bold">Details</h2>

				<div className="w-full flex flex-col gap-y-5">
					<MyInput placeholder="Full Name" name="fullName" />
					<MyInput placeholder="Address" name="address" />
					<MyInput placeholder="Mobile Number" name="mobileNumber" />
				</div>

				<Button
					className="rounded-md bg-[#284B63] absolute md:static bottom-3 text-white left-4 right-4 hover:bg-[#284B63]/90"
					size="lg"
					type="submit">
					PROCEED
				</Button>
			</form>
		</div>
	);
}
