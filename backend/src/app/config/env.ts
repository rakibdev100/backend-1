
import dotenv from "dotenv";

dotenv.config();

type EnvType = {
    PORT: string;
    DB_URI: string;

}

const envVarsFn = (): EnvType => {
    const requiredEnvVars = [
        "PORT",
        "DB_URI"
    ];


    requiredEnvVars.forEach((key: string) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`)
        }

    })
    return {
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string,
    };
}



export const envVars = envVarsFn();