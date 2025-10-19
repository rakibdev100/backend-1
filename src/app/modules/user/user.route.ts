import { Router } from "express";
import { UserController } from "./user.controller.js";

const router = Router();


router.get('/all-users', async (req, res, next) => {
  try {
	const handler = await UserController.getUsers;
	return handler(req, res, next);
  } catch (err) {
	next(err);
  }
});

router.post('/create-user', async (req, res, next) => {
  try {
	const handler = await UserController.createUser;
	return handler(req, res, next);
  } catch (err) {
	next(err);
  }
});


export const UserRoute = router;