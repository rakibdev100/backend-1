import Express, {} from "express";
const app = Express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const bootstrap = async () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map