const express = require('express');
const app = express();

let APP_NAME = process.env.NAME || "Default App";
let response =  `Hello from Application: ${APP_NAME}`;
let PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send(response));
app.listen(PORT, () => console.log(`Application:  ${APP_NAME} running on PORT: ${PORT}`));

