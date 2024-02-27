import { CustomerTabs } from "@/constants/enums";
import { useCustomerTab } from "@/hooks";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function CustomerTab() {
	const [activeTab, setActiveTab] = useCustomerTab((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	function handleTab(tab: CustomerTabs) {
		setActiveTab(tab);
	}

	function getClassname(tab: CustomerTabs): string {
		if (tab === activeTab) {
			// * This is the current active tab
			return "text-slate-100 text-center border-b-4 border-slate-200 font-bold";
		}
		return "text-slate-500 border-none text-center font-normal";
	}

	return (
		<>
			<Link
				to={"/customer-management/list"}
				onClick={() => handleTab(CustomerTabs.List)}
				className={cn(
					getClassname(CustomerTabs.List),
					"w-full md:w-[150px] text-center flex items-center justify-center h-[4em]",
				)}>
				List
			</Link>
			<Link
				to={"/customer-management/analytics"}
				onClick={() => handleTab(CustomerTabs.Analytics)}
				className={cn(
					getClassname(CustomerTabs.Analytics),
					"w-full md:w-[150px] text-center flex items-center justify-center h-[4em]",
				)}>
				Analytics
			</Link>
		</>
	);
}
