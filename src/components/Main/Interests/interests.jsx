const Interests = () => {
  return (
    <section id="interests" className="w-100">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1 fs-4">Zainteresowania</h2>
      <ul className="d-flex flex-wrap justify-content-center m-0 p-0">
        <li className="bg-secondary bg-opacity-25 rounded-4 mx-1 p-1 list-group">Programowanie</li>
        <li className="bg-secondary bg-opacity-25 rounded-4 mx-1 p-1 list-group">Piłka Nożna</li>
        <li className="bg-secondary bg-opacity-25 rounded-4 mx-1 m-md-1 p-1 list-group">Siłownia</li>
      </ul>
    </section>
  );
};

export default Interests;
