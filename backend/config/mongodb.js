import mongoose from "mongoose";

const connectDB = async () => {
console.log("🔍 MONGODB_URL:", process.env.MONGODB_URL);

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/femcloud`)

}

export default connectDB;