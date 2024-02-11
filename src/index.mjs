import { cacheReelInfo } from "./parser/insta-reel.parser.mjs";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  try {
    const url = req.query.url;
    const info = await cacheReelInfo(url);
    console.log(`[GET] ${url}`);
    res.send(info);
  } catch (error) {
    res.send({ message: error.message });
  }
});

app.get("/ping", (req, res) => {
  res.send({ health: "fine" });
});

async function startServer() {
  mongoose.connect(process.env.MONGO_DATABASE_URL).then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Listenning on PORT ${PORT}`);
    });
  });
}

await startServer();

// getReelVideo("https://www.instagram.com/reel/CrQ9TvAAuRe/").then((link) =>
//   console.log(link)
// );
