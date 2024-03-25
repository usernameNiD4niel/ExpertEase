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
		<div className={cn("w-full bg-black text-white flex gap-2", className)}>
			{tabs.map((tab_) => (
				<Link
					to={tab_.to}
					className={cn(
						tab === tab_.matcher
							? "text-slate-100 text-center border-b-4 border-slate-200 font-bold"
							: "text-slate-500 border-none text-center font-normal",
						"w-full md:w-[150px] text-center flex items-center justify-center h-[4em]",
					)}
					key={tab_.to}>
					{tab_.text}
				</Link>
			))}
		</div>
	);
}
