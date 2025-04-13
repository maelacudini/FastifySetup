import mongoose from 'mongoose'
import { DEFAULT_ROLE, ROLES } from '../../../utils/constants/constants'
import { UserModelInterface } from '../../../utils/types/models.types'

const UserSchema = new mongoose.Schema<UserModelInterface>({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ROLES,
    default: DEFAULT_ROLE,
  },
})

const User = mongoose.model<UserModelInterface>("User", UserSchema)

module.exports = User