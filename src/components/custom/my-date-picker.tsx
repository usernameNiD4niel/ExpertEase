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
}

const MyDatePicker = React.memo(
	({ date, setDate, placeholder }: MyDatePickerProps) => {
		return (
			<Popover modal>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							"w-full justify-between text-left font-normal",
							!date && "text-muted-foreground",
						)}>
						{date ? format(date, "PPP") : <span>{placeholder}</span>}
						<CalendarIcon className="mr-2 h-4 w-4" />
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
