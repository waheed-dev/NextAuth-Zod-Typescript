import * as process from "process";
import mongoose from 'mongoose'





if (!process.env.DATABASE_URL) {
    throw new Error('not db credentials in .env file')
}

const DATABASE_URL : string = process.env.DATABASE_URL



async function connectDb() {

    const options = {
        bufferCommands : false,
        useNewUrlParser : true,
        useUnifiedTopology : true }

    await mongoose.connect(DATABASE_URL,options).then(mongoose => {
        console.log('connection established')
        return mongoose
    }).catch(err => {
        console.log(err)
    })}

export default connectDb