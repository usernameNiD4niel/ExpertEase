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
