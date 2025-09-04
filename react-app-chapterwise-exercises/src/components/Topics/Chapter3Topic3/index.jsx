
import ToggleText from "./ToggleText";
import InputAlert from "./InputAlert";


function Chapter3Topic3() {
  return (
    <>
        <h3>Example 1:</h3>
        <div className="p-4 bg-white">
          <InputAlert></InputAlert>
        </div>
        <h3 className="my-3">Example 2:</h3>
        <div className="p-4 bg-white"><ToggleText /></div>
    </>
  );
}

export default Chapter3Topic3;