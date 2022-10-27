import mongoose from 'mongoose'

export const connectToDB = async () => {
    return mongoose
        .connect(
            process.env.DB_URL as string,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as mongoose.ConnectOptions
        )
        .then(() => {
            console.log('Успешное подключение к БД')
        })
        .catch((error) => {
            console.error('Не удалось подключиться к БД', error.message)
            throw error
        })
}
