const Project = () => {
  return (
    <section className="m-0" id="project">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 mb-1  p-1 pt-0 fs-4">
        Projekty
      </h2>
      <div className="d-flex">
        <ul className="bg-secondary bg-opacity-25 rounded-3 me-1 p-1 list-inline w-50">
          <li className="name list-group">Projekty studenckie:</li>
          <li className=" list-group">
            <b>Praca inżynierska</b>– Realizacja projektu informatycznego
            związanego z tworzeniem aplikacji webowej opartej głównie na
            front-endzie. W projekcie wykorzystano HTML, CSS (w tym RWD) oraz
            JavaScript (bez użycia frameworków, z wykorzystaniem czystego
            JavaScriptu).{" "}
            <a
              href="https://github.com/aJpaRmp/GamingHub"
              target="_blank"
              className="text-black text-decoration-none"
            >
              Projekt dostępny na GitHubie.
            </a>
          </li>
          <li className=" list-group">
            <b>Projekt studencki</b>– Współpraca z firmą BSB w projekcie
            uczelnianym. Tworzyłem front-end w HTML, CSS, JavaScript oraz
            integrowałem API Google Maps. Pracując zespołowo, korzystaliśmy z
            GitHub do zarządzania wersjami, co pozwoliło mi rozwinąć
            umiejętności pracy zespołowej i praktycznego stosowania technologii.
            <a
              href="https://github.com/Svobek/meet-it"
              target="_blank"
              className="text-black text-decoration-none"
            >
              Projekt dostępny na GitHubie.
            </a>
          </li>
        </ul>
        <ul className="bg-secondary bg-opacity-25 rounded-3 p-1 list-inline w-50">
          <li className="name list-group">Mini Projekty:</li>
          <li className="list-group">
            <b>CloneTube</b> – Aplikacja internetowa, która klonuje interfejs
            serwisu YouTube. Została zbudowana w Next.js, React i TypeScript. Do
            stylowania wykorzystałem Tailwind CSS, a dane są pobierane za pomocą
            YouTube API v3.
            <a
              href="https://github.com/aJpaRmp/MyWebsite"
              target="_blank"
              className="text-black text-decoration-none"
            >
              Projekt dostępny na GitHubie.
            </a>
          </li>
          <li className="list-group">
            <b>Strona Portfolio</b> – Moje osobiste portfolio, które prezentuje
            moje projekty i umiejętności. Strona została stworzona przy użyciu
            Vite i React. Do stylowania zastosowałem Tailwind CSS.
            <a
              href="https://github.com/aJpaRmp/MyWebsite"
              target="_blank"
              className="text-black text-decoration-none"
            >
              Projekt dostępny na GitHubie.
            </a>
          </li>
          <li className="list-group">
            <b>Inne Projekty</b>
            <a
              href="https://github.com/aJpaRmp?tab=repositories"
              target="_blank"
              className="text-black text-decoration-none"
            >
              - wiele więcej projektów dostępnych na moim profilu GitHub.
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
