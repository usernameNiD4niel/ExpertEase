import { TabType } from "@/constants/types";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type Props = {
	tabs: TabType[];
	className?: string;
};

export default function MyTab({ tabs, className }: Props) {
	const location = useLocation();

	const splittedLocation = location.pathname.split("/");
	const tab = splittedLocation[splittedLocation.length - 1];

	return (
		<div
			className={cn("w-full bg-black text-white flex items-center", className)}>
			{tabs.map((tab_) => (
				<Link
					to={tab_.to}
					className={cn(
						"py-5 px-6 text-center flex-1 md:flex-none",
						tab === tab_.matcher
							? "font-bold text-white border-b-4 border-white"
							: "text-slate-400 font-normal",
					)}
					key={tab_.to}>
					{tab_.text}
				</Link>
			))}
		</div>
	);
}
