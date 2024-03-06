import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 200): T {
	const [search, setSearch] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSearch(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return search;
}
