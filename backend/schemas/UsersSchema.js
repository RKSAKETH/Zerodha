import { Schema } from "mongoose";

const UserSchema = new Schema({
    username : String,
    password : String
})

export default UserSchema