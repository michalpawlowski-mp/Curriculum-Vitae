const LegalAndInfo = () => {
  return (
    <>
      <section className="m-0 w-100 d-flex flex-column mb-1" id="legalandinfo">
        <p id="rodo" className="text-center mx-1 my-0">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji
          zgodnie z obowiązującą ustawą o ochronie danych osobowych.
        </p>
        <a
          id="cv__info"
          target="_blank"
          title="Link do repozytorium CV"
          href="https://github.com/michalpawlowski-mp/Curriculum-Vitae"
          className="text-secondary link-underline link-underline-opacity-0  text-center opacity-25"
        >
          CV - wykonane za pomocą React.js, SCSS, Bootstrap i Vite.
        </a>
      </section>
    </>
  );
};

export default LegalAndInfo;
