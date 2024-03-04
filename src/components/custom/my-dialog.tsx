import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface MyDialogProps {
	button: JSX.Element;
	title: string;
	description: string;
	action: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	negativeText?: string;
	positiveText?: string;
}

export default function MyDialog({
	button,
	description,
	title,
	action,
	negativeText,
	positiveText,
}: MyDialogProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{button}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>
						{negativeText ? negativeText : "Cancel"}
					</AlertDialogCancel>
					<AlertDialogAction onClick={action}>
						{positiveText ? positiveText : "Continue"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
