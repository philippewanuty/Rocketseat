"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @types/express
const app = (0, express_1.default)();
// http://localhost:3000
app.listen(3000, () => console.log('server is running'));
