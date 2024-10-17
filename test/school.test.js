const { TestWatcher } = require('jest')

const School = require('../src').School
const Teacher = require('../src').Teacher
const Student = require('../src').Student
const Grade = require('../src').Grade
const IndividualClass = require('../src').IndividualClass

describe('Should Create a school class', () => {
    let grade1;
    let grade2;
    let individualClass;
    let secondIndividualClass;
    let student;
    let teacher;
    let newSchool;
    beforeEach(() => {
        student = new Student('Bob Jones', 19, 12, [10, 10, 10, 10], 2025, ['foosball', 'beerpong', 'basketweaving']);
        teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
        individualClass = new IndividualClass('Math', 12, teacher, [student]);
        secondIndividualClass = new IndividualClass('English', 10, teacher, [student]);
        grade1 = new Grade([individualClass, secondIndividualClass], 2022);
        grade2 = new Grade([individualClass, secondIndividualClass], 2022);
        newSchool = new School('Shitty Acres', 'Springfield', [0, 1, 2, 3, 4, 5], 25, 5, [teacher], 'Mr Mackey', [grade1, grade2], 'Mr Hanky')
    })
    test('Should create a new instance of School', () => {
        expect(newSchool).toEqual({name: 'Shitty Acres', location: 'Springfield', gradeLevels: [0, 1, 2, 3, 4, 5], numberOfStudents: 25, numberOfTeachers: 5, teachers: [teacher], principle: 'Mr Mackey', grades: [grade1, grade2], mascot: 'Mr Hanky'})
    })
    test('Should update the school\'s name', () => {
        newSchool.updateName('South Park Elementary');
        expect(newSchool.name).toBe('South Park Elementary');
    })
    test('Should update the school\'s locaation', () => {
        newSchool.updateLocation('South Park');
        expect(newSchool.location).toBe('South Park');
    })
    test('Should update the gradeLevels array', () => {
        newSchool.updateGradeLevels([1, 2, 3, 4, 5])
        expect(newSchool.gradeLevels).toEqual([1, 2, 3, 4, 5]);
    })
    test('Should remove a given number of students from the  number of students', () => {
        newSchool.removeStudents(5);
        expect(newSchool.numberOfStudents).toEqual(20);
    })
    test('Should add a given number of students to the number of students', () => {
        newSchool.addStudents(5);
        expect(newSchool.numberOfStudents).toEqual(30);
    })
    test('Should remove the specified teacher and decrement the teacher number', () => {
        newSchool.removeTeacher('Jane Doe');
        expect(newSchool.numberOfTeachers).toEqual(4);
        expect(newSchool.teachers).toEqual([]);
    })
    test('should add the provided teacher to the teachers array', () => {
        newTeacher = new Teacher('Mr Garrison', 'History of South Park', 'South Park Elementary', 4);
        newSchool.addTeacher(newTeacher);
        expect(newSchool.teachers).toEqual([teacher, newTeacher]);
        expect(newSchool.numberOfTeachers).toEqual(6);
    })
    test('Should update the principle property', () => {
        newSchool.updatePrinciple('PC Principle');
        expect(newSchool.principle).toBe('PC Principle');
    })
    test('Should update the mascot', () => {
        newSchool.updateMascot('Mr Towely');
        expect(newSchool.mascot).toBe('Mr Towely');
    })
    // test('Should remove the specified class and divide it\'s students up among the remaining classes', () => {
    //     let classToBeRemoved = newSchool.grades[0].individualClasses[0];
    //     newSchool.downsize(classToBeRemoved);
    //     expect(newSchool.grades[0].individualClasses.length).toBe(1);
    //     expect(newSchool.grades[0].individualClasses[0].student.length).toBe(2);
    // })
})