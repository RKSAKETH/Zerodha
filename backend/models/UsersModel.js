import UserSchema from '../schemas/UsersSchema.js'
import mongoose from 'mongoose'
const UserModel = new mongoose.model('user',UserSchema)

export default UserModel

