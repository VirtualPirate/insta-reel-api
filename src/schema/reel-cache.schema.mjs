import mongoose from "mongoose";

const reelCacheSchema = new mongoose.Schema({
  title: { type: String, required: false },
  url: { type: String, required: true },
  description: { type: String, required: false },
  thumbnail: { type: String, required: false },
  download_link: { type: String, required: true },
  dateCreated: { type: Date, default: () => Date.now(), expires: "5h" },
});

const ReelCache = mongoose.model("ReelCache", reelCacheSchema);
export default ReelCache;
