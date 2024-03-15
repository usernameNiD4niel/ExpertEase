import { LoginType } from "@/constants/types";
import Cookies from "js-cookie";

export default async function login(loginData: LoginType) {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	});

	const data = await response.json();
	if (response.ok) {
		// Store user data to cookies
		Cookies.set("access_token_cookie", data.access_token_cookie);
		Cookies.set("refresh_token", data.refresh_token);
		Cookies.set("user", data.user);
		/**
		 * {
    "access_module": [],
    "access_token_cookie": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTQ0NTk5MCwianRpIjoiOTU4YjAyMDgtMDY2MC00MWYwLWJkMWEtMjRmNGFiOWQxODE2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjo2LCJleHAiOiJUdWUsIDAyIEFwciAyMDI0IDA2OjA2OjMwIEdNVCJ9LCJuYmYiOjE3MDk0NDU5OTAsImV4cCI6MTcwOTQ0Njg5MH0.wN9Kh1hxyCfenzpGw0vO9NCpXt8MCAW2RuQWGWzkz8Q",
    "csrf_access_token": "IjMyMjkzNWM3NGU5YzQ0ZDcwOTM3ODgxMzkyZmMwZWY3Zjg3YzYzOWEi.ZeQTZg.IKp0SD8lSntRGhyQQm1N3fmFDKc",
    "message": "Login successful",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTQ0NTk5MCwianRpIjoiZTdkM2Y5ZGEtOWFlMi00MDRmLTgyZWItYjJlN2Q4MzZhM2YwIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlcl9pZCI6NiwiZXhwIjoiVHVlLCAwMiBBcHIgMjAyNCAwNjowNjozMCBHTVQifSwibmJmIjoxNzA5NDQ1OTkwLCJleHAiOjE3MTIwMzc5OTB9.kX4H1cbnacqGvFIhhvxt4g0Z92WpjDXbtvkVD9-_iX8",
    "success": true,
    "user": {
        "birthDate": "2000-10-25",
        "businessName": "Business Name",
        "email": "danielrey@northatlantic.com",
        "firstName": "Daniel",
        "gender": "Male",
        "id": 6,
        "lastName": "Rey",
        "map": "Mapa",
        "middleName": "V",
        "user_type": "unset"
    }
}
		 */
		return {
			success: true,
			message: data.message as string,
		};
	}

	return {
		success: false,
		message: (data.message as string) ?? "Cannot login please try again",
	};
}
