import React, { memo } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	defaultValue?: string;
}

const MemoizedInput = React.forwardRef<HTMLInputElement, MyInputProps>(
	({ name, className, ...props }, ref) => {
		return (
			<Input
				className={cn(
					`dark:bg-transparent dark:focus:border-none border-slate-400 py-6`,
					className,
				)}
				name={name}
				ref={ref}
				{...props}
			/>
		);
	},
);

const MyInput = memo(MemoizedInput);

export default MyInput;
