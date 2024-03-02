import MyDatePicker from "@/components/custom/my-date-picker";
import MyInput from "@/components/custom/my-input";
import React, { memo } from "react";

interface AccountDetailsProps {
	mobileNumber: string;
	pin: string;
	confirmPin: string;
	recoveryQuestion: string;
	recoveryAnswer: Date | undefined;

	setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
	setPin: React.Dispatch<React.SetStateAction<string>>;
	setConfirmPin: React.Dispatch<React.SetStateAction<string>>;
	setRecoveryQuestion: React.Dispatch<React.SetStateAction<string>>;
	setRecoveryAnswer: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const AccountDetails = memo(
	({
		confirmPin,
		mobileNumber,
		pin,
		recoveryAnswer,
		recoveryQuestion,
		setConfirmPin,
		setMobileNumber,
		setPin,
		setRecoveryAnswer,
		setRecoveryQuestion,
	}: AccountDetailsProps) => {
		return (
			<div className="flex w-full flex-col gap-2">
				<MyInput
					name="mobileNumber"
					placeholder="Mobile Number"
					type="number"
					required
					defaultValue={mobileNumber}
					onChange={(e) => setMobileNumber(e.target.value)}
				/>

				<MyInput
					name="pin"
					placeholder="4 Digit Pin"
					required
					type="password"
					defaultValue={pin}
					pattern="[0-9]{4}"
					inputMode="numeric"
					title="Pin must be 4 digit numbers"
					onChange={(e) => setPin(e.target.value)}
				/>

				<MyInput
					name="confirmPin"
					placeholder="Confirm Pin"
					required
					type="password"
					defaultValue={confirmPin}
					onChange={(e) => setConfirmPin(e.target.value)}
				/>

				<MyInput
					name="recoveryQuestion"
					placeholder="Recovery Question"
					defaultValue={recoveryQuestion}
					required
					onChange={(e) => setRecoveryQuestion(e.target.value)}
				/>

				<MyDatePicker
					placeholder="Recovery Answer"
					setDate={setRecoveryAnswer}
					date={recoveryAnswer}
					key={"recoveryAnswerAccountDetails"}
				/>
			</div>
		);
	},
);

export default AccountDetails;
