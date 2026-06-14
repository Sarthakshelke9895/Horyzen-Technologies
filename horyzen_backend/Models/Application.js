const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    phone:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },

    college:{
        type:String,
        required:true,
        trim:true
    },

    course:{
        type:String,
        required:true,
        trim:true
    },

    internship:{
        type:String,
        required:true
    },

    github:{
        type:String,
        default:""
    },

    message:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    },
    resume:{
    fileId:{
        type:mongoose.Schema.Types.ObjectId
    },
    originalName:String,
    contentType:String
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    "Application",
    ApplicationSchema
);