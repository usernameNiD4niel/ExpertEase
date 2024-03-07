import { Cart } from "../icons";

export default function MyCart() {
	return (
		<div className="fixed bottom-3 left-8 right-8 hover:cursor-pointer md:ms-[320px] bg-[#047FFF] dark:bg-[#0A1526] rounded-md py-4 px-5 flex items-center justify-between">
			<div className="flex items-center gap-3 text-white">
				<Cart className="text-xl" />
				<div className="w-[1px] h-[25px] bg-white" />
				<span>5 Items</span>
			</div>
			<h4 className="font-semibold text-white">₱350.00</h4>
		</div>
	);
}
