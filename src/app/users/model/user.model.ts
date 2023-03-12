export interface User {
    id: number,
    createdAt: Date,
    userName: string,
    email: string,
    isActive: boolean,
    password: string,
    isAdmin: boolean
}
