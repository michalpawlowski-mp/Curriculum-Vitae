import { projects } from "./project.data";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <section className="" id="project">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 pb-1 pt-0 m-0 fs-6">
        Projekty
      </h2>
      <ul className="m-0 list-inline d-flex flex-column">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </ul>
      <a
        href="https://github.com/michalpawlowski-mp?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-decoration-none ms-1"
      >
        <b>Więcej projektów na GitHubie</b>
      </a>
    </section>
  );
};

export default Project;
