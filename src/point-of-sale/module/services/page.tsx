import MyInput from "@/components/custom/my-input";
import SampleTableImage from "@/public/sample-table-image.png";
import { Button } from "@/components/ui/button";
import MyIconBack from "@/components/custom/my-icon-back";

export default function ModuleServices() {
	return (
		<div className="flex flex-col gap-5 items-center py-12 px-4 absolute md:relative left-0 right-0 top-0 z-50 bg-white">
			<MyIconBack />
			<img
				src={SampleTableImage}
				alt="Sample Table Image"
				width={90}
				height={90}
				className="w-[90px] h-auto"
			/>

			<div className="space-y-1">
				<h2 className="font-bold text-lg">Coke in can</h2>
				<p className="text-xs">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sed
					numquam labore iste tenetur magnam!
				</p>
				<p className="font-semibold space-x-2">
					<span className="line-through text-red-500">P 50.00</span>
					<span>P 45.00</span>
				</p>
			</div>

			<hr className="w-full h-[1px] bg-black max-w-xl" />

			<div className="md:max-w-xl w-full">
				<h4 className="mb-2 font-semibold">Purchase Info</h4>
				<div className="w-full space-y-3">
					<MyInput name="quantity" placeholder="Quantity" />
					<MyInput name="discount" placeholder="Discount" />
				</div>
			</div>

			<hr className="w-full h-[1px] bg-black max-w-xl" />

			<div className="md:max-w-xl w-full">
				<h4 className="mb-2 font-semibold">Product Info</h4>
				<div className="w-full space-y-3">
					<MyInput name="unit" placeholder="Unit" />
					<MyInput name="costUnit" placeholder="Cost/Unit" />
					<MyInput name="grossMarginUnit" placeholder="Gross Margin/Unit" />
				</div>
			</div>

			<Button
				className="text-white bg-[#284B63] hover:bg-[#284B63]/90 w-full py-6 md:max-w-xl"
				size="lg">
				Add to cart - P 150.00
			</Button>
		</div>
	);
}
