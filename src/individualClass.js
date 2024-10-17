
class IndividualClass{
constructor(subject, gradeLevel, teacher, student) {
    this.subject = subject,
    this.gradeLevel = gradeLevel,
    this.teacher = teacher,
    this.student = student
}
updateSubject(newSubject) {this.subject = newSubject}
changeTeacher(newTeacher) {this.teacher = newTeacher}
addStudent(newStudent) {this.student.push(newStudent)}
removeStudent(studentToBeRemoved) {
    for (let i = 0; i < this.student.length; i++) {
        if (this.student[i] === studentToBeRemoved) {
            this.student.pop(this.student[i])
        }
    }
    return this.student;

}
}
module.exports = IndividualClass;