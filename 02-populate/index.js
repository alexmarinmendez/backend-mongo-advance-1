import mongoose from "mongoose"
import studentModel from "./models/student.model.js"
import courseModel from "./models/course.model.js"

const uri = 'mongodb://localhost:27017'

try {
    //top-level await 
    await mongoose.connect(uri, {
        dbName: 'advance1'
    })
    console.log('DB connected!')
    
    // await studentModel.create({
    //     first_name: 'Lucas',
    //     last_name: 'Rueda'
    // })
    // await courseModel.create({
    //     title: 'Backend',
    //     proffesor: 'Alex Marin'
    // })
    // const student = await studentModel.findOne({ _id: '649e25d8b8603e6fbb1c9902'})
    // student.courses.push({ course: '649e261486fb1edd66cdd160' })
    // const result = await studentModel.updateOne({ _id: '649e25d8b8603e6fbb1c9902'}, student)
    // const student = await studentModel.findOne({ _id: '649e25d8b8603e6fbb1c9902'}).populate('courses.course')
    const student = await studentModel.findOne({ _id: '649e25d8b8603e6fbb1c9902'})
    console.log(JSON.stringify(student, null, '\t'))

    process.exit()
} catch(err) {
    console.log(err.message)
}

