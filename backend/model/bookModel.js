import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    author:{
        type: String,
        required: true
    },
    page:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});