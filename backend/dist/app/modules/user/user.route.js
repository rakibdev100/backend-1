import { Router } from "express";
import { UserController } from "./user.controller.js";
import { createUserValidation } from "./user.validation.js";
import { json } from "zod";
const router = Router();
router.get('/all-users', async (req, res, next) => {
    try {
        const handler = await UserController.getUsers;
        return handler(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
router.post('/create-user', async (req, res, next) => {
    try {
        await createUserValidation.parseAsync(req.body);
    }
    catch (error) {
        const newArr = JSON.parse(error).map((arr) => {
        });
        console.log();
        next(err);
    }
});
export const UserRoute = router;
const err = [
    {
        path: "name",
        message: "Name must be at least 3 characters long",
    },
    {
        path: "password",
        message: "Name must be at least 3 characters long",
    }
];
//# sourceMappingURL=user.route.js.map