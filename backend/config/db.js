import mongoose from 'mongoose'
import dotenev from 'dotenv'


dotenev.config()

const connectDb = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected")

        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
export default connectDb;