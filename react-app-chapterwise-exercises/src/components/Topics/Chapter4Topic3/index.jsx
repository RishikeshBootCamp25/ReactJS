import StudentList from "./StudentList";
import TodoList from "./TodoList";

function Chapter4Topic3() {
  return (
    <>
    <h3>Example 1:</h3>
    <div className="p-4 bg-white">
      <TodoList></TodoList>
      </div>
    <h3>Example 2:</h3>
    <div className="p-4 bg-white">
       <StudentList></StudentList>
    </div>
    </>
  );
}

export default Chapter4Topic3;