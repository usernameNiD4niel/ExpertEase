import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface MyDatePickerProps {
	date?: Date;
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
	placeholder: string;
	disabled?: boolean;
}

const MyDatePicker = React.memo(
	({ date, setDate, placeholder, disabled }: MyDatePickerProps) => {
		return (
			<Popover modal>
				<PopoverTrigger asChild disabled={disabled}>
					<Button
						variant={"outline"}
						disabled={disabled}
						className={cn(
							"dark:bg-transparent border-slate-400 py-6 w-full font-normal",
							// !date && "text-muted-foreground",
						)}>
						{date ? (
							<span className="w-full text-start flex items-center justify-between">
								{format(date, "PPP")}
								<CalendarIcon className="w-3 h-3" />
							</span>
						) : (
							<span className="w-full text-start flex items-center justify-between">
								{placeholder} <CalendarIcon className="w-3 h-3" />
							</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		);
	},
);

export default MyDatePicker;
