import NakaTindog from "@/public/professional.jpg";
import Logo from "@/public/expert-ease-logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
	if (localStorage.length > 0) {
		localStorage.clear();
	}

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex w-full md:w-auto drop-shadow-lg h-screen md:h-fit md:rounded-lg items-center justify-center bg-[#284B63] dark:bg-[#284B63]/20">
				<img
					src={NakaTindog}
					alt="Cute dog image"
					// width={540}
					width={640}
					height={960}
					className="w-[390px] h-auto  rounded-s-lg rounded-l-lg hidden md:block"
				/>
				<form className="flex items-center justify-center flex-col p-8 gap-8 w-full md:w-[410px]">
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
					<div className="w-full space-y-2">
						<Input
							type="number"
							placeholder="Mobile Number"
							className="py-[1.35rem] dark:bg-transparent dark:border border-slate-100"
						/>
						<Input
							type="password"
							placeholder="Password"
							className="py-[1.35rem] dark:bg-transparent dark:border border-slate-100"
						/>
					</div>
					<Button
						type="submit"
						size="lg"
						className="w-full bg-slate-900 dark:bg-slate-100">
						Sign-in
					</Button>
					<p className="text-sm text-slate-100">
						Don&apos;t have an account yet?{" "}
						<Link
							className="text-blue-500 dark:text-blue-500 font-semibold"
							to={"/register"}>
							Register
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
