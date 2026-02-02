import EducationItem from "./EducationItem";
import { educationData } from "./education.data";

const Experience = () => {
  return (
    <section id="experience" className=" d-flex flex-wrap">
      <h2 className="text-center w-100 bg-secondary bg-opacity-50 rounded-3 mt-1 m-0 p-0 fs-6">
        Wykształcenie
      </h2>

      {educationData.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Experience;
