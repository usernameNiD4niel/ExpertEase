import HeaderWithBack from "@/components/custom/header-with-back";
import { Link } from "react-router-dom";

export default function AddCustomer() {
	return (
		<>
			<HeaderWithBack text="Add Customer" key={"AddCustomer"} />
			<section className="px-3 py-2 flex flex-col gap-3">
				<p className="text-sm">Select customer type</p>
				<hr />
				<Link to={"/customer-management/add/personal"} className="w-full">
					<DisplayLinks subtitle="For personal customers" title="Personal" />
				</Link>
				<hr />
				<Link to={"/customer-management/add/business"} className="w-full">
					<DisplayLinks subtitle="For business customers" title="Businesses" />
				</Link>
			</section>
		</>
	);
}

function DisplayLinks({
	subtitle,
	title,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<div className="w-full">
			<h4 className="font-semibold text-lg">{title}</h4>
			<p className="text-xs">{subtitle}</p>
		</div>
	);
}
