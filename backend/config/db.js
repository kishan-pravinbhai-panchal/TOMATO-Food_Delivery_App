import mongoose, { mongo } from "mongoose";

export  const connectDb  = async () => {
    await mongoose.connect('mongodb+srv://panchalkishan2704:FOODDELIVERYAPP@cluster0.wnzrw.mongodb.net/Food-Del').then(() => {
        console.log("Database Connected")
    })

}

 