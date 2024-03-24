import { memo } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
	triggerChild: React.ReactNode;
	withHeader: boolean;
	title?: string;
	description?: string;
	titleClass?: string;
	descriptionClass?: string;
	content?: React.ReactNode;
};

const MyDismissableDialog = memo(
	({
		triggerChild,
		withHeader,
		description,
		title,
		descriptionClass,
		titleClass,
		content,
	}: Props) => {
		return (
			<Dialog>
				<DialogTrigger asChild>{triggerChild}</DialogTrigger>
				<DialogContent>
					{withHeader && (
						<DialogHeader>
							<DialogTitle className={cn(titleClass)}>{title}</DialogTitle>
							<DialogDescription className={cn(descriptionClass)}>
								{description}
							</DialogDescription>
						</DialogHeader>
					)}
					{content}
				</DialogContent>
			</Dialog>
		);
	},
);

export default MyDismissableDialog;
