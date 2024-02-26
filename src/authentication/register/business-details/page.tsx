import MyInput from "@/components/custom/my-input";
import { useCallback, useEffect, useState } from "react";

export default function BusinessDetails() {
	const [businessName, setBusinessName] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		const businessName = localStorage.getItem("businessName");
		const address = localStorage.getItem("address");

		setBusinessName(businessName ?? "");
		setAddress(address ?? "");
	}, []);

	const handleBusinessNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setBusinessName(event.target.value);
			localStorage.setItem("businessName", businessName);
		},
		[],
	);

	const handleAddressChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setAddress(event.target.value);
			localStorage.setItem("address", address);
		},
		[],
	);

	return (
		<div className="flex w-full flex-col gap-2">
			<MyInput
				name="businessName"
				placeholder="Business Name"
				required
				onChange={handleBusinessNameChange}
				value={businessName}
			/>
			<MyInput
				name="address"
				placeholder="Address"
				required
				value={address}
				onChange={handleAddressChange}
			/>
		</div>
	);
}
