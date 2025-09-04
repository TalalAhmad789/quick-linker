import mongoose from "mongoose";

export const connectionMongoDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log("MonogDB Connection HOST: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Database Connection failed Error : ", error)
    }
}
