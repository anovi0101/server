import express from "express";
import db from "../assets/db.js";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(cors());

app.use("/api/invoices", router);

router.get("/", (req, res, next) => {
  res.send(db);
  next();
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
