import { Outlet } from "react-router-dom";
import NextMenu from "./components/menu/next-menu";
import WebMenu from "./components/menu/web-menu";
import ExpertEase from "@/public/expert-ease-logo.svg";

function App() {
	return (
		<>
			<header className="p-2 bg-[#284B63] flex items-center justify-between md:hidden fixed top-0 right-0 left-0 z-50">
				<p></p>
				<h1 className="font-bold text-white">Expert Ease</h1>
				<NextMenu />
			</header>
			{/* </header> */}
			{/* 65% */}
			<main className="w-full h-screen flex relative">
				<aside className=" hidden md:flex bg-[#284B63] w-[320px] fixed top-0 left-0 bottom-0 flex-col py-5 px-4 items-center gap-10">
					<img
						src={ExpertEase}
						alt="Expert Ease Logo"
						width={200}
						height={200}
						className="w-[90px] h-auto"
					/>
					<WebMenu />
				</aside>
				<section className="w-full ms-0 md:ms-[320px]">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default App;
