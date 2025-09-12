const Project = () => {
  return (
    <section className="m-1 border-bottom" id="project">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 py-1 pt-0 mb-1 fs-6">Projekty</h2>
      <ul className="m-0 mb-1 list-inline d-flex flex-column">
        <li className="list-group bg-secondary bg-opacity-25 rounded-3 mb-1 p-1">
          <a
            href="https://github.com/aJpaRmp/GamingHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-decoration-none"
          >
            <b>GamingHub</b> [Praca inżynierska] – Realizacja aplikacji webowej zorientowanej na front-end, stworzonej w
            HTML, CSS (RWD) i Vanilla JavaScript.
          </a>
        </li>
        <li className="list-group bg-secondary bg-opacity-25 rounded-3 mb-1 p-1">
          <a
            href="https://github.com/Svobek/meet-it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-decoration-none"
          >
            <b>MEET-IT</b> [Projekt studencki] – Frontend aplikacji stworzony w ramach współpracy z firmą BSB.
            Wykorzystano HTML, CSS, JS oraz zintegrowano API Google Maps.
          </a>
        </li>
        <li className="list-group bg-secondary bg-opacity-25 rounded-3 mb-1 p-1">
          <a
            href="https://github.com/michalpawlowski-mp/CloneTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-decoration-none"
          >
            <b>CloneTube</b> – Aplikacja webowa, będąca klonem serwisu YouTube. Zbudowana w Next.js, React i TypeScript.
            Do stylowania użyto Tailwind CSS, a dane pobierano z YouTube API v3.
          </a>
        </li>
        <li className="list-group bg-secondary bg-opacity-25 rounded-3 mb-1 p-1">
          <a
            href="https://github.com/michalpawlowski-mp/pawlowskimichal.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-decoration-none"
          >
            <b>Strona Portfolio</b> – Osobiste portfolio prezentujące moje projekty i umiejętności. Strona zbudowana w
            React z wykorzystaniem Vite i Tailwind CSS.
          </a>
        </li>
      </ul>
      <div id="projects" className="px-1">
        <a
          href="https://github.com/michalpawlowski-mp?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-decoration-none"
        >
          <b>więcej projektów dostępnych na moim GitHub.</b>
        </a>
      </div>
    </section>
  );
};

export default Project;
