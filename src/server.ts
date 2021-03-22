import express from "express";

import config from "./config/config";

const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.listen(config.server.port, () => {
    console.log(`🚀 Server running at ${config.server.hostname}:${config.server.port}`);
});
