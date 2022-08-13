import mongoose from "mongoose"

const Connection = async () => {

    try{
        await mongoose.connect("mongodb://localhost:27017/data_dump",{useUnifiedTopology: true, useNewUrlParser: true});
    } catch(err){
        console.log(err)
    }

}

export default Connection;