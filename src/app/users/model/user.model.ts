export interface User {
    id: number,
    createdAt: Date,
    name: string,
    surname: string,
    email: string,
    isActive: boolean,
    password: string,
    isAdmin: boolean
}
