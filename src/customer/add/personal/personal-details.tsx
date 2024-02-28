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
			{/* <div className="relative w-full -z-10">
				<MyInput name="birthdate" type="date" required ref={birthdateRef} />
				<FaCalendarAlt
					className="absolute right-[.85rem] hidden dark:flex hover:cursor-pointer text-sm top-[.90rem] text-slate-700 dark:text-slate-300"
					onClick={calendarHandler}
				/>
			</div> */}
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
		</div>
	);
}
