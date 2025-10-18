import Express, {} from "express";
import { envVars } from "./app/config/env.js";
import app from "./app.js";
import mongoose from "mongoose";
let server;
const bootstrap = async () => {
    mongoose.connect(envVars.DB_URI);
    console.log("Db connected");
    server = app.listen(envVars.PORT, () => {
        console.log(`Example app listening on port ${envVars.DB_URI}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map