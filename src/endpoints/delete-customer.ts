export default async function deleteCustomer(id: string) {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_URL}/api/customer/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
	const data = await response.json();

	if (response.ok) {
		return {
			success: true,
			message: data.message as string,
		};
	}
	return {
		success: false,
		message:
			(data.message as string) ??
			"Cannot delete the selected customer, please try again",
	};
}
