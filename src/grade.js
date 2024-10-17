
class Grade{
constructor(individualClasses, graduationYear){
this.individualClasses = individualClasses,
this.graduationYear =  graduationYear
}

studentCount(){
    let totalStudents = 0
    for (let i = 0; i < this.individualClasses.length; i++) {
    totalStudents += this.individualClasses[i].student.length 
    }
    return totalStudents;
} 

calculateGradeAverage(){
    let sum = 0;
    for (let i = 0; i < this.individualClasses.length; i++) {
        for (let j = 0; j < this.individualClasses[i].student.length; j++) {
            sum += this.individualClasses[i].student[j].calculateTestAverages()
        }
    }
    return sum/this.studentCount();
}

addIndividualClass(newIndividualClass) {
    this.individualClasses.push(newIndividualClass)
}



//calculateGradeAverage() which returns the average of all test scores for all `Student`s in the `Grade`
//addIndividualClass()

}

module.exports = Grade;