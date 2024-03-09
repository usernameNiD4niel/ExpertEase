import { AvailableTabs } from "@/constants/enums";
import { memo, useMemo } from "react";
import TabMutator from "./tab-mutator";
import HeaderWithBack from "./header-with-back";

const DisplayStickyHeader = memo(() => {
	const tabMutator = useMemo(
		() => <TabMutator currentTab={AvailableTabs["Customer Management"]} />,
		[],
	);

	return (
		<div className="fixed top-0 left-0 w-full md:ms-[320px] z-50">
			{tabMutator}
			<HeaderWithBack
				text="Customer Details"
				key={"CustomerDetailsItemsHeader"}
			/>
		</div>
		// For sibling class: className="flex gap-4 flex-col p-4 my-4 md:my-16 w-full max-w-4xl"
	);
});

export default DisplayStickyHeader;
