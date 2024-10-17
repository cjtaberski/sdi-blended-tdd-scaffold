const Grade = require('../src').Grade;
const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

describe('Grade', () => {
    let grade;
    let individualClass;
    let secondIndividualClass;
    let student;
    let teacher;

    beforeEach(function () {
        student = new Student('Bob Jones', 19, 12, [10, 10, 10, 10], 2025, ['foosball', 'beerpong', 'basketweaving']);
        teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
        individualClass = new IndividualClass('Math', 12, teacher, [student]);
        secondIndividualClass = new IndividualClass('English', 10, teacher, [student]);
        grade = new Grade([individualClass, secondIndividualClass], 2022);
    });
    describe('insantiates a new grade', () => {
        test('takes the following arguments: individualClasses and graduationYear', () => {
            expect(grade.individualClasses).toEqual([individualClass, secondIndividualClass])
            expect(grade.graduationYear).toBe(2022)
        })
    })
    describe('insantiates a new grade', () => {
        test('returns the student count', () => {
            expect(grade.studentCount()).toEqual(2)
        })
    })
        test('returns the average test grade', () => {
            expect(grade.calculateGradeAverage()).toEqual(10)
        })
        test('adds an individual class to the grade', () => {
            let thirdIndividualClass = new IndividualClass('Chinese', 10, teacher, [student]);
            grade.addIndividualClass(thirdIndividualClass);
            expect(grade.individualClasses).toEqual([individualClass, secondIndividualClass, thirdIndividualClass]);
        })
 })
