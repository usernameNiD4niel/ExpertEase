import MyDatePicker from "@/components/custom/my-date-picker";
import { useEffect, useState } from "react";

interface BirthdayProps {
	birthday: string;
	disabled: boolean;
}
export default function Birthday({ birthday, disabled }: BirthdayProps) {
	const [birthdate, setBirthdate] = useState<Date | undefined>();

	useEffect(() => {
		if (birthday) {
			const date = new Date(birthday);
			setBirthdate(date);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<MyDatePicker
				date={birthdate}
				placeholder="Birthday"
				setDate={setBirthdate}
				disabled={disabled}
			/>
			<input
				name="birthday"
				value={`${birthdate}`}
				hidden
				onChange={(e) => setBirthdate(e.target.value as unknown as Date)}
			/>
		</>
	);
}
