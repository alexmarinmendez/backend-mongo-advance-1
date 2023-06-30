import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: String,
    proffesor: String
})

const courseModel = mongoose.model('courses', courseSchema)

export default courseModel