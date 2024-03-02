import MyInput from "@/components/custom/my-input";
import { memo } from "react";

interface BusinessDetailsProps {
	businessName: string;
	address: string;

	setBusinessName: React.Dispatch<React.SetStateAction<string>>;
	setAddress: React.Dispatch<React.SetStateAction<string>>;
}

const BusinessDetails = memo(
	({
		address,
		businessName,
		setAddress,
		setBusinessName,
	}: BusinessDetailsProps) => {
		return (
			<div className="flex w-full flex-col gap-2">
				<MyInput
					name="businessName"
					placeholder="Business Name"
					required
					onChange={(e) => setBusinessName(e.target.value)}
					value={businessName}
				/>

				<MyInput
					name="address"
					placeholder="Address"
					required
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>
		);
	},
);

export default BusinessDetails;
