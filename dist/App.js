"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes/");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use("/", routes_1.default);
    }
}
exports.default = new App().app;
