import NakaTindog from "@/public/professional.jpg";
import Logo from "@/public/expert-ease-logo.svg";
import { Link } from "react-router-dom";
import RegistrationTabs from "./registration-tabs";
import ModeToggle from "@/components/custom/mode-toggle";
import { useEffect } from "react";

export default function Register() {
	useEffect(() => {
		localStorage.clear();
	}, []);

	return (
		<>
			<div className="absolute top-0 right-0">
				<ModeToggle />
			</div>
			<section className="h-screen flex items-center justify-center">
				<div className="flex w-full md:w-[60%] drop-shadow-2xl h-screen md:h-fit md:rounded-lg items-center justify-center bg-[#284B63] dark:bg-[#284B63]/20">
					<div className="flex items-center w-full justify-center flex-col p-8 gap-2">
						<div className="flex items-center justify-center flex-col my-4">
							<img
								src={Logo}
								alt="Expert Ease Logo"
								width={300}
								height={300}
								className="w-[90px] h-auto"
							/>
							<h2 className="text-white text-2xl font-bold">
								Business Solutions
							</h2>
						</div>
						<RegistrationTabs />
						{/* <RegisterTab /> */}
						<p className="text-sm text-slate-100">
							Already have an account?{" "}
							<Link
								to={"/login"}
								className="text-blue-500 dark:text-blue-500 font-semibold">
								Login
							</Link>
						</p>
					</div>
					<img
						src={NakaTindog}
						alt="Cute dog image"
						width={640}
						height={960}
						className="w-[440px] h-auto bg-[#284B63] rounded-tr-lg rounded-br-lg hidden md:block"
					/>
				</div>
			</section>
		</>
	);
}
