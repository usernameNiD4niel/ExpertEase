import MyInput from "@/components/custom/my-input";
import SampleTableImage from "@/public/sample-table-image.png";
import { Button } from "@/components/ui/button";
import MyIconBack from "@/components/custom/my-icon-back";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AddService } from "@/components/icons";
import { Input } from "@/components/ui/input";

export default function ModuleServices() {
	return (
		<div className="flex flex-col gap-7 items-center py-12 px-4 absolute md:relative left-0 right-0 top-0 z-50 bg-white">
			<MyIconBack />
			<img
				src={SampleTableImage}
				alt="Sample Table Image"
				width={90}
				height={90}
				className="w-[90px] h-auto"
			/>

			<div className="space-y-1">
				<h2 className="w-full text-center font-bold text-lg">
					Regular Check-up
				</h2>
				<p className="w-full text-center text-xs">
					Use of Gym facilities for one day
				</p>
				<p className="font-semibold space-x-2">
					<span className="line-through text-red-500">P 50.00</span>
					<span>
						P 100.00 <span className="font-normal">/Session</span>
					</span>
				</p>
			</div>

			<hr className="w-full h-[1px] bg-black max-w-xl" />

			<div className="w-full md:max-w-xl">
				<MyInput
					name="quantity"
					placeholder="Quantity/Duration"
					className="w-full"
				/>
			</div>

			<hr className="w-full h-[1px] bg-black max-w-xl" />

			<div className="md:max-w-xl w-full space-y-3">
				<h4 className="mb-2 font-semibold">Add ons</h4>
				<div className="w-full space-y-3">
					<div className="w-full flex justify-between text-slate-500">
						<div className="flex items-center gap-2">
							<Checkbox defaultChecked name="analysis" id="analysis" disabled />
							<Label htmlFor="analysis">Analysis</Label>
						</div>
						<p>+100.00</p>
					</div>
					<hr className="w-full h-[1px] bg-slate-500 max-w-xl" />
					<div className="w-full flex justify-between text-slate-500">
						<div className="flex items-center gap-2">
							<Checkbox defaultChecked name="x_ray" id="x_ray" disabled />
							<Label htmlFor="x_ray">X-ray</Label>
						</div>
						<p>+100.00</p>
					</div>
				</div>
			</div>

			<hr className="w-full h-[1px] bg-black max-w-xl bg-opacity-10 mt-2" />

			<div className="md:max-w-xl w-full">
				<h4 className="mb-2 font-semibold">Service Provider</h4>
				<div className="w-full space-y-2">
					<MyInput name="search_name" placeholder="Search Name" />
					<div className="w-full flex justify-end items-center">
						<button className="text-blue-500 flex items-center gap-2">
							<AddService className="w-5 h-5 mt-1" /> <span>ADD</span>
						</button>
					</div>

					<div className="w-full space-y-2">
						<label htmlFor="fullName">Full Name</label>
						<Input disabled id="fullName" name="fullName" className="py-6" />
					</div>
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
