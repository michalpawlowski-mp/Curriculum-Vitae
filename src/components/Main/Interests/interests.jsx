const Interests = () => {
  return (
    <section id="interests" className="w-100">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 me-0 m-1 pb-1 fs-4">
        Zainteresowania
      </h2>
      <ul className="d-flex flex-wrap justify-content-center m-0 p-0">
        <li className="bg-secondary bg-opacity-25 rounded-3 m-0 p-1 list-inline">
          Programowanie
        </li>
        <li className="bg-secondary bg-opacity-25 rounded-3 m-0 mx-1  p-1 list-inline">
          Piłka Nożna
        </li>
        <li className="bg-secondary bg-opacity-25 rounded-3 m-0 mt-md-1  p-1 list-inline">
          Siłownia
        </li>
      </ul>
    </section>
  );
};

export default Interests;
