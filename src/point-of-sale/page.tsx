import MyInput from "@/components/custom/my-input";
import TabMutator from "@/components/custom/tab-mutator";
import { AddService } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AvailableTabs } from "@/constants/enums";
import { Customer } from "@/constants/types";
import { searchCustomerTable } from "@/endpoints";
import { useDebounce, useNavigation } from "@/hooks";
import {
	// ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import ComboBoxResponsive from "./combobox-responsive";

export default function PointOfSalePage() {
	const router = useNavigate();
	const [setActive] = useNavigation((state) => [state.setActiveTab]);
	const [search, setSearch] = useState("");
	const [customers, setCustomers] = useState<Customer[]>([]);

	const debounceSearch = useDebounce(search);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setActive(AvailableTabs["Point of Sale"]), []);

	function handleFormSubmit(form: FormEvent<HTMLFormElement>) {
		form.preventDefault();
		router("/point-of-sale/module/services");
	}

	// const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
	// 	setSearch(e.target.value);
	// }, []);

	const handleSearchRequest = useCallback(async (search: string) => {
		const customers = await searchCustomerTable<Customer>(search, "name");
		setCustomers(customers);
		setSearch("");
	}, []);

	useEffect(() => {
		if (debounceSearch) {
			handleSearchRequest(debounceSearch);
		}
	}, [debounceSearch, handleSearchRequest]);

	return (
		<div className="p-3 headingMargin md:py-4 md:px-12">
			<TabMutator currentTab={AvailableTabs["Point of Sale"]} />
			<div className="p-2 flex flex-col w-full justify-end items-end">
				<ComboBoxResponsive />
				{/* <MyInput
					placeholder="Search Customer"
					className="w-full filter-none"
					name=""
					value={search}
					onChange={handleSearch}
				/> */}
				<button className="p-2 bg-transparent flex items-center justify-center gap-2 text-[#284B63]">
					<span className="mt-[3px]">
						<AddService />
					</span>
					<span className="text-sm">ADD CUSTOMER</span>
				</button>
			</div>

			<form className="p-3 flex flex-col gap-y-5" onSubmit={handleFormSubmit}>
				<h2 className="font-bold">Details</h2>

				<div className="w-full flex flex-col gap-y-5">
					{customers.map((customer) => (
						<>
							<MyInput
								placeholder="Full Name"
								name="fullName"
								value={customer.fullName}
							/>
							<MyInput placeholder="Address" name="address" />
							<MyInput placeholder="Mobile Number" name="mobileNumber" />
						</>
					))}
				</div>

				<Button
					className="rounded-md bg-[#284B63] absolute md:static bottom-3 text-white left-4 right-4 hover:bg-[#284B63]/90"
					size="lg"
					type="submit">
					PROCEED
				</Button>
			</form>
		</div>
	);
}
