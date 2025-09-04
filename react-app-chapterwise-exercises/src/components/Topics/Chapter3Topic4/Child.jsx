export default function Child({ sendMessage }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => sendMessage("Hello Parent!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

