import Message from "./Message";

function Chapter3Topic1() {
  return (
    <>
    <div className="flex gap-3">
      <div className="justify-center h-screen bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Functional Components</h2>
        <div className="p-4">
          <Message text="Hello, this is a message!" />
          <Message  name="Priyanka" about="I love to paint!"  />
        </div>
      </div>
    </div>
    </>
  );
}

export default Chapter3Topic1;