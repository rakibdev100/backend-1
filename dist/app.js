import Express, {} from "express";
const app = Express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Middleware;
app.use(Express.json());
app.get('/', (req, res) => {
    res.send('Hello world!');
});
export default app;
//# sourceMappingURL=app.js.map