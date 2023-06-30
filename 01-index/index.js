import mongoose from "mongoose"
import userModel from "./models/user.model.js"

const uri = 'mongodb://localhost:27017'

try {
    //top-level await 
    await mongoose.connect(uri, {
        dbName: 'advance1'
    })
    console.log('DB connected!')
    const response = await userModel.find({ first_name: 'Celia' }).explain('executionStats')
    console.log(response)
    process.exit()
} catch(err) {
    console.log(err.message)
}

