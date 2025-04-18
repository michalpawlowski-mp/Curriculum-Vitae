const Skills = () => {
  return (
    <section className="mx-0" id="skills">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-3 m-0 my-1 pb-1 fs-4">
        Umiejętności
      </h2>
      <div className="bg-secondary bg-opacity-25 rounded-3  p-1 pt-0 list-inline">
        <h3 className="fs-6 m-0 ">Technologie frontendowe:</h3>
        <div className="m-auto">
          HTML, CSS, RWD, LESS, SASS/SCSS, Tailwind, Bootstrap, JavaScript,
          TypeScript, React, jQuery
        </div>
      </div>
      <div className="bg-secondary bg-opacity-25 rounded-3 my-1  p-1 pt-0 list-inline">
        <h3 className="fs-6 m-0 ">Narzędzia i środowiska:</h3>
        <div className="m-auto">
          Git, GitHub, npm, Vite, DevTools, VisualStudioCode
        </div>
      </div>
      <div className="bg-secondary bg-opacity-25 rounded-3  p-1 pt-0 list-inline">
        <h3 className="fs-6 m-0 ">Grafika i UI:</h3>
        <div className="m-auto">Photoshop, Photopea , Gimp, Canva</div>
      </div>
      <div className="bg-secondary bg-opacity-25 rounded-3 my-1 p-1 pt-0 list-inline">
        <h3 className="fs-6 m-0 ">Umiejętności miękkie:</h3>
        <div className="m-auto">
          Kreatywność, Praca zespołowa, Komunikatywność
        </div>
      </div>
    </section>
  );
};

export default Skills;
