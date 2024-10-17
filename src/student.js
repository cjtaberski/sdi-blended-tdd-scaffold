class Student{
    constructor(name, age, gradeLevel, testScores, graduateYear, activities) {
        this.name = name,
        this.age = age,
        this.gradeLevel = gradeLevel,
        this.testScores = testScores,
        this.graduationYear = graduateYear,
        this.activities =  activities
    }
    updateStudentName(newName) {this.name = newName};
    incrementAge() {this.age++};
    incrementGradeLevel() {this.gradeLevel++};
    addTestScore(newTestScores){this.testScores.push(newTestScores)};
    calculateTestAverages() {
        let sum = 0;
        this.testScores.forEach(element => {
            sum += element
    })
        return sum / this.testScores.length;
    }
    changeGraduationYear(newGraYear) {this.graduationYear = newGraYear};
    addActivity(newActivity){this.activities.push(newActivity)};
    removeActivity(activityToBeRemoved) {
        for (let i = 0; i < this.activities.length; i++) {
            if (this.activities[i] = activityToBeRemoved) {
                this.activities.pop(this.activities[i])
            }
        }
        return this.activities;
    }
  }
  
  module.exports = Student;