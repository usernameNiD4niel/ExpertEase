import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import { IoClose } from "react-icons/io5";

interface MyAlertProps {
	isSuccess: boolean;
	title?: string;
	description: string;
}

const MyAlert = memo(({ description, isSuccess, title }: MyAlertProps) => {
	const [isOpen, setIsOpen] = useState(true);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className={cn(
				"text-white rounded-md p-3 w-full relative",
				isSuccess
					? "bg-green-500 dark:bg-green-700"
					: "bg-red-500 dark:bg-red-700",
			)}>
			{title && <h4 className="font-semibold text-sm">{title}</h4>}
			<p className="text-sm">{description}</p>
			<IoClose
				className="absolute top-2 right-2 hover:cursor-pointer"
				onClick={() => setIsOpen(false)}
			/>
		</div>
	);
});

export default MyAlert;
