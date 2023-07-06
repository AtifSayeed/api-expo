const mongoose = require('mongoose')

const dataSchema = mongoose.Schema(
    {
        selectCity: {
            type: String,
            required: [true, "Select City"]
        },
        vOrE: {
            type: String,
            required: [true, " "]
        },
        name: {
            type: String,
            required: [true, "Enter your Full Name"]
        },
        company: {
            type: String,
            required: [true, "Enter Company Name"]
        },
        contact: {
            type: Number,
            required: [true, "Enter your Contact"]
        },
        email: {
            type: String,
            required: [true, "Enter your Full Name"]
        },
        city: {
            type: String,
            required: [true, "Enter your city"]
        },
    }
)

const datas = mongoose.model('data', dataSchema);

module.exports = datas;