import { useLayoutEffect, useState } from "react";

export default function useWidthSize() {
	const [width, setWidth] = useState(0);

	function handleWidthChange() {
		setWidth(window.innerWidth);
	}

	useLayoutEffect(() => {
		handleWidthChange();

		window.addEventListener("resize", handleWidthChange);

		return () => window.removeEventListener("resize", handleWidthChange);
	}, []);

	return width;
}
