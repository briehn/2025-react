import SideBar from "./components/SideBar.jsx";
import DefaultScreen from "./components/DefaultScreen.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import ProjectView from "./components/ProjectView.jsx";

import { useRef, useState } from "react";

function App() {
  /* view states
    default
    create
    view
  */

  const [viewState, setViewState] = useState("default");
  const [projects, setAddProjects] = useState([]);
  const projectModal = useRef();
  const [currentProject, setCurrentProject] = useState({});

  console.log('test');

  function openModal() {
    setViewState("create");
  }

  function addProject(project) {
    setAddProjects((prevProjects) => [project, ...prevProjects]);
    setViewState("default");
  }

  function viewProject(project) {
    setCurrentProject(project);
    setViewState("view");
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          func={openModal}
          projects={projects}
          viewProject={viewProject}
        />

        {viewState === "create" && (
          <ProjectModal ref={projectModal} func={addProject} />
        )}
        {viewState === "default" && <DefaultScreen func={openModal} />}
        {viewState === "view" && <ProjectView project={currentProject} />}
      </main>
    </>
  );
}

export default App;
