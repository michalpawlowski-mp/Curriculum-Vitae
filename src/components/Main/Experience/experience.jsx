const Experience = () => {
  return (
    <section id="experience" className="w-50">
      <h2 className="text-center bg-secondary bg-opacity-50 rounded-4 m-1 p-1 fs-4">Doświadczenie</h2>
      <div className="job d-flex flex-wrap">
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
        <ul className="biziel bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline w-100">
          <li className="date opacity-75">08.2022 – 09.2022 (2 mies.)</li>
          <li className="name fw-bold">Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
          <li className="position">Dział Samodzielnej Sekcji Łączności (STAŻ)</li>
          <li className="description">
            <ol className="p-0 ps-3">
              <li>Wsparcie techniczne dla szpitalnych systemów łączności</li>
              <li>Zarządzanie systemami telekomunikacyjnymi i kontrolą dostępu</li>
            </ol>
          </li>
        </ul>
        <ul className="iiukw bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline w-100">
          <li className="date opacity-75">12.2021 – 08.2022 (9 mies.)</li>
          <li className="name fw-bold">Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy</li>
          <li className="position">Dział Techniczny</li>
          <li className="description">
            <ol className="p-0 ps-3">
              <li>Wsparcie techniczne systemów i sprzętu komputerowego na uczelni</li>
              <li>Wsparcie w utrzymaniu i aktualizacji infrastruktury IT.</li>
            </ol>
          </li>
        </ul>
        <ul className="bassi bass bg-secondary bg-opacity-25 rounded-4 m-1 p-2 list-inline w-100">
          <li className="date opacity-75">07.2021 – 09.2021 (3 mies.)</li>
          <li className="name fw-bold">
            BELMA ACCESSORIES SYSTEMS
            <i className="city"> Bydgoszcz</i>
          </li>
          <li className="position">Referent ds. Informatycznych</li>
          <li className="description">
            <ol className="p-0 ps-3">
              <li>Wsparcie techniczne w zarządzaniu systemami informatycznymi</li>
              <li>Rozwiązywanie problemów technicznych związanych z siecią i sprzętem</li>
              <li>Przygotowywanie dokumentacji technicznej.</li>
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
      </div>
    </section>
  );
};

export default Experience;
