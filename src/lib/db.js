import mongoose from "mongoose";

global.mongoose = {
    conn: null,
    promise: null
}


export async function dbConnect(){
    if(global.mongoose && global.mongoose.conn){
        console.log("Using existing connection");
        return global.mongoose.conn;
    } else{
        console.log("Creating new connection");
        const connString = process.env.MONGO_URL;
        const promise = mongoose.connect(connString)

        global.mongoose = {
            conn: await promise,
            promise,
        }
        console.log("Connected to DB");

        return await promise;
    }
}