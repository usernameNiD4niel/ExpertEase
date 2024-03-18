import HeaderWithBack from "@/components/custom/header-with-back";
import { AddService } from "@/components/icons";
import { Link } from "react-router-dom";
import CardCart from "./card";
import { orderSummary } from "@/constants/objects";
import { Input } from "@/components/ui/input";

export default function CartPage() {
	return (
		<section className="fixed top-0 left-0 w-full md:ms-[320px] z-50 bottom-0 right-0 overflow-auto">
			<HeaderWithBack text="Cart" />
			<div className="md:w-[calc(100%-300px)] w-full flex flex-col items-center mb-10">
				<div className="w-full p-6 blue-bg flex items-center flex-col">
					<h2 className="font-semibold space-x-1 text-2xl md:text-3xl w-full text-center">
						<span className="text-xs">PHP</span>
						<span>2,500.00</span>
					</h2>
					<p className="font-semibold">Jose P. Rizal</p>
				</div>
				{/* Order Summary */}
				<div className="w-full md:max-w-4xl mt-4">
					{/* Header */}
					<div className="w-full flex justify-between items-center my-2 px-4">
						<h4 className="font-bold">Order Summary</h4>
						<Link
							to={"#"}
							className="text-sm blue-text space-x-1 flex items-center">
							<AddService className="mt-[0.20rem]" />
							<span>ADD ITEMS</span>
						</Link>
					</div>
					{/* Content */}
					<ul className=" px-4">
						{orderSummary.map((order, index) => (
							<>
								<CardCart {...{ ...order }} key={index} />
								<hr />
							</>
						))}
					</ul>

					{/* Subtotal */}
					<div className="w-full space-y-1 px-4 my-4">
						<div className="w-full flex items-center justify-between">
							<p className="text-lg">Subtotal</p>
							<h5 className="font-bold text-lg">₱90.00</h5>
						</div>
						<div className="w-full flex items-center justify-between text-red-500">
							<p>Discounts</p>
							<h5 className="">-₱25.00</h5>
						</div>
					</div>
				</div>

				{/* General Discount */}
				<div className="w-full md:max-w-4xl mt-4 space-y-2">
					<h3>General Discount</h3>
					<div className="relative w-full">
						<Input placeholder="0.00" className="w-full py-6 pe-10" />
						<span className="absolute right-4 top-3 text-lg">%</span>
					</div>
				</div>

				{/* Bill Summary */}
				<div className="w-full md:max-w-4xl mt-4 space-y-2">
					<h3>Bill Summary</h3>
					<div className="w-full space-y-2">
						{/* Subtotal */}
						<div className="w-full flex items-center justify-between">
							<p>Subtotal</p>
							<p className="space-x-1">
								<span className="text-xs md:text-sm">PHP</span>
								<span>2,500.00</span>
							</p>
						</div>

						{/* Total Discount */}
						<div className="w-full flex items-center justify-between">
							<p>Total Discounts</p>
							<p className="space-x-1">
								<span className="text-xs md:text-sm">- PHP</span>
								<span>500.00</span>
							</p>
						</div>

						{/* VAT */}
						<div className="w-full flex items-center justify-between">
							<p>VAT</p>
							<p className="space-x-1">
								<span className="text-xs md:text-sm">- PHP</span>
								<span>50.00</span>
							</p>
						</div>

						<hr className="w-full" />

						{/* Total Amount */}
						<div className="w-full flex items-center justify-between font-semibold blue-text">
							<h2 className="text-xl">TOTAL AMOUNT</h2>
							<p className="space-x-1 text-xl">
								<span>PHP</span>
								<span>2,550.00</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
