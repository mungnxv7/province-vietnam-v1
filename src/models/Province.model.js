import mongoose from "mongoose";

const provinceSchema = new mongoose.Schema({

},{
    versionKey: false,
    timestamps:true,
    collection: "Provinces"
})

export default Province = mongoose.model("Provinces",provinceSchema)