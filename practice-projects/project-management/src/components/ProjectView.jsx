export default function ProjectView({ project }) {
  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <div className="w-full">
        <div className="text-4xl mt-8 mb-4 font-bold">{project.title}</div>
        <div className="mb-4 text-gray-500">{formatDate(project.dueDate)}</div>
        <div className="whitespace-pre-line">{project.description}</div>
        <hr className="my-6 border-t-2 border-gray-300 w-1/2" />
        <div className="text-2xl my-4 font-bold">Tasks</div>
        <div>
            <input className="bg-gray-200 w-1/5 rounded h-8"></input>
            <button className="ml-4">Add Task</button>
        </div>
      </div>
    </>
  );
}
