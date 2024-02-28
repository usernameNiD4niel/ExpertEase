import MyInput from "@/components/custom/my-input";
import "@/styles/remove-input-spinner.css";

interface ContactInfoItemProps {
	province: string;
	municipality: string;
	barangay: string;
	mobileNumber: string;
}

export default function ContactInfoItem({
	barangay,
	mobileNumber,
	municipality,
	province,
}: ContactInfoItemProps) {
	return (
		<div className="space-y-4">
			<MyInput
				name="province"
				placeholder="Province"
				defaultValue={province}
				disabled
			/>
			<MyInput
				name="municipality"
				placeholder="Municipality"
				defaultValue={municipality}
				disabled
			/>
			<MyInput
				name="barangay"
				placeholder="Barangay"
				defaultValue={barangay}
				disabled
			/>
			<MyInput
				name="mobileNumber"
				placeholder="Mobile Number"
				type="number"
				defaultValue={mobileNumber}
				disabled
			/>
		</div>
	);
}
