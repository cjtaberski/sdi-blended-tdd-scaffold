const Student = require('../src').Student;

describe('Student', () => {
    describe('insantiates a new Student', () => {
        test('takes the following arguments: name, age, gradeLevel, testScores, graduationYear, activities', () => {
    const student = new Student('Jane Doe', 'Biology', 'UCLA', 6, , );
    expect(student.name).toBe('Jane Doe');
    expect(student.age).toBe('Biology');
    expect(student.gradeLevel).toBe('UCLA');
    expect(student.testScores).toBe(6);
    expect(student.gradutionYear).toBe(6);
    expect(student.activities).toBe(6);
        }
    }
}