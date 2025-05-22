import SideBar from './components/SideBar.jsx';
import ProjectView from './components/ProjectView.jsx';
import ProjectModal from './components/ProjectModal.jsx';

import {useRef, useState} from 'react';

function App() {
  const [creatingProject, setCreatingProject] = useState(false);
  const [projects, setAddProjects] = useState([]);
  const projectModal = useRef();

  function openModal() {
    setCreatingProject(true);
  }

  function addProject(project) {
    setAddProjects((prevProjects) => [project, ...prevProjects]);
    setCreatingProject(false);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar func={openModal} projects={projects}/>

        {creatingProject && <ProjectModal ref={projectModal} func={addProject} />}
        {!creatingProject && <ProjectView func={openModal} />}
      </main>
    </>
  );
}

export default App;
