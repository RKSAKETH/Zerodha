import { model } from "mongoose";
import { HoldingSchema } from "../schemas/HoldingsSchema.js";

const HoldingsModel = model("holding", HoldingSchema);

export { HoldingsModel };
