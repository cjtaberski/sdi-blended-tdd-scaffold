const Student = require('../src').Student;

describe('Student', () => {
    describe('insantiates a new Student', () => {
        test('takes the following arguments: name, age, gradeLevel, testScores, graduationYear, activities', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            expect(student.name).toBe('Bob Jones');
            expect(student.age).toEqual(19);
            expect(student.gradeLevel).toEqual(12);
            expect(student.testScores).toEqual([60, 70, 80, 90]);
            expect(student.graduationYear).toEqual(2025);
            expect(student.activities).toEqual(['foosball', 'beerpong', 'basketweaving']);
        })
        test('Should update the student\'s name', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.updateStudentName('Robert Jonas');
            expect(student.name).toBe('Robert Jonas')
        })
        test('Should increment the student\'s age by 1', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.incrementAge();
            expect(student.age).toEqual(20);
        })
        test('Should increment the student\'s grade level by 1', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.incrementGradeLevel();
            expect(student.gradeLevel).toEqual(13);
        })
        test('Should add the test score to the array', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.addTestScore(100);
            expect(student.testScores).toEqual([60, 70, 80, 90, 100]);
        })
        test('Should calculate the average of all test scores', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            expect(student.calculateTestAverages()).toEqual(75);
        })
        test('Should change the student\'s graduation year to the input', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.changeGraduationYear(2028);
            expect(student.graduationYear).toEqual(2028);
        })
        test('Should add the input to the activity array', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.addActivity('Hoodratstuff');
            expect(student.activities).toEqual(['foosball', 'beerpong', 'basketweaving', 'Hoodratstuff']);
        })
        test('Should remove the input activity from the activities array', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            student.removeActivity('basketweaving');
            expect(student.activities).toEqual['foosball', 'beerpong']
        })
    })
})