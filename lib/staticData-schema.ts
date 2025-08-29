import mongoose from "mongoose";

const staticDataSchema = new mongoose.Schema(
  {
    Title: String,
    UniqueComponentId: { type: String, required: true, unique: true },
    MetaData: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.models.StaticData ||
  mongoose.model("StaticData", staticDataSchema, "statics");
