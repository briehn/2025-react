export default function ProjectModal({ ref, func }) {
    let project = {
        title: "",
        description: "",
        dueDate: "",
    }

    function handleSubmit() {
        func(project);
    }

  return (
    <>
      <div ref={ref} open className="bg-transparent mt-8">
        <form>
          <label>Title</label>
          <input
            type="text"
            className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
            onChange={(e) => (project.title = e.target.value)}
          />
          <label>Description</label>
          <textarea
            type="text"
            className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
            onChange={(e) => (project.description = e.target.value)}
          />
          <label>Due Date</label>
          <input
            type="date"
            className="border-2 border-stone-700 rounded-md p-2 w-full mb-4"
            onChange={(e) => (project.dueDate = e.target.value)}
          />
          <button type="button" className="px-4">Cancel</button>
          <button type="button" className="px-5 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </>
  );
}
