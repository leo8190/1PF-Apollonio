import { Student } from "./student.model"

export interface Course {
    id: number,
    createdAt: Date,
    name: string,
    description: string,    
    isActive: boolean,    
    enrolledStudents: Array<Student>
}
