const Grade = require('../src').Grade;
const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

describe('Grade', () => {
    beforeEach(const student = new Student('Bob Jones', 19, 12, [60, 70, 80, 90], 2025, ['foosball', 'beerpong', 'basketweaving']);
    const teacher = new Teacher('Jane Doe', 'Math', 'UCLA', 6);
    const individualClass = new IndividualClass('Math', 12, teacher, [student]);))

    describe('insantiates a new grade', () => {
        test('takes the following arguments: getStudentCount,calculateGradeAverage(), addIndividualClass() ', () => {
           
        })
    })
 }
