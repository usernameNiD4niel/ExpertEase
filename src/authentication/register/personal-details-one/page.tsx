import MyDatePicker from "@/components/custom/my-date-picker";
import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import { items } from "@/constants/objects";
import { memo } from "react";

interface PersonalDetailsOneProps {
	firstName: string;
	setFirstName: React.Dispatch<React.SetStateAction<string>>;
	lastName: string;
	setLastName: React.Dispatch<React.SetStateAction<string>>;
	middleName: string;
	setMiddleName: React.Dispatch<React.SetStateAction<string>>;
	birthdate: Date | undefined;
	setBirthdate: React.Dispatch<React.SetStateAction<Date | undefined>>;
	gender: string;
	setGender: React.Dispatch<React.SetStateAction<string>>;
}

const PersonalDetailsOne = memo(
	({
		birthdate,
		firstName,
		gender,
		lastName,
		middleName,
		setBirthdate,
		setFirstName,
		setGender,
		setLastName,
		setMiddleName,
	}: PersonalDetailsOneProps) => {
		return (
			<div className="flex w-full flex-col gap-2">
				<MyInput
					name="firstName"
					placeholder="First Name"
					required
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<MyInput
					name="lastName"
					placeholder="Last Name"
					required
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<MyInput
					name="middleName"
					placeholder="Middle Name"
					required
					value={middleName}
					onChange={(e) => setMiddleName(e.target.value)}
				/>
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
					onValueChange={setGender}
				/>
			</div>
		);
	},
);

export default PersonalDetailsOne;
