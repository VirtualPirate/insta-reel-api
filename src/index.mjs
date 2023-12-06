import { getReelVideo } from "./parser/insta-reel.parser.mjs";

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
  const url = req.query.url;
  // const info = await
});

async function startServer() {
  mongoose.connect(
    process.env.MONGO_DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to Database");
      app.listen(PORT, () => {
        console.log(`Listenning on PORT ${PORT}`);
      });
    }
  );
}

await startServer();

// getReelVideo("https://www.instagram.com/reel/CrQ9TvAAuRe/").then((link) =>
//   console.log(link)
// );
