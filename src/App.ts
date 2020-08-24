import express = require("express");
import routes from "./routes/";

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }
  private config(): void {
    this.app.use("/", routes);
  }
}
export default new App().app;
