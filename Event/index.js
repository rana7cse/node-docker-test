import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();
eventEmitter.on("go", (data) => console.log(data));

export default eventEmitter;
