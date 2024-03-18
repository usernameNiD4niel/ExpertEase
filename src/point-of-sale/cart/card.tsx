import { CartProps } from "@/constants/types";

export default function CardCart({
	price,
	subtitle,
	times,
	title,
	discount,
}: CartProps) {
	return (
		<li className="w-full flex justify-between py-4 items-center">
			<div className="w-full flex items-center gap-x-7">
				{/* Times */}
				<div className="blue-text font-semibold text-sm px-2 py-1 rounded border border-slate-400 border-opacity-45 text-center">
					{times}x
				</div>
				{/* Text Content */}
				<div className="">
					<h5 className="text-lg font-bold text-slate-700">{title}</h5>
					<p className="text-xs text-slate-600">{subtitle}</p>
				</div>
			</div>

			{/* Prices */}
			<div className="space-y-2">
				<p className="text-lg text-slate-600">₱{price}.00</p>
				{discount && <p className="text-xs text-red-500">- ₱{discount}.00</p>}
			</div>
		</li>
	);
}
