import GitHubStars from "./GitHubStars";

function ProjectCard({id,name,info,image,tools,stars,forward}){
    return (
      <div key={id} className="project-card bg-gray-900 rounded-lg shadow-2xl p-4 max-w-xs text-white">
      <div className="relative h-56 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            filter: "blur(6px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        <img
          src={image}
          alt={name}
          className="relative z-10 w-full h-full object-contain"
        />
      </div>
  
      <div className="mt-4">
      <h2 className="text-md font-bold truncate">{name}</h2>
      <p className="text-sm text-wrap truncate">{info}</p>
        <div className="flex items-center justify-between mt-3">
           <GitHubStars link={forward} stars={stars}></GitHubStars>
        </div>
  
        <div className="flex flex-wrap mt-3 gap-2">
          {tools.slice(0, 3).map((genre) => (
            <span 
              key={genre}
              className="flex gap-1 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
            > 
              <img className='w-4' src={`./svg/${genre}.svg`}></img>
              {genre}
            </span>
          ))}
          {tools.length > 3 && (
                  <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                    +{(tools.length) - 3}
                  </span>
                )}
        </div>
  
      </div>
    </div>
    )}

    export default ProjectCard;