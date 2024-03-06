import MyInput from "@/components/custom/my-input";
import "@/styles/remove-input-spinner.css";

interface ContactInfoItemProps {
	province: string;
	municipality: string;
	barangay: string;
	mobileNumber: string;
	disabled: boolean;
}

export default function ContactInfoItem({
	barangay,
	mobileNumber,
	municipality,
	province,
	disabled,
}: ContactInfoItemProps) {
	return (
		<div className="space-y-4">
			<MyInput
				name="province"
				placeholder="Province"
				defaultValue={province}
				disabled={disabled}
			/>
			<MyInput
				name="municipality"
				placeholder="Municipality"
				defaultValue={municipality}
				disabled={disabled}
			/>
			<MyInput
				name="brgy"
				placeholder="Barangay"
				defaultValue={barangay}
				disabled={disabled}
			/>
			<MyInput
				name="mobileNumber"
				placeholder="Mobile Number"
				type="number"
				defaultValue={mobileNumber}
				disabled={disabled}
			/>
		</div>
	);
}
