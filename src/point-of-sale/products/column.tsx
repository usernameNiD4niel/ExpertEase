import { Products } from "@/constants/types";
import { ColumnDef } from "@tanstack/react-table";

const column: ColumnDef<Products>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "product",
		header: () => <div className="md:ms-6">PRODUCT</div>,
		cell: ({ row }) => {
			const discount = row.getValue("discount");

			return (
				<div className="md:ml-6 flex flex-col">
					<span>{row.getValue("product")}</span>
					<span className="md:hidden">{row.getValue("description")}</span>
					<span className="md:hidden">{row.getValue("category")}</span>
					{discount !== "0" && (
						<span className="md:hidden text-red-500 line-through">
							₱{discount as string}.00
						</span>
					)}
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "DESCRIPTION",
	},
	{
		accessorKey: "category",
		header: "CATEGORY",
	},
	{
		accessorKey: "unit",
		header: "UNIT",
	},
	{
		accessorKey: "discount",
		header: "DISCOUNT",
	},
	{
		accessorKey: "price",
		header: "PRICE",
		cell: ({ row }) => {
			const discount = row.getValue("discount");
			return (
				<div className="flex space-x-1 items-center">
					{discount !== "0" && (
						<span className="text-red-500 line-through text-sm hidden md:flex">
							₱{discount as string}.00
						</span>
					)}
					<span className="font-semibold">{row.getValue("price")}</span>
					<span className="text-xs">/{row.getValue("unit")}</span>
				</div>
			);
		},
	},
];

export default column;
