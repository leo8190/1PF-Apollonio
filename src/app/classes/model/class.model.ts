import { Student } from "../../students/model/student.model"
import { Course } from "../../courses/model/course.model"

export interface Class {
    id: number,
    commission: number,
    createdAt: Date,
    professor: string,
    isActive: boolean,
    course: Course,
    enrolledStudents: Array<Student>
}
