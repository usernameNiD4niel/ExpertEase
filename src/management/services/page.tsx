import TabMutator from "@/components/custom/tab-mutator";
import { AvailableTabs } from "@/constants/enums";

export default function ManagementServices() {
	return (
		<div>
			<TabMutator currentTab={AvailableTabs["Service Management"]} />
			Services
		</div>
	);
}
