
import ToggleText from "./ToggleText";
import StudentList from "./StudentList";


function Topic3() {
  return (
    <>
    <div className="flex gap-3">
      <div className="justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Props</h2>
        <StudentList></StudentList>
      </div>
      <div className="justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">State</h2>
        <div className="p-4"><ToggleText /></div>
      </div>
    </div>
    </>
  );
}

export default Topic3;