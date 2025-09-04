import Message from "./Message";
import LikeButton from "./LikeButton";
import CounterClass from "./Counter";


function Chapter3Topic2() {
  return (
    <>
        <h2 className="text-xl font-bold mb-4">Functional Components</h2>
        <h3>Example 1:</h3>
        <div className="p-4 bg-white">
          <Message text="Hello, this is a message!" />
          <Message  name="Priyanka" about="I love to paint!"  />
        </div>
        <h3 className="my-3">Example 2:</h3>
        <div className="p-4 bg-white"><LikeButton></LikeButton></div>
      
        <h2 className="text-xl font-bold my-5">Class Components</h2>
        <h3 className="my-3">Example 1:</h3>
        <div className="p-4 bg-white"><CounterClass /></div>
        
    </>
  );
}

export default Chapter3Topic2;