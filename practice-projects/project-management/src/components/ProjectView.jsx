import image from '../assets/no-projects.png';
import ProjectModal from './ProjectModal';

export default function ProjectView({func}) {


    return (
        <>
            <div className="text-align-center flex flex-col items-center">
                <img src={image} alt="No Projects" className="w-1/12 mx-auto mt-8" />
                <p>No Project Selected</p>
                <p>Select a project or get started with a new one</p>
                <button onClick={func} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-auto">
                    Create new Project
                </button>
            </div>
        </>
    )
}