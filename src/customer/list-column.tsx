import { Customer } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<Customer>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "fullName",
		header: "FULL NAME",
		cell: ({ row }) => {
			return (
				<div className="ml-0 flex flex-col">
					<span>{row.getValue("fullName")}</span>
					<span className="md:hidden">{row.getValue("address")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "address",
		header: "ADDRESS",
	},
	{
		accessorKey: "mobileNumber",
		header: "MOBILE NUMBER",
	},
];

export default column;
