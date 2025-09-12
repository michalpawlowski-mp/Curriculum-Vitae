const Experience = () => {
  return (
    <section id="experience" className="mx-1 d-flex flex-wrap">
      <h2 className="text-center w-100 bg-secondary bg-opacity-50 rounded-3 my-1 py-1 pt-0 fs-6">Doświadczenie</h2>

      {/* <ul className="canpack bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
          <li className="date opacity-75">08.2023 – 09.2023 (2 mies.)</li>
          <li className="name fw-bold">
            CANPACK S.A.
            <i className="city"> Bydgoszcz</i>
          </li>
          <li className="position">Operator maszyn</li>
          <li className="description">
            <ol className="p-0 ps-3">
              <li>Obsługa maszyn produkcyjnych i bieżąca kontrola ich pracy.</li>
            </ol>
          </li>
        </ul> */}
      <ul className="bg-secondary bg-opacity-25 rounded-3  m-0  p-1 pe-0 list-inline w-100">
        <li className="date opacity-75">08/2022 – 09/2022 (2 mies.)</li>
        <li className="name fw-bold me-2">Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
        <li className="position ">Dział Samodzielnej Sekcji Łączności (STAŻ)</li>
        <li className="description">
          <ol className="p-0">
            <li className="list-inline">- Wsparcie techniczne dla szpitalnych systemów łączności</li>
            <li className="list-inline">- Zarządzanie systemami telekomunikacyjnymi i kontrolą dostępu</li>
          </ol>
        </li>
      </ul>
      <ul className="bg-secondary bg-opacity-25 rounded-3 my-1 p-1 list-inline w-100">
        <li className="date opacity-75">12/2021 – 08/2022 (9 mies.)</li>
        <li className="name fw-bold">Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy</li>
        <li className="position ">Dział Techniczny</li>
        <li className="description">
          <ol className="p-0 ">
            <li className="list-inline">- Wsparcie techniczne systemów i sprzętu komputerowego na uczelni</li>
            <li className="list-inline">- Wsparcie w utrzymaniu i aktualizacji infrastruktury IT.</li>
          </ol>
        </li>
      </ul>
      <ul className="bg-secondary bg-opacity-25 rounded-3  m-0  p-1 list-inline w-100 ">
        <li className="date opacity-75">07/2021 – 09/2021 (3 mies.)</li>
        <li className="name fw-bold">
          BELMA ACCESSORIES SYSTEMS
          <i className="city"> Bydgoszcz</i>
        </li>
        <li className="position ">Referent ds. Informatycznych</li>
        <li className="description">
          <ol className="p-0  ">
            <li className="list-inline">- Wsparcie techniczne w zarządzaniu systemami informatycznymi</li>
            <li className="list-inline">- Rozwiązywanie problemów technicznych związanych z siecią i sprzętem</li>
            <li className="list-inline">- Przygotowywanie dokumentacji technicznej.</li>
          </ol>
        </li>
      </ul>
      {/* <ul className="bassm bass bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline">
          <li className="date opacity-75">05.2020 – 09.2020 (5 mies.)</li>
          <li className="name fw-bold">
            BELMA ACCESSORIES SYSTEMS
            <i className="city"> Bydgoszcz</i>
          </li>
          <li className="position">Monter</li>
          <li className="description">
            <ol className="p-0 ps-3">
              <li>Montaż szaf do energii odnawialnej, energetyczne oraz informatyczne</li>
            </ol>
          </li>
        </ul> */}
    </section>
  );
};

export default Experience;
