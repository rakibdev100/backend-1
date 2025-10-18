import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
const router = Router();
const routerList = [
    {
        path: "/user",
        route: UserRoute,
    }
];
routerList.forEach(route => {
    router.use(route.path, route.route);
});
export default router;
//# sourceMappingURL=index.js.map