import Express, { type Application } from "express"


const app: Application = Express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Middleware;

app.use (Express.json ());

app.get('/', (req, res,) => {
    res.send('Hello world!')
})







export default app;