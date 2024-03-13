import { Services } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<Services>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "service",
		header: () => <div className="md:ms-6">SERVICE</div>,
		cell: ({ row }) => {
			return (
				<div className="md:ml-6 flex flex-col">
					<span>{row.getValue("service")}</span>
					<span className="md:hidden">{row.getValue("description")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "DESCRIPTION",
	},
	{
		accessorKey: "price",
		header: "PRICE",
	},
];

export default column;
