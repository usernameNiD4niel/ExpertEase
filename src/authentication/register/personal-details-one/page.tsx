import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import { items } from "@/constants/objects";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function PersonalDetailsOne() {
	const birthdateRef = useRef<HTMLInputElement>(null);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [gender, setGender] = useState("");

	useEffect(() => {
		const firstName = localStorage.getItem("firstName") ?? "";
		const lastName = localStorage.getItem("lastName") ?? "";
		const middleName = localStorage.getItem("middleName") ?? "";
		const birthdate = localStorage.getItem("birthdate") ?? "";
		const gender = localStorage.getItem("gender") ?? "";

		setFirstName(firstName);
		setLastName(lastName);
		setGender(gender);
		setBirthdate(birthdate);
		setMiddleName(middleName);
	}, []);

	const calendarHandler = useCallback(() => {
		if (birthdateRef.current) {
			birthdateRef.current.showPicker();
		}
	}, []);

	return (
		<div className="flex w-full flex-col gap-2">
			<MyInput
				name="firstName"
				placeholder="First Name"
				required
				defaultValue={firstName}
			/>
			<MyInput
				name="lastName"
				placeholder="Last Name"
				required
				defaultValue={lastName}
			/>
			<MyInput
				name="middleName"
				placeholder="Middle Name"
				required
				defaultValue={middleName}
			/>
			<div className="relative w-full">
				<MyInput
					name="birthdate"
					placeholder="Birth Date"
					type="date"
					defaultValue={birthdate}
					required
					ref={birthdateRef}
				/>
				<FaCalendarAlt
					className="absolute right-[.85rem] hidden dark:flex hover:cursor-pointer text-sm top-[.90rem] text-slate-700 dark:text-slate-300"
					onClick={calendarHandler}
				/>
			</div>
			<MySelect
				items={items}
				name="gender"
				placeholder="Select gender"
				defaultValue={gender}
				key={"PersonalDetailsOneGender"}
				isRequired={true}
			/>
		</div>
	);
}
