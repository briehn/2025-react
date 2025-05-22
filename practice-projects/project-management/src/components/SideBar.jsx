import ProjectModal from "./ProjectModal";

export default function SideBar({ func, projects, viewProject }) {


    function openProject(project) {
        viewProject(project);
    }

  let projectList = projects.map((project, index) => {
    return (
      <button onClick={() => openProject(project)} key={index} className="text-stone-400">
        {project.title}
      </button>
    );
  });

  return (
    <>
      <div className="pl-4 pr-12 bg-stone-900 rounded-md">
        <h1 className="text-white py-5">Your Projects</h1>
          <button
            onClick={func}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            + Add Project
          </button>
        {projects.length != 0 && (
          <div className=" flex flex-col gap-2 mt-4 items-start">{projectList}</div>
        )}
      </div>
    </>
  );
}
