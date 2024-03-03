import MyDatePicker from "@/components/custom/my-date-picker";
import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";
import { items } from "@/constants/objects";
import { useEffect, useMemo, useState } from "react";

interface PersonalDetailsProps {
	lastName: string;
	firstName: string;
	middleName: string;
	gender: string;
	birthday: string;
}

export default function PersonalDetails({
	firstName,
	gender,
	lastName,
	middleName,
	birthday,
}: PersonalDetailsProps) {
	// const birthdateRef = useRef<HTMLInputElement>(null);
	const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

	const tabMutator = useMemo(
		() => <TabMutator currentTab={AvailableTabs["Customer Management"]} />,
		[],
	);

	useEffect(() => {
		if (birthday) {
			const date = new Date(birthday);
			setBirthdate(date);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="space-y-4 -z-10">
			{tabMutator}
			<MyInput
				name="lastName"
				placeholder="Last Name"
				defaultValue={lastName}
				disabled
			/>
			<MyInput
				name="firstName"
				placeholder="First Name"
				defaultValue={firstName}
				disabled
			/>
			<MyInput
				name="middleInitial"
				placeholder="Middle Initial"
				defaultValue={middleName}
				disabled
			/>
			<MyDatePicker
				date={birthdate}
				placeholder="Birthday"
				setDate={setBirthdate}
				disabled
			/>
			<input
				name="birthday"
				value={`${birthdate}`}
				hidden
				onChange={(e) => setBirthdate(e.target.value as unknown as Date)}
			/>
			<MySelect
				items={items}
				name="gender"
				placeholder="Select gender"
				defaultValue={gender}
				key={"CustomerPersonalDetails"}
				isRequired={true}
				isDisabled={true}
			/>
		</div>
	);
}
