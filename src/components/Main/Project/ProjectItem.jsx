const ProjectItem = ({ name, description, tech, link }) => {
  return (
    <li className="bg-secondary bg-opacity-25 rounded-3 mt-1 p-1">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black text-decoration-none"
      >
        <p className="fw-bold mb-0">{name}</p>
        <p className="mb-0">{description}</p>
        <p className="mb-0">
          <strong>Technologie:</strong> {tech.join(", ")}
        </p>
      </a>
    </li>
  );
};

export default ProjectItem;
