import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import { items } from "@/constants/objects";
import Birthday from "./birthday";

interface PersonalDetailsProps {
	lastName: string;
	firstName: string;
	middleName: string;
	gender: string;
	birthday: string;
	disabled: boolean;
}

export default function PersonalDetails({
	firstName,
	gender,
	lastName,
	middleName,
	birthday,
	disabled,
}: PersonalDetailsProps) {
	return (
		<div className="space-y-4">
			<MyInput
				name="lastName"
				placeholder="Last Name"
				defaultValue={lastName}
				disabled={disabled}
			/>
			<MyInput
				name="firstName"
				placeholder="First Name"
				defaultValue={firstName}
				disabled={disabled}
			/>
			<MyInput
				name="middleInitial"
				placeholder="Middle Initial"
				defaultValue={middleName}
				disabled={disabled}
			/>
			<Birthday birthday={birthday} disabled={disabled} />
			<MySelect
				items={items}
				name="gender"
				placeholder="Select gender"
				defaultValue={gender}
				key={"CustomerPersonalDetails"}
				isRequired={true}
				isDisabled={disabled}
			/>
		</div>
	);
}
