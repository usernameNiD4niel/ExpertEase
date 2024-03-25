import HeaderWithBack from "@/components/custom/header-with-back";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ServiceItem() {
	const [isEditable, setIsEditable] = useState(false);

	const location = useLocation();

	const pathname = useMemo(() => {
		const path = location.pathname;
		const splittedPath = path.split("/");
		const end = splittedPath[splittedPath.length - 1];

		return end;
	}, [location]);

	useEffect(() => {
		if (pathname === "add") {
			setIsEditable(true);
			console.log(isEditable);
		}
	}, [pathname, isEditable]);

	return (
		<section className="absolute top-0 left-0 flex items-center flex-col md:left-[320px] right-0 bg-white z-50 h-screen">
			<div className="fixed top-0 left-0 md:left-[320px] w-full">
				<HeaderWithBack
					text={pathname === "add" ? "Add Service" : "Update Service"}
				/>
			</div>

			<form className="w-full max-w-screen-md p-4 space-y-2 pt-20 -z-10">
				Form here...
			</form>
		</section>
	);
}
