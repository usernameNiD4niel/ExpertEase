import { memo } from "react";

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
import { cn } from "@/lib/utils";

type Props = {
	placeholder: string;
	name?: string;
	disabled?: boolean;
	list: string[];
	commandPlaceholder?: string;
};

const MyComboboxResponsive = memo(
	({ placeholder, disabled, name, list }: Props) => {
		const [open, setOpen] = React.useState(false);
		const isDesktop = useMediaQuery("(min-width: 768px)");
		const [selectedItem, setSelectedItem] = React.useState("");

		if (isDesktop) {
			return (
				<>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								id={name}
								className={cn(
									"w-full justify-start font-normal hover:bg-transparent",
									selectedItem
										? "text-slate-800 hover:text-slate-800"
										: "text-slate-600 hover:text-slate-600",
								)}
								disabled={disabled}>
								{selectedItem ? <>{selectedItem}</> : <>{placeholder}</>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0" align="start">
							<CategoryList
								setOpen={setOpen}
								setSelectedItem={setSelectedItem}
								list={list}
							/>
						</PopoverContent>
					</Popover>
					<input
						hidden
						value={selectedItem}
						onChange={(e) => setSelectedItem(e.target.value)}
						name={name}
					/>
				</>
			);
		}

		return (
			<>
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button
							variant="outline"
							id={name}
							className={cn(
								"w-full justify-start font-normal hover:bg-transparent",
								selectedItem
									? "text-slate-800 hover:text-slate-800"
									: "text-slate-600 hover:text-slate-600",
							)}
							disabled={disabled}>
							{selectedItem ? <>{selectedItem}</> : <>{placeholder}</>}
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<div className="mt-4 border-t">
							<CategoryList
								setOpen={setOpen}
								setSelectedItem={setSelectedItem}
								list={list}
							/>
						</div>
					</DrawerContent>
				</Drawer>
				<input
					hidden
					value={selectedItem}
					onChange={(e) => setSelectedItem(e.target.value)}
					name={name}
				/>
			</>
		);
	},
);

const CategoryList = memo(
	({
		setOpen,
		setSelectedItem,
		list,
		commandPlaceholder,
	}: {
		setOpen: (open: boolean) => void;
		setSelectedItem: (item: string) => void;
		list: string[];
		commandPlaceholder?: string;
	}) => {
		return (
			<Command>
				<CommandInput placeholder={commandPlaceholder} autoFocus />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup>
						{list.map((item) => (
							<CommandItem
								key={item}
								value={item}
								onSelect={(value) => {
									setSelectedItem(item);
									console.log(`value: ${value} item: ${item}`);
									setOpen(false);
								}}>
								{item}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</Command>
		);
	},
);

export default MyComboboxResponsive;
