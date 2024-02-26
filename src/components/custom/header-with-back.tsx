import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface HeaderWithBackProps {
	text: string;
}

export default function HeaderWithBack({ text }: HeaderWithBackProps) {
	const router = useNavigate();

	function handleBackClick() {
		router(-1);
	}

	return (
		<div className="w-full bg-[#1F2123]">
			<button
				className=" text-white flex gap-1 cursor-pointer py-5 px-3 items-center"
				onClick={handleBackClick}>
				<IoIosArrowBack className="me-1" />
				{text}
			</button>
		</div>
	);
}
