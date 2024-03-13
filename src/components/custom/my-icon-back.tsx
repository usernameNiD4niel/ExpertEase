import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function MyIconBack() {
	const router = useNavigate();

	function handleBack() {
		router(-1);
	}

	return (
		<IoIosCloseCircle
			className="w-6 h-6 absolute top-2 left-2 hover:cursor-pointer text-slate-500"
			onClick={handleBack}
		/>
	);
}
