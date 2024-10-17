const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

describe('Individual Class', () => {
    describe('insantiates a new class', () => {
        test('takes the following arguments: subject, gradeLevel, teacher, student', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
            const individualClass = new IndividualClass('Math', 12, teacher, [student]);
            expect(individualClass.subject).toBe('Math');
            expect(individualClass.gradeLevel).toEqual(12);
            expect(individualClass.teacher).toBe(teacher);
            expect(individualClass.student).toEqual([student]);
        })
    })
    describe('insantiates a new class', () => {
        test('updates subject', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
            const individualClass = new IndividualClass('Math', 12, teacher, [student]);
            individualClass.updateSubject('English')
            expect(individualClass.subject).toBe('English');
        })
    })
    describe('insantiates a new class', () => {
        test('changes the teacher', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
            const newTeacher = new Teacher('Not Jane Doe', 'Not Math', 'Not UCLA', 200);
            const individualClass = new IndividualClass('Math', 12, teacher, [student]);
            individualClass.changeTeacher(newTeacher)
            expect(individualClass.teacher).toBe(newTeacher);
        })
    })
    describe('insantiates a new class', () => {
        test('adds a student', () => {
            const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            const newStudent = new Student('Not Bob Jones', 55, 70, [0, 0, 0, 0], 5025, ['foosball', 'beerpong']);
            const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
            const individualClass = new IndividualClass('Math', 12, teacher, [student]);
            individualClass.addStudent(newStudent)
            expect(individualClass.student).toEqual([student, newStudent]);
        })
    })
    describe('insantiates a new class', () => {
        test('removes a student', () => {
            const firstStudent = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
            const secondStudent = new Student('Not Bob Jones', 55, 70, [40, 20, 10, 80], 5025, ['foosball', 'beerpong', 'basketweaving']);
            const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
            const individualClass = new IndividualClass('Math', 12, teacher, [firstStudent, secondStudent]);
            individualClass.removeStudent(secondStudent)
            expect(individualClass.student).toEqual([firstStudent]);
        })
    })
})