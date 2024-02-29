import { z } from "zod";

const loginSchema = z.object({
	mobileNumber: z
		.string()
		.refine((value) => /^\d{11}$/.test(value), {
			message: "Mobile number must be 11 digits",
		})
		.refine((value) => /^09/.test(value), {
			message: 'Mobile number must start with "09"',
		}),
	pin: z.string().refine((value) => /^\d{4}$/.test(value), {
		message: "PIN must be 4 digits",
	}),
});

export { loginSchema };
