import { ListTableType } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<ListTableType>[] = [
	{
		accessorKey: "name",
		header: "NAME",
	},
	{
		accessorKey: "location",
		header: "LOCATION",
	},
	{
		accessorKey: "mobileNumber",
		header: "MOBILE NUMBER",
	},
];

export default column;
