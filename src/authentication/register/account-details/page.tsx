import MyInput from "@/components/custom/my-input";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function AccountDetails() {
	const recoveryAnswerRef = useRef<HTMLInputElement>(null);

	const [mobileNumber, setMobileNumber] = useState("");
	const [pin, setPin] = useState("");
	const [confirmPin, setConfirmPin] = useState("");
	const [recoveryQuestion, setRecoveryQuestion] = useState("");
	const [recoveryAnswer, setRecoveryAnswer] = useState("");

	useEffect(() => {
		const mobileNumber = localStorage.getItem("mobileNumber") ?? "";
		const pin = localStorage.getItem("pin") ?? "";
		const confirmPin = localStorage.getItem("confirmPin") ?? "";
		const recoveryQuestion = localStorage.getItem("recoveryQuestion") ?? "";
		const recoveryAnswer = localStorage.getItem("recoveryAnswer") ?? "";

		setMobileNumber(mobileNumber);
		setPin(pin);
		setConfirmPin(confirmPin);
		setRecoveryAnswer(recoveryAnswer);
		setRecoveryQuestion(recoveryQuestion);
	}, []);

	const calendarHandler = useCallback(() => {
		if (recoveryAnswerRef.current) {
			recoveryAnswerRef.current.showPicker();
		}
	}, []);

	return (
		<div className="flex w-full flex-col gap-2">
			<MyInput
				name="mobileNumber"
				placeholder="Mobile Number"
				type="number"
				required
				defaultValue={mobileNumber}
			/>
			<MyInput
				name="pin"
				placeholder="4 Digit Pin"
				required
				type="password"
				defaultValue={pin}
			/>
			<MyInput
				name="confirmPin"
				placeholder="Confirm Pin"
				required
				type="password"
				defaultValue={confirmPin}
			/>
			<MyInput
				name="recoveryQuestion"
				placeholder="Recovery Question"
				defaultValue={recoveryQuestion}
				required
			/>
			<div className="relative w-full">
				<MyInput
					name="recoveryAnswer"
					placeholder="Recovery Answer"
					type="date"
					defaultValue={recoveryAnswer}
					required
					ref={recoveryAnswerRef}
				/>
				<FaCalendarAlt
					className="absolute right-[.85rem] hidden dark:flex hover:cursor-pointer text-sm top-[.90rem] text-slate-700 dark:text-slate-300"
					onClick={calendarHandler}
				/>
			</div>
		</div>
	);
}
