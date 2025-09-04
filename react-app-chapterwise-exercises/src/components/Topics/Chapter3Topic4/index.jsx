
import StudentList from './StudentList';
import Parent from './Parent';

function Chapter3Topic4() {
  return (
    <>
    <h2 className="text-xl font-bold mb-4">Parent to Child Props Transfer</h2>
    <h3>Example 1:</h3>
    <div className="p-4 bg-white">
              <StudentList></StudentList>
            </div>

    <h2 className="text-xl font-bold my-4">Child to Props Transfer</h2>
    <h3>Example 1:</h3>
    <div className="p-4 bg-white">
      <Parent></Parent>
            </div>
    </>
  );
}

export default Chapter3Topic4;