import MyDatePicker from "@/components/custom/my-date-picker";
import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import { items } from "@/constants/objects";
import { useEffect, useState } from "react";

export default function PersonalDetailsOne() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
	const [gender, setGender] = useState("");

	useEffect(() => {
		const firstName = localStorage.getItem("firstName") ?? "";
		const lastName = localStorage.getItem("lastName") ?? "";
		const middleName = localStorage.getItem("middleName") ?? "";
		const birthDate = localStorage.getItem("birthdate");
		const gender = localStorage.getItem("gender") ?? "";

		if (birthDate) {
			const birthdate = birthDate as unknown as Date;
			setBirthdate(birthdate);
		}

		setFirstName(firstName);
		setLastName(lastName);
		setGender(gender);
		setBirthdate(birthdate);
		setMiddleName(middleName);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			{/* <div className="relative w-full">
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
			</div> */}
			<MyDatePicker
				date={birthdate}
				placeholder="Birthdate"
				setDate={setBirthdate}
			/>
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
