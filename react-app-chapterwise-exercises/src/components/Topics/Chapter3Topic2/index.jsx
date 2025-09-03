import Message from "./Message";
import LikeButton from "./LikeButton";
import CounterClass from "./Counter";


function Chapter3Topic2() {
  return (
    <>
    <h2>Props and State</h2>
    <div className="flex gap-3">
      <div className="justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Functional Components</h2>
        <div className="p-4">
          <Message text="Hello, this is a message!" />
          <Message  name="Priyanka" about="I love to paint!"  />
        </div>
      </div>
      <div className="justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Class Components</h2>
        <div className="p-4"><CounterClass /></div>
        <div className="p-4"><LikeButton></LikeButton></div>
      </div>
    </div>
    </>
  );
}

export default Chapter3Topic2;