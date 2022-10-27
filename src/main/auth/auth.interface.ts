export interface IAuth {
    email: string
    password: string
    firstname: string
    lastname: string
    gender: 'male' | 'female'
    birthday: Date
    country: string
    city: string
}
