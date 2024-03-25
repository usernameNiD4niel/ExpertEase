import { Switch } from "@/components/ui/switch";
import { ServicesManagement } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<ServicesManagement>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "services",
		header: () => <div className="md:ms-6">SERVICES</div>,
		cell: ({ row }) => {
			return (
				<div className="md:ml-6 flex flex-col gap-4">
					<p className="space-y-2 flex flex-col">
						<span className="font-semibold md:font-normal text-base md:text-sm text-slate-600 md:text-black">
							{row.getValue("services")}
						</span>
						<span className="text-xs md:hidden md:text-sm">
							{row.getValue("description")}
						</span>
					</p>
					<p className="space-x-1 md:hidden">
						<span className="text-sm md:text-base font-semibold">
							₱{row.getValue("price")}
						</span>
						/
						<span className="text-sm md:text-base">{row.getValue("unit")}</span>
					</p>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "DESCRIPTION",
	},
	{
		accessorKey: "unit",
		header: "UNIT",
	},
	{
		accessorKey: "price",
		header: "PRICE",
		cell: ({ row }) => {
			return (
				<div>
					<span className="text-sm md:text-base font-semibold">
						₱{row.getValue("price")}
					</span>
					/<span className="text-sm md:text-base">{row.getValue("unit")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "provider",
		header: () => <div className="hidden md:flex">PROVIDER</div>,
		cell: ({ row }) => {
			return (
				<Switch
					defaultChecked={row.getValue("provider") === "true"}
					// disabled
				/>
			);
		},
	},
];

export default column;
