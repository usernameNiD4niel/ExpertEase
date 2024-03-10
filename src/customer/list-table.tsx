import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Customer } from "@/constants/types";
import { useWidthSize } from "@/hooks";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import column from "./list-column";
import ComboBoxResponsive from "./list/search";

interface ListTableProps<TValue> {
	columns: ColumnDef<Customer, TValue>[];
	data: Customer[];
}

export default function ListTable<TValue>({
	columns,
	data,
}: ListTableProps<TValue>) {
	const router = useNavigate();

	const width = useWidthSize();

	const [newData, setNewData] = useState(data);

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
		router(`/customer-management/list/${id}`);
	}

	const handleWidthChange = useCallback(
		(width: number) => {
			if (width < 768) {
				table.getColumn("address")?.toggleVisibility(false);
			} else {
				table.getColumn("address")?.toggleVisibility(true);
			}
		},
		[table],
	);

	useLayoutEffect(() => {
		setTimeout(() => handleWidthChange(width), 200);
	}, [width, handleWidthChange]);

	return (
		<div>
			<div className="flex flex-col w-full justify-end items-end mb-4">
				{/* <MyInput
					placeholder="Search Customer"
					value={search}
					onChange={handleOnChange}
					className="w-full py-6"
					name=""
				/> */}
				<ComboBoxResponsive setData={setNewData} />
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
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
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
