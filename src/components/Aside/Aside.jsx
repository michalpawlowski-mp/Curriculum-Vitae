import Contact from "./Contact/Contact";
import Language from "./Language/Language";
import Interests from "./Interests/Interests";
import Skills from "./Skills/Skills";
import DownloadButton from "./DownloadButton/DownloadButton";

function Aside() {
  return (
    <>
      <aside className="w-50 bg-secondary bg-opacity-75 d-flex flex-column justify-content-between">
        <div>
          <Contact />
          <Skills />
          <Language />
          <Interests />
        </div>
        <DownloadButton />
      </aside>
    </>
  );
}

export default Aside;
