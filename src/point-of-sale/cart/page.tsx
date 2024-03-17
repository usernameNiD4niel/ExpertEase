import HeaderWithBack from "@/components/custom/header-with-back";
import { AddService } from "@/components/icons";
import { Link } from "react-router-dom";
import CardCart from "./card";
import { orderSummary } from "@/constants/objects";

export default function CartPage() {
	return (
		<section className="fixed top-0 left-0 w-full md:ms-[320px] z-50">
			<HeaderWithBack text="Cart" />
			<div className="h-[300px] w-full blue-bg flex items-center justify-center gap-3">
				<h2 className="text-bold text-lg">
					<span className="text-sm">PHP</span>2,500.00
				</h2>
				<p>Jose P. Rizal</p>
			</div>

			{/* Order Summary */}
			<div>
				{/* Header */}
				<div>
					<h4>Order Summary</h4>
					<Link to={"#"} className="blue-text space-x-1">
						<AddService />
						<span>ADD ITEMS</span>
					</Link>
				</div>

				{/* Content */}
				<ul className="space-y-2">
					{orderSummary.map((order, index) => (
						<>
							<CardCart {...{ ...order }} key={index} />
							{index !== orderSummary.length - 1 && <hr />}
						</>
					))}
				</ul>
			</div>
		</section>
	);
}
