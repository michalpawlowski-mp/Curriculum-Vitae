import Header from "./components/Header/header.jsx";
import Education from "./components/Main/Education/education.jsx";
import Experience from "./components/Main/Experience/experience.jsx";
import Certificates from "./components/Main/Certificates/certificates.jsx";
import Interests from "./components/Main/Interests/interests.jsx";
import Language from "./components/Main/Language/language.jsx";
import Project from "./components/Main/Project/project.jsx";
import Skills from "./components/Main/Skills/skills.jsx";
import Footer from "./components/Footer/footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="d-flex flex-column">
        <div className="d-flex">
          <div className="w-50">
            <Education />
            <div className="d-flex">
              <Certificates />
              <div className="d-flex flex-column ">
                <Language />
                <Interests />
              </div>
            </div>
          </div>
          <Experience />
        </div>
        <Skills />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default App;
