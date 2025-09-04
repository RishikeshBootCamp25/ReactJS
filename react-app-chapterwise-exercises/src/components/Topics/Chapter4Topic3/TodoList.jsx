export default function TodoList() {
  // Array of tasks
  const tasks = [
    { id: 1, text: "Learn React basics" },
    { id: 2, text: "Practice useState and useEffect" },
    { id: 3, text: "Build a small project" }
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Todo List</h3>

      <ul className="list-disc pl-6 space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="text-lg">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
