import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { HiMiniUser, HiMiniUsers } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";

import "@/styles/remove-input-spinner.css";
import { FaBusinessTime } from "react-icons/fa";
import RegisterForm from "./register-form";

export default function RegistrationTabs() {
	const [currentTab, setCurrentTab] = useState("personal_details_1");

	const iconClass = "w-6 h-5";

	function handleTabValueChange(value: string) {
		setCurrentTab(value);
	}

	return (
		<Tabs
			value={currentTab}
			onValueChange={handleTabValueChange}
			className="w-full flex flex-col">
			<TabsList className="flex gap-3 h-[40px]">
				<TabsTrigger value="personal_details_1">
					<HiMiniUser className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="personal_details_2"
					disabled={currentTab === "personal_details_1"}>
					<HiMiniUsers className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="account_details"
					disabled={
						currentTab === "personal_details_1" ||
						currentTab === "personal_details_2"
					}>
					<MdManageAccounts className={iconClass} />
				</TabsTrigger>
				<TabsTrigger
					value="business_details"
					disabled={
						currentTab === "personal_details_1" ||
						currentTab === "personal_details_2" ||
						currentTab === "account_details"
					}>
					<FaBusinessTime className={iconClass} />
				</TabsTrigger>
			</TabsList>
			<RegisterForm currentTab={currentTab} setCurrentTab={setCurrentTab} />
		</Tabs>
	);
}
