import ExperienceItem from "./ExperienceItem";
import { experienceData } from "./experience.data";

const Experience = () => {
  return (
    <section id="experience" className=" d-flex flex-wrap">
      <h2 className="text-center w-100 bg-secondary bg-opacity-50 rounded-3 m-0 p-0 fs-6">
        Doświadczenie
      </h2>

      {experienceData.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Experience;
