import { calculateDuration, formatDate } from "../../../utils/calculateDuration";

const ExperienceItem = ({ startDate, endDate, company, position, description }) => {
  const durationText = calculateDuration(startDate, endDate);
  const dateRange = `${formatDate(startDate)} – ${formatDate(endDate)}`;

  return (
    <ul className="bg-secondary bg-opacity-25 rounded-3 mt-1 m-0 p-1 list-inline w-100">
      <li className="date opacity-75">
        {dateRange} ({durationText})
      </li>
      <li className="name fw-bold">{company}</li>
      <li className="position fst-italic">{position}</li>
      <li className="description">
        <ul className="p-0 list-unstyled">
          {description.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ExperienceItem;
