const ExperienceItem = ({ date, company, position, description }) => {
  return (
    <ul className="bg-secondary bg-opacity-25 rounded-3 mt-1 m-0 p-1 list-inline w-100">
      <li className="date opacity-75">{date}</li>
      <li className="name fw-bold">{company}</li>
      <li className="position fst-italic">{position}</li>
      <li className="description">
        <ol className="p-0">
          {description.map((item, index) => (
            <li key={index} className="list-inline">
              - {item}
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
};

export default ExperienceItem;
