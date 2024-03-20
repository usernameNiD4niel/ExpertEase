import * as React from "react";

import { useMediaQuery } from "@/hooks";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
	setValue: (value: string) => void;
	value: string;
	names: string[];
};

const ComboBoxResponsive = React.memo(({ setValue, names, value }: Props) => {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" className="w-full justify-start">
						{value ? <>{value}</> : <>✔️ Tag customer</>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0" align="start">
					<CustomerList setOpen={setOpen} setValue={setValue} names={names} />
				</PopoverContent>
			</Popover>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline" className="w-full justify-start">
					{value ? <>{value}</> : <>✔️ Tag customer</>}
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mt-4 border-t">
					<CustomerList setOpen={setOpen} names={names} setValue={setValue} />
				</div>
			</DrawerContent>
		</Drawer>
	);
});

export default ComboBoxResponsive;

function CustomerList({
	setOpen,
	setValue,
	names,
}: {
	setOpen: (open: boolean) => void;
	setValue: (value: string) => void;
	names: string[];
}) {
	return (
		<Command>
			<CommandInput placeholder="Filter customer..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup>
					{names.map((name) => (
						<CommandItem
							key={name}
							value={name}
							onSelect={(value) => {
								setValue(value);
								console.log(`value ${value}`);
								console.log(`name ${name}`);
								setOpen(false);
							}}>
							{name}
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</Command>
	);
}
