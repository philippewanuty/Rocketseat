"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @types/express
const app = (0, express_1.default)();
/**
 ** GET    => Search a information
 ** POST   => Insert information (creat)
 ** PUT    => Change information
 ** DELETE => Remove a data
 ** PATCH  => Change an especific information
 */
// http://localhost:3000/test
app.get('/test', (request, response) => {
    //request  => in
    //response => out
    return response.send('Hello World');
});
// http://localhost:3000/test-post
app.post('/test-post', (request, response) => {
    return response.send("Hello World");
});
// http://localhost:3000/
app.listen(3000, () => console.log('server is running NLW'));
