import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { memo } from "react";

interface MyModalProps {
	isDeleting: boolean;
	setIsDeleting: (isDeleting: boolean) => void;
	action?: () => void;
	title: string;
	description?: string;
	negativeText?: string;
	positiveText?: string;
}

const MyModal = memo(
	({
		isDeleting,
		setIsDeleting,
		action,
		title,
		description,
		negativeText,
		positiveText,
	}: MyModalProps) => {
		return (
			<AlertDialog open={isDeleting} onOpenChange={setIsDeleting}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>{title}</AlertDialogTitle>
						{description && (
							<AlertDialogDescription>{description}</AlertDialogDescription>
						)}
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={() => setIsDeleting(false)}>
							{negativeText ?? "Cancel"}
						</AlertDialogCancel>
						<AlertDialogAction onClick={action}>
							{positiveText ?? "Continue"}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		);
	},
);

export default MyModal;
