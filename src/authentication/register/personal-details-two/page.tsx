import MyInput from "@/components/custom/my-input";
import { memo } from "react";

interface PersonalDetailsTwoProps {
	province: string;
	municipality: string;
	barangay: string;
	email: string;

	setProvince: React.Dispatch<React.SetStateAction<string>>;
	setMunicipality: React.Dispatch<React.SetStateAction<string>>;
	setBarangay: React.Dispatch<React.SetStateAction<string>>;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const PersonalDetailsTwo = memo(
	({
		barangay,
		email,
		municipality,
		province,
		setBarangay,
		setEmail,
		setMunicipality,
		setProvince,
	}: PersonalDetailsTwoProps) => {
		return (
			<div className="flex w-full flex-col gap-2">
				<MyInput
					name="province"
					placeholder="Address (Province)"
					required
					defaultValue={province}
					onChange={(e) => setProvince(e.target.value)}
				/>
				<MyInput
					name="municipalityCity"
					placeholder="Address (Municipality/City)"
					defaultValue={municipality}
					onChange={(e) => setMunicipality(e.target.value)}
					required
				/>
				<MyInput
					name="barangay"
					placeholder="Address (Barangay)"
					required
					defaultValue={barangay}
					onChange={(e) => setBarangay(e.target.value)}
				/>
				<MyInput
					name="email"
					placeholder="Email Address (for recovery)"
					type="email"
					defaultValue={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
		);
	},
);

export default PersonalDetailsTwo;
