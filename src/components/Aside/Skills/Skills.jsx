import { skills } from "./skills.data";

const Skills = () => {
  return (
    <section className="ms-1" id="skills">
      <h4 className="fs-4 mb-1">Umiejętności:</h4>

      {skills.map((group) => (
        <div key={group.title} className="mb-1 ms-1">
          <h5 className="fw-bold m-0">{group.title}:</h5>
          <ul className="s-list list-inline m-0">
            {group.items.map((item) => (
              <li key={item} className="list-inline-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
