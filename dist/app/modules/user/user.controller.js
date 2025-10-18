import httpStatus from "http-status-codes";
import { user } from "./user.model.js";
import { catchAsync } from "../../../utils/catchAsync.js";
const getUsers = (req, res, next) => {
    res.status(httpStatus.OK).json({
        status: "success",
        message: "all user retrieved successfully"
    });
};
const createUser = catchAsync(async (req, res, next) => {
    const createdUser = await user.insertOne(req.body);
    res.status(httpStatus.CREATED).json({
        status: "success",
        message: "user created successfully",
        user: createdUser
    });
});
export const UserController = {
    getUsers,
    createUser
};
//# sourceMappingURL=user.controller.js.map