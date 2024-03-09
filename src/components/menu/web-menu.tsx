import { AvailableTabs } from "@/constants/enums";
import { useNavigation } from "@/hooks";
import navigationText from "./navigation-text";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function WebMenu() {
	const [activeTab, setActiveTab] = useNavigation((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	const router = useNavigate();

	function handleMenuNavigation(tab: AvailableTabs, url: string) {
		setActiveTab(tab);
		router(url);
	}

	return (
		<>
			<ul className="w-full flex flex-col gap-5">
				{navigationText.map((item, index) => (
					<li key={`${item}-${index}`} className="w-full">
						<button
							className={cn(
								"w-full px-4 cursor-pointer text-start",
								activeTab === item.tab
									? "text-[#284B63] bg-white py-2 rounded-md font-bold"
									: "text-white bg-transparent",
							)}
							onClick={() => handleMenuNavigation(item.tab, item.link)}>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
