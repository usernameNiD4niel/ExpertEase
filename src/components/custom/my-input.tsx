// import {forwardRef} from "react";
// import { Input } from "../ui/input";

// interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
// 	name: string;
// }

// export const Ref = HTMLInputElement;

// const MyInput = forwardRef<Ref, MyInputProps>(ref, ...props) => {
// 	return (
// 		<Input
// 			name={name}
// 			className="py-[1.35rem] dark:bg-transparent dark:border border-slate-100"
// 			ref={ref}
// 			{...props}
// 		/>
// 	);
// }
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
