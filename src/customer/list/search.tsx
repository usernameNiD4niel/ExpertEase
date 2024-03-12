import * as React from "react";

import { useMediaQuery } from "@/hooks";
import { Button } from "@/components/ui/button";
import {
	Command,
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
import { getCustomerNames, searchCustomerTable } from "@/endpoints";
import { CommandLoading } from "cmdk";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Customer } from "@/constants/types";

type Props = {
	setData: (data: Customer[]) => void;
};

const ComboBoxResponsive = React.memo(({ setData }: Props) => {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [selectedName, setSelectedName] = React.useState<string>("");

	const router = useNavigate();

	const { data, isPending, isError } = useQuery({
		queryKey: ["customer", "search", "names"],
		queryFn: getCustomerNames,
	});

	console.log(`selected name ${selectedName}`);

	const fetchSearchQuery = React.useCallback(
		async (query: string) => {
			const data = await searchCustomerTable<Customer>(query, "name");
			setData(data);
		},
		[setData],
	);

	React.useEffect(() => {
		if (selectedName) {
			fetchSearchQuery(selectedName);
		}
	}, [selectedName, fetchSearchQuery]);

	const displayList = React.useMemo(() => {
		if (isError) {
			return (
				<div className="flex items-center justify-center">
					<p className="text-center">Failed to get all the customers</p>
				</div>
			);
		}
		return (
			<CustomerNameList
				setOpen={setOpen}
				setSelectedName={setSelectedName}
				isSearching={isPending}
				names={data ?? []}
			/>
		);
	}, [isPending, data, isError]);

	const handleSearchClear = React.useCallback(() => {
		setSelectedName("");
		router("/customer-management/list");
	}, [router]);

	if (isDesktop) {
		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							"w-full text-center font-normal justify-start py-6",
							selectedName
								? "text-slate-800 border border-slate-400"
								: "text-slate-400 hover:text-slate-400",
						)}>
						{selectedName ? (
							<p className="flex justify-between items-center w-full">
								<span>{selectedName}</span>
								<Trash2
									className="w-4 h-4 text-red-500"
									onClick={handleSearchClear}
								/>
							</p>
						) : (
							<>Search customer</>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0" align="start">
					{displayList}
					{/* {displayList} */}
				</PopoverContent>
			</Popover>
		);
	}

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}
			shouldScaleBackground
			closeThreshold={1}>
			<DrawerTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"w-full text-center font-normal justify-start py-6",
						selectedName
							? "text-slate-800 border border-slate-400"
							: "text-slate-400 hover:text-slate-400",
					)}>
					{selectedName ? (
						<p className="flex justify-between items-center w-full">
							<span>{selectedName}</span>
							<Trash2
								className="w-4 h-4 text-red-500"
								onClick={handleSearchClear}
							/>
						</p>
					) : (
						<>Search customer</>
					)}
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mt-4 border-t">{displayList}</div>
			</DrawerContent>
		</Drawer>
	);
});

export default ComboBoxResponsive;

function CustomerNameList({
	setOpen,
	setSelectedName,
	isSearching,
	names,
}: {
	setOpen: (open: boolean) => void;
	setSelectedName: (selectedName: string) => void;
	isSearching: boolean;
	names: string[];
}) {
	function displayCommandList() {
		if (isSearching) {
			return (
				<CommandLoading>
					<p className="text-sm text-center mt-2">Searching...</p>
				</CommandLoading>
			);
		}

		if (names.length === 0) {
			return (
				<div className="text-sm flex justify-center my-4">
					No customer exists.
				</div>
			);
		}

		return (
			<CommandGroup className="bg-slate-100">
				{names.map((name) => (
					<CommandItem
						key={name}
						value={name}
						onSelect={(value) => {
							console.log(`value changed: ${value}`);
							setSelectedName(
								names.find(
									(_value) =>
										_value.toLocaleLowerCase() === value.toLowerCase(),
								) ?? "",
							);
							setOpen(false);
						}}>
						{name}
					</CommandItem>
				))}
			</CommandGroup>
		);
	}
	return (
		<Command>
			<CommandList>
				<CommandInput
					placeholder="Search a customer"
					autoFocus
					disabled={isSearching || names.length === 0}
				/>
				{displayCommandList()}
			</CommandList>
		</Command>
	);
}
