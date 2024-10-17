const Teacher = require('../src').Teacher;

describe('Teacher', () => {
  describe('insantiates a new Teacher', () => {
    test('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      expect(teacher.subjectTaught).toBe('Biology');
      expect(teacher.universityAttended).toBe('UCLA');
      expect(teacher.yearsAsTeacher).toBe(6);
    })
    test(`updates teacher's name`, () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      teacher.updateTeacherName('Alex');
      expect(teacher.name).toBe('Alex');
    })
    test(`updates teacher's subject`, () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      teacher.updateSubjectTaught('Math');
      expect(teacher.subjectTaught).toBe('Math');
    })
    test(`updates years as teacher by 1`, () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      teacher.updateYearsAsTeacher();
      expect(teacher.yearsAsTeacher).toBe(7);
    })
  })
})