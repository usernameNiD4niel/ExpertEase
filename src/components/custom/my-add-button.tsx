import { memo } from "react";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface MyAddButtonProps {
	text: string;
	endpoint: string;
}

const MyAddButton = memo(({ endpoint, text }: MyAddButtonProps) => {
	return (
		<Link
			to={endpoint}
			className="flex items-center justify-center text-center gap-1 fixed bottom-6 right-4 md:right-8 p-4 md:py-3 md:px-8 text-white rounded-full bg-[#284B63]">
			<IoAddOutline className="w-6 h-6 md:w-5 md:h-5" />
			<span className="hidden md:block">{text}</span>
		</Link>
	);
});

export default MyAddButton;
