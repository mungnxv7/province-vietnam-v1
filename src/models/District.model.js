import mongoose from "mongoose";

const districtSchema = new mongoose.Schema({

},{
    versionKey: false,
    timestamps:true,
    collection: "District"
})

export default Province = mongoose.model("District",districtSchema)