import { CustomerItemTabs } from "@/constants/enums";
import CustomerTabItemMutator from "../customer-tab-item-mutator";

export default function TableItem() {
	return (
		<div>
			<CustomerTabItemMutator tab={CustomerItemTabs.Profile} />
		</div>
	);
}
