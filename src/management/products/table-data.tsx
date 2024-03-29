import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ProductsManagement } from "@/constants/types";
import { searchPOSServicesTable } from "@/endpoints";
import { useDebounce, useWidthSize } from "@/hooks";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInput from "@/components/custom/my-input";
import column from "./column";

interface ListTableProps {
	data?: ProductsManagement[];
}

export default function ListTable({ data }: ListTableProps) {
	const router = useNavigate();
	const [search, setSearch] = useState("");

	const debouncedValue = useDebounce(search);

	const width = useWidthSize();

	const [newData, setNewData] = useState(data ?? []);

	const table = useReactTable({
		columns: column,
		data: newData,
		getCoreRowModel: getCoreRowModel(),
		initialState: {
			columnVisibility: {
				id: false,
			},
		},
	});

	function handleNavigation(id: string) {
		router(`/management/products/${id}`);
	}

	const handleSearchRequest = useCallback(async () => {
		const products = await searchPOSServicesTable<ProductsManagement>(
			debouncedValue,
			"products",
		); // ! create a custom connector for this
		// setNewData(products);
		console.log(products);
	}, [debouncedValue]);

	useEffect(() => {
		if (debouncedValue) {
			handleSearchRequest();
		} else {
			setNewData(data ?? []);
		}
	}, [debouncedValue, handleSearchRequest, data]);

	function handleWidthChange(width: number) {
		if (width < 768) {
			table.getColumn("description")?.toggleVisibility(false);
			table.getColumn("category")?.toggleVisibility(false);
		} else {
			table.getColumn("description")?.toggleVisibility(true);
			table.getColumn("category")?.toggleVisibility(true);
		}
	}
	useLayoutEffect(() => {
		setTimeout(() => handleWidthChange(width), 200);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	const handleOnChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSearch(event.target.value);
		},
		[],
	);

	return (
		<div>
			<div className="flex flex-col w-full justify-end items-end mb-4">
				<MyInput
					placeholder="Search Products"
					value={search}
					onChange={handleOnChange}
					className="w-full py-6 border-slate-300"
					name=""
				/>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
														// eslint-disable-next-line no-mixed-spaces-and-tabs
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									onClick={() => handleNavigation(row.getValue("id"))}
									className="cursor-pointer">
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={column.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
