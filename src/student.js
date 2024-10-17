class Student{
 
    constructor(name, age, gradeLevel, testScores, graduationYear, activities) {
        this.name = name,
        this.age = age,
        this.gradeLevel = gradeLevel,
        this.testScores = testScores,
        this.graduationYear = graduationYear,
        this.activities =  activities,
    }
    updateStudentName(newName) {this.name = newName};
    uincrementAge(newAge) {this.age = newAge};
    incrementGradeLevel(newGrade) {this.gradeLevel = newGrade};
    addTestScore(newTestScores){this.testScores = newTestScores};
    calculateTestAverages()
    changeGraduationYear(newGraYear) {this.graduationYear = newGraYear};
    addActivity(newActivity){this.activities = newActivity};
    removeActivity()
  }
  
  module.exports = Student;