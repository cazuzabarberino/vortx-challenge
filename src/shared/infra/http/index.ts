import express from "express";
import "express-async-error";
import router from "./routes";
import errorCatcher from "./middlewares/errorCatcher";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorCatcher);

app.listen(3333, () => {
  console.log("Server Started");
});
