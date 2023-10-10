import mongoose from "mongoose";


// schema to  determine type of data in the model
const schema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        body: {
            type:String,
            required: [true, "Please enter the contents"]
        }
    },
    {
        timestamps: true
    }
)

//  model to save data to a database

export const NewsLetter = mongoose.model("NewsLetter", schema);