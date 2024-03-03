import { FaCheck } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { toast } from "sonner";

function displayMessage(isSuccess: boolean, customMessage: string) {
	return toast(
		<h3 className="flex flex-row gap-2 items-center">
			{isSuccess ? (
				<FaCheck className="text-green-500 text-xl" />
			) : (
				<MdOutlineError className="text-red-500 text-xl" />
			)}
			<span className="text-base">{customMessage}</span>
		</h3>,
	);
}

export { displayMessage };
