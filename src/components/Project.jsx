import ProjectCard from "./ProjectCard";
import { Projects } from './data.js';

function Project() {
  return (
    <div id="projects"  className="page min-h-screen grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
      {Projects.map(ele => (
          <ProjectCard 
            id={ele.id} 
            name={ele.name} 
            image={ele.image} 
            info={ele.info} 
            stars={ele.stars} 
            tools={ele.tools}
            forward={ele.forward}
          />
      ))}
    </div>
  );
}

export default Project;