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

  const projectModal = useRef();

  const [projectsState, setProjectsState] = useState({
    projects: [],
    viewState: "default",
    currentProject: {},
  })

  function openModal() {
    setProjectsState((prevState) => ({
      ...prevState,
      viewState: "create",
    }));
  }

  function addProject(project) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [project, ...prevState.projects],
      viewState: "default",
    }));
  }

  function viewProject(project) {
    setProjectsState((prevState) => ({
      ...prevState,
      currentProject: project,
      viewState: "view",
    }));
  }

  function deleteProject(projectToDelete) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter(
        (project) => project !== projectToDelete
      ),
      viewState: "default",
    }));
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          func={openModal}
          projects={projectsState.projects}
          viewProject={viewProject}
        />

        {projectsState.viewState === "create" && (
          <ProjectModal ref={projectModal} func={addProject} setViewState={setProjectsState} />
        )}
        {projectsState.viewState === "default" && <DefaultScreen func={openModal} />}
        {projectsState.viewState === "view" && <ProjectView project={projectsState.currentProject} onDelete={deleteProject}/>}
      </main>
    </>
  );
}

export default App;
