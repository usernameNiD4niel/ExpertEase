import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectType } from "@/constants/types";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface MySelectProps {
	name: string;
	width?: string;
	isRequired: boolean;
	isDisabled?: boolean;
	placeholder: string;
	items: SelectType[];
	defaultValue?: string;
}

const MySelect = memo(
	({
		items,
		isRequired,
		name,
		placeholder,
		defaultValue,
		width,
		isDisabled,
	}: MySelectProps) => {
		return (
			<Select name={name} required={isRequired} value={defaultValue}>
				<SelectTrigger
					className={cn(
						width ? width : "w-full",
						" dark:bg-transparent dark:border border-slate-400 py-6",
					)}
					disabled={isDisabled}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{items.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		);
	},
);

export default MySelect;
