const Teacher = require('../src').Teacher

class School{
    constructor(schoolName, locationName, gradeRange, studentCount, teacherCount, teacherList, headmaster, gradeList, spiritAnimal) {
        this.name = schoolName;
        this.location = locationName;
        this.gradeLevels = gradeRange;
        this.numberOfStudents = studentCount;
        this.numberOfTeachers = teacherCount;
        this.teachers = teacherList;
        this.principle = headmaster;
        this.grades = gradeList;
        this.mascot = spiritAnimal;
    }
    updateName(newName) {
        this.name = newName;
    }
    updateLocation(newLocation) {
        this.location = newLocation;
    }
    updateGradeLevels(newLevels) {
        this.gradeLevels = newLevels;
    }
    removeStudents(studentNumber) {
        this.numberOfStudents -= studentNumber;
    }
    addStudents(studentNumber) {
        this.numberOfStudents += studentNumber;
    }
    removeTeacher(teacherName) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].name === teacherName) {
                this.teachers.pop(this.teachers[i])
                this.numberOfTeachers--;
            }
        }
    }
    addTeacher(newestTeacher) {
        this.teachers.push(newestTeacher);
        this.numberOfTeachers++;
    }
    updatePrinciple(newPrinciple) {
        this.principle = newPrinciple;
    }
    updateMascot(newMascot) {
        this.mascot = newMascot;
    }
    // downsize(classToBeRemoved) {
    //     for (let i = 0; i < this.grades.length; i++) {
    //         for (let j = 0; j < this.grades[i].individualClasses.length; j++) {
    //             if (this.grades[i].individualClasses[j] === classToBeRemoved) {
                    
    //                 let studentArray = [];
    //                 for (var s = 0; s < this.grades[i].individualClasses[j].student.length; s++) {
    //                     studentArray.push(this.grades[i].individualClasses[j].student[s]);
    //                 }
    //                 this.grades[i].individualClasses.pop(this.grades[i].individualClasses[j])
    //                 for (let c = 0; studentArray.length > 0; )

    //             }
    //         }
    //     }
    // }
}

module.exports = School;