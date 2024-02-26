import MyInput from "@/components/custom/my-input";
import "@/styles/remove-input-spinner.css";

export default function ContactInformation() {
	return (
		<div className="space-y-4">
			<MyInput name="province" placeholder="Province" />
			<MyInput name="municipality" placeholder="Municipality" />
			<MyInput name="barangay" placeholder="Barangay" />
			<MyInput name="mobileNumber" placeholder="Mobile Number" type="number" />
		</div>
	);
}
