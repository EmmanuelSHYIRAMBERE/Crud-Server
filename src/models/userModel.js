import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullNames: String,
    password: {
        type: String,
        required: true
    },
    phoneNo: String,
    location: String,
    role: { type:String, default: "user"},
});

export const User = mongoose.model("user", userSchema);