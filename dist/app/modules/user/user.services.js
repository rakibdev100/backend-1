import { User } from "./user.model.js";
import httpStatus from "http-status-codes";
const createUser = async (req, res) => {
    const user = await User.find({ email: req.body.email });
    if (user.length > 0) {
        res.status(httpStatus.UNAUTHORIZED).json({
            status: "error",
            message: "User already exist"
        });
    }
    const createUser = await User.insertOne(req.body);
    return createUser;
};
export const UserServices = {
    createUser,
};
//# sourceMappingURL=user.services.js.map