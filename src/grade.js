const { IndividualClass } = require(".");

class Grade{
contructor(IndividualClass, graduationYear){
this.IndividualClass = IndividualClass,
this.graduationYear =  graduationYear
}

getStudentCount(){
    let totalStudents = 0
    for (let i = 0; i < this.IndividualClass.length; i++) {
    totalStudents += this.IndividualClass[i].student.length 
    }
    return this.totalStudents;
} 
//calculateGradeAverage() which returns the average of all test scores for all `Student`s in the `Grade`
//addIndividualClass()

}

module.exports = Grade;