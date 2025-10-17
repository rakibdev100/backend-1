import Express, { type Application } from "express"
import { envVars } from "./app/config/env.js"
import app from "./app.js"


let server;


const bootstrap = async () => {
  server =  app.listen(envVars.PORT, () => {
        console.log(`Example app listening on port ${envVars.PORT}`)
    })

}

bootstrap();