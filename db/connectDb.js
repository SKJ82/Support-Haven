import mongoose from "mongoose";

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/support-hive`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

export default connectDb