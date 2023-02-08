export interface Student {
    id: number,
    createdAt: Date,
    nameAndSurname: string,
    email: string,
    documentNumber: number,
    isActive: boolean,
    phone: number
    // enrolledCourses: Array<Course>
}
