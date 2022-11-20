import express from 'express';
import eventEmitter from "./Event/index.js";
const app = express();
let APP_NAME = process.env.NAME || "Default App";
let response =  `Hello from Application: ${APP_NAME}`;
let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(response));

app.get('/:event', (req, res) => {
  const eventName = req.params.event || null;

  if(eventEmitter.eventNames().includes(eventName)) {
    eventEmitter.emit(eventName, `${eventName} event fired`);
  }

  res.json("This body is good");
});

app.listen(PORT, () => console.log(`Application:  ${APP_NAME} running on PORT: ${PORT}`));

