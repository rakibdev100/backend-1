import { z } from "zod";
export const createUserValidation = z.object({
    name: z
        .string()
        .min(3, "Please provide your name (at least 3 characters)."),
    email: z
        .string()
        .email("Please provide a valid email address."),
    password: z
        .string()
        .min(3, "Password must be at least 3 characters long."),
    avatar: z
        .string()
        .optional(),
    isVerified: z
        .boolean()
        .default(false),
    isPremium: z
        .boolean()
        .default(false),
});
//# sourceMappingURL=user.validation.js.map