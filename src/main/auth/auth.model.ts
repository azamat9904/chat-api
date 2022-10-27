import { Schema, model } from 'mongoose'
import { IAuth } from './auth.interface'

const authSchema = new Schema<IAuth>(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        gender: { type: String, required: true },
        birthday: { type: Date, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
    },
    {
        timestamps: {
            createdAt: 'created_at', // Use `created_at` to store the created date
            updatedAt: 'updated_at', // and `updated_at` to store the last updated date
        },
    }
)

export const Auth = model<IAuth>('Auth', authSchema)
