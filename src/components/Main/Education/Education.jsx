const Education = () => {
  return (
    <section id="education" className="m-1 mb-0 d-flex flex-column">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 py-1 mb-1 pt-0 fs-6">Wykształcenie</h2>
      <ul className="bg-secondary bg-opacity-25 rounded-3 m-0 p-1 list-inline">
        <li className="date opacity-75">10/2020 – 03/2024 (3 lata 6 mies.)</li>
        <li className="name fw-bold">Uniwersytet Kazimierza Wielkiego w Bydgoszczy</li>
        <li className="study">Inżynier Informatyki</li>
      </ul>
      <ul className="bg-secondary bg-opacity-25 rounded-3 m-0 mt-1 p-1 pe-2 list-inline">
        <li className="date opacity-75">09/2016 – 04/2020 (3 lata 8 mies.)</li>
        <li className="name fw-bold">Zespół Szkół Mechanicznych nr. 1 w Bydgoszczy</li>
        <li className="study">Technik Informatyk</li>
      </ul>
    </section>
  );
};

export default Education;
