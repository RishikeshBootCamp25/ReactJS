import student from './student.json'

export default function StudentInfo() {
  // const student = { name: "Priyanka", grade: 9 };

  return (
    <div>
      <h4>{student.name} is in grade {student.grade}</h4>
    </div>
  );
}
