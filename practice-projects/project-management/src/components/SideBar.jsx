import ProjectModal from "./ProjectModal"

export default function SideBar({func, projects}) {


    return (
        <>
        <div className="pl-4 pr-6 bg-stone-900 rounded-md">
            <h1 className="text-white">Your Projects</h1>
            {projects.length === 0 && <button onClick={func} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>}
            {projects.length != 0 && <div className="text-gray-500">{projects[0].title}</div>}
        </div>
        </>
    )
}
