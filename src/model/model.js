const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactUsSchemaDescription ={
    name : {
        type: String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phone : String,
    message : {
        type : String,
        required : true,
    },
    description : String
}
const contactUsSchema = new Schema(contactUsSchemaDescription, {timestamps: true})

//we want to export it as as a Collection
module.exports = mongoose.model('ContactUs', contactUsSchema)