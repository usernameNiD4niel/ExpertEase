import NakaTindog from "@/public/professional.jpg";
import Logo from "@/public/expert-ease-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/constants/schema";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/endpoints";
import { LoginType } from "@/constants/types";
import { toast } from "sonner";
import MyAlert from "@/components/custom/my-alert";

export default function Login() {
	if (localStorage.length > 0) {
		localStorage.clear();
	}

	const router = useNavigate();
	const location = useLocation();
	const queryParameters = new URLSearchParams(location.search);

	const mutation = useMutation({
		mutationFn: login,
		onSuccess: ({ message, success }) => {
			toast(message);
			if (success) {
				router("/");
			}
		},
	});

	// // 1. Define your form.
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			mobileNumber: "",
			pin: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof loginSchema>) {
		const loginData: LoginType = {
			mobileNumber: values.mobileNumber,
			pin: values.pin,
		};

		mutation.mutate(loginData);
	}

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex w-full md:w-auto drop-shadow-lg h-screen md:h-fit md:rounded-lg items-center justify-center bg-[#284B63]">
				<img
					src={NakaTindog}
					alt="Cute dog image"
					// width={540}
					width={640}
					height={960}
					className="w-[390px] h-auto  rounded-s-lg rounded-l-lg hidden md:block"
				/>
				<div className="flex items-center justify-center flex-col p-8 gap-8 w-full md:w-[410px]">
					<div className="flex items-center justify-center flex-col">
						<img
							src={Logo}
							alt="Expert Ease Logo"
							width={300}
							height={300}
							className="w-[70px] h-auto"
						/>
						<h2 className="text-white text-2xl font-bold">
							Business Solutions
						</h2>
					</div>
					{queryParameters.get("isRegisterSuccess") &&
						Boolean(queryParameters.get("isRegisterSuccess")) && (
							<MyAlert
								description="Congratulations you have successfully created an account"
								isSuccess
							/>
						)}
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full space-y-2">
							<FormField
								control={form.control}
								name="mobileNumber"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Mobile Number"
												type="number"
												className="py-[1.35rem] border-slate-100"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="pin"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="4 Digit Pin"
												type="password"
												className="py-[1.35rem] border-slate-100"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{mutation.isError && (
								<span className="text-red-500 text-sm">
									{mutation.error.message}
								</span>
							)}
							{mutation.isPending ? (
								<Button type="button" className="w-full">
									Loading...
								</Button>
							) : (
								<Button
									type="submit"
									size={"lg"}
									className="w-full bg-slate-900">
									Submit
								</Button>
							)}
						</form>
					</Form>
					{/* <div className="w-full space-y-2" method="post">
						<Input
							type="number"
							placeholder="Mobile Number"
							className="py-[1.35rem] border-slate-100"
						/>
						<Input
							type="password"
							placeholder="Password"
							className="py-[1.35rem] border-slate-100"
						/>
					</div>
					<Button
						type="submit"
						size="lg"
						className="w-full bg-slate-900 dark:bg-slate-100">
						Sign-in
					</Button> */}
					<p className="text-sm text-slate-100">
						Don&apos;t have an account yet?{" "}
						<Link className="text-blue-500 font-semibold" to={"/register"}>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
