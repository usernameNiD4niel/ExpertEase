"use client";

import { POSTab } from "@/constants/enums";
import { usePOSTab } from "@/hooks";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Tabs() {
	const [activeTab, setActiveTab] = usePOSTab((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	function handleTab(tab: POSTab) {
		setActiveTab(tab);
	}

	function getClassname(tab: POSTab): string {
		if (tab === activeTab) {
			// * This is the current active tab
			return "text-slate-100 text-center border-b-4 border-slate-200 font-bold";
		}
		return "text-slate-500 border-none text-center font-normal";
	}

	return (
		<>
			<Link
				to={"/point-of-sale/module/services"}
				onClick={() => handleTab(POSTab.Service)}
				className={cn(
					getClassname(POSTab.Service),
					"w-full md:w-[150px] text-center flex items-center justify-center h-[4em]",
				)}>
				Service
			</Link>
			<Link
				to={"/point-of-sale/module/products"}
				onClick={() => handleTab(POSTab.Product)}
				className={cn(
					getClassname(POSTab.Product),
					"w-full md:w-[150px] text-center flex items-center justify-center h-[4em]",
				)}>
				Product
			</Link>
		</>
	);
}
