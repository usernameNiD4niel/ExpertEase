import MyDatePicker from "@/components/custom/my-date-picker";
import MyInput from "@/components/custom/my-input";
import MySelect from "@/components/custom/my-select";
import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";
import { items } from "@/constants/objects";
import { useMemo, useState } from "react";

export default function PersonalDetails() {
	// const birthdateRef = useRef<HTMLInputElement>(null);
	const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

	const tabMutator = useMemo(
		() => <TabMutator currentTab={AvailableTabs["Customer Management"]} />,
		[],
	);

	return (
		<div className="space-y-4">
			{tabMutator}
			<MyInput name="lastName" placeholder="Last Name" />
			<MyInput name="firstName" placeholder="First Name" />
			<MyInput name="middleInitial" placeholder="Middle Initial" />
			<MyDatePicker
				date={birthdate}
				placeholder="Birthday"
				setDate={setBirthdate}
			/>
			<MySelect
				items={items}
				name="gender"
				placeholder="Select gender"
				key={"CustomerPersonalDetails"}
				isRequired={true}
			/>
			<input
				name="birthday"
				hidden
				value={`${birthdate}`}
				onChange={(e) => setBirthdate(e.target.value as unknown as Date)}
			/>
		</div>
	);
}
