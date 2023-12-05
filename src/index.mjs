import { getReelVideo } from "./parser/insta-reel.parser.mjs";

getReelVideo("https://www.instagram.com/reel/CrQ9TvAAuRe/").then((link) =>
  console.log(link)
);
