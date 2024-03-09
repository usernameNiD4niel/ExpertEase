import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownItem } from "@/constants/types";
import { memo } from "react";
import { IconType } from "react-icons/lib";

interface CustomerDetailsDropdownProps {
	triggerText: string;
	TriggerIcon?: IconType;
	items: DropdownItem[];
}

const CustomerDetailsDropdown = memo(
	({ items, TriggerIcon, triggerText }: CustomerDetailsDropdownProps) => {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						className="flex items-center gap-1 justify-center"
						variant={"outline"}>
						{triggerText}
						{TriggerIcon && <TriggerIcon className="mt-1" />}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{items.map((item) => (
						<DropdownMenuItem
							onClick={item.action}
							className="flex items-center gap-2 hover:cursor-pointer">
							{item.Icon && <item.Icon className="mt-[0.20rem]" />}
							{item.text}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
);

export default CustomerDetailsDropdown;
