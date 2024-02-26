import MyInput from "@/components/custom/my-input";
import { useEffect, useState } from "react";

export default function PersonalDetailsTwo() {
	const [province, setProvince] = useState("");
	const [municipalityCity, setMunicipalityCity] = useState("");
	const [barangay, setBarangay] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		const province = localStorage.getItem("province")?.toString();
		const municipalityCity = localStorage
			.getItem("municipalityCity")
			?.toString();
		const barangay = localStorage.getItem("barangay")?.toString();
		const email = localStorage.getItem("email")?.toString();

		setProvince(province ?? "");
		setMunicipalityCity(municipalityCity ?? "");
		setBarangay(barangay ?? "");
		setEmail(email ?? "");
	}, []);

	return (
		<div className="flex w-full flex-col gap-2">
			<MyInput
				name="province"
				placeholder="Address (Province)"
				required
				defaultValue={province}
			/>
			<MyInput
				name="municipalityCity"
				placeholder="Address (Municipality/City)"
				defaultValue={municipalityCity}
				required
			/>
			<MyInput
				name="barangay"
				placeholder="Address (Barangay)"
				required
				defaultValue={barangay}
			/>
			<MyInput
				name="email"
				placeholder="Email Address (for recovery)"
				type="email"
				defaultValue={email}
				required
			/>
		</div>
	);
}
