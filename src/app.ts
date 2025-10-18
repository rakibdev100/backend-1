import Express, { type Application } from "express"
import router from "./app/router/index.js";


const app: Application = Express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Middleware;

app.use(Express.json());
app.get('/', (req, res,) => {
    res.send('Hello world!')
})


app.use('/api/v1', router)




export default app;