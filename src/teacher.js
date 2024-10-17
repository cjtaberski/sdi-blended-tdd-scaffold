class Teacher {
  constructor(name, subjectTaught, universityAttended, yearsAsTeacher) {
      this.name = name,
      this.subjectTaught = subjectTaught,
      this.universityAttended = universityAttended,
      this.yearsAsTeacher = yearsAsTeacher
  }
  updateTeacherName(newName) {this.name = newName};
  updateSubjectTaught(newSubject) {this.subjectTaught = newSubject};
  updateYearsAsTeacher() {this.yearsAsTeacher++}
}

module.exports = Teacher;