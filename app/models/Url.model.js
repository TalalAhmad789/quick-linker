import mongoose, { Schema, model, models } from "mongoose";

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Url = models.Url || model("Url", urlSchema);
export default Url;
