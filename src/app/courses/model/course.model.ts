import { Student } from "../../students/model/student.model"

export interface Course {
    id: number,
    createdAt: Date,
    name: string,
    description: string,    
    isActive: boolean,    
    duration: string,
    enrolledStudents: Array<Student>
}
