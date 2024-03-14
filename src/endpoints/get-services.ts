import { ServicesType } from "@/constants/types";

export default async function getServices() {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/pos/services`,
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const data = await response.json();
		return data as ServicesType;
	}

	return {} as ServicesType;
}
