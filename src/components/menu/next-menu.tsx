import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { useNavigation } from "@/hooks";
import { AvailableTabs } from "@/constants/enums";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoChevronBackOutline } from "react-icons/io5";

export default function NextMenu() {
	const [activeTab, setActiveTab] = useNavigation((state) => [
		state.activeTab,
		state.setActiveTab,
	]);

	const publiClassDrawer = "text-white p-2 text-base flex items-center gap-2";
	const buttonClass =
		"flex gap-x-3 py-2 mb-2 font-medium mx-3 px-2 text-md rounded-md items-center transition-opacity duration-300 w-full";
	const hoverButtonClass =
		"hover:text-[#284B63] hover:font-semibold hover:bg-white";

	function handleMenuNavigation(tab: AvailableTabs) {
		setActiveTab(tab);
	}

	const SheetCloseComp = ({
		text,
		availableTabs,
		to,
	}: {
		text: string;
		availableTabs: AvailableTabs;
		to: string;
	}) => {
		return (
			<SheetClose asChild className="w-full flex flex-col">
				<Link
					to={to}
					className={`${buttonClass} ${
						activeTab === availableTabs
							? "text-[#284B63] font-semibold bg-slate-50"
							: "text-white"
					} ${hoverButtonClass}`}
					onClick={() => handleMenuNavigation(availableTabs)}>
					<span className="w-full text-start">{text}</span>
				</Link>
			</SheetClose>
		);
	};

	return (
		<Sheet>
			<SheetTrigger>
				<Button
					className="md:hidden text-white text-2xl w-fit"
					variant={"ghost"}>
					<HiOutlineMenuAlt3 />
				</Button>
			</SheetTrigger>
			<SheetContent
				side={"right"}
				className="bg-[#284B63] overflow-y-auto h-full">
				<SheetHeader className="h-full">
					<SheetTitle className="flex items-center justify-center relative">
						<SheetClose
							asChild
							className="w-full bg-[#284B63] flex hover:bg-white hover:text-[#284B63] z-20 rounded-md hover:cursor-pointer">
							<p className={publiClassDrawer}>
								<span className="text-xl">
									<IoChevronBackOutline />
								</span>
								Menu
							</p>
						</SheetClose>
						<p className="bg-[#284B63] z-10 w-6 h-6 absolute -right-3 -top-3"></p>
					</SheetTitle>
					<SheetDescription className="flex w-full flex-col items-center justify-between h-full py-2">
						<p className="flex w-full flex-col items-center h-full">
							<SheetCloseComp
								text="Analytics"
								availableTabs={AvailableTabs.Analytics}
								to="/"
							/>
							<SheetCloseComp
								text="Point of Sale"
								to="/point-of-sale"
								availableTabs={AvailableTabs["Point of Sale"]}
							/>
							<SheetCloseComp
								text="Pet History"
								to="/pet-history"
								availableTabs={AvailableTabs["Pet History"]}
							/>
							<SheetCloseComp
								text="Customer Management"
								to="/customer-management/list"
								availableTabs={AvailableTabs["Customer Management"]}
							/>
							<SheetCloseComp
								text="Product Management"
								to="/management/products"
								availableTabs={AvailableTabs["Product Management"]}
							/>
							<SheetCloseComp
								text="Service Management"
								to="/management/services"
								availableTabs={AvailableTabs["Service Management"]}
							/>
							<SheetCloseComp
								text="Attendance Management"
								to="/attendance-management"
								availableTabs={AvailableTabs["Attendance Management"]}
							/>
							<SheetCloseComp
								text="Transaction Details"
								to="/transaction-details"
								availableTabs={AvailableTabs["Transaction Details"]}
							/>
						</p>

						<SheetCloseComp
							text="Account"
							to="/account"
							availableTabs={AvailableTabs.Account}
						/>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>

		// <Navbar
		// 	isMenuOpen={isMenuOpen}
		// 	onMenuOpenChange={setIsMenuOpen}
		// 	className="bg-[#284B63] md:hidden">
		// 	<NavbarContent justify="start" className="w-fit"></NavbarContent>

		// 	{!isMenuOpen && (
		// 		<NavbarContent className="sm:hidden" justify="center">
		// 			<NavbarBrand>
		// 				<p className="font-bold text-inherit text-white">Expert Ease</p>
		// 			</NavbarBrand>
		// 		</NavbarContent>
		// 	)}

		// 	<NavbarMenu className="bg-[#284B63] space-y-2">
		// 		{navigationText.map((item, index) => (
		// 			<NavbarMenuItem key={`${item}-${index}`}>
		// 				<Link
		// 					className={cn(
		// 						activeTab === item.tab
		// 							? "text-[#284B63] bg-white py-2 rounded font-bold"
		// 							: "text-white bg-[#284B63]",
		// 						"w-full",
		// 						"px-4",
		// 					)}
		// 					href={item.link}
		// 					size="sm"
		// 					onClick={() => handleMenuNavigation(item.tab)}>
		// 					{item.label}
		// 				</Link>
		// 			</NavbarMenuItem>
		// 		))}
		// 	</NavbarMenu>

		// 	<NavbarContent className="sm:hidden" justify="end">
		// 		<NavbarMenuToggle
		// 			aria-label={isMenuOpen ? "Close menu" : "Open menu"}
		// 		/>
		// 	</NavbarContent>
		// </Navbar>
	);
}
