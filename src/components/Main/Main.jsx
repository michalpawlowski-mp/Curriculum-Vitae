import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import Info from "./Info/Info";
import Project from "./Project/Project";
import "../../style/Main.scss";
import LegalAndInfo from "./LegalAndInfo/LegalAndInfo";

function Main() {
  return (
    <>
      <main className="h-100 w-auto d-flex flex-column justify-content-between">
        <div>
          <Profile />
          <Info />
          <Education />
          <Experience />
          <Project />
        </div>

        <LegalAndInfo />
      </main>
    </>
  );
}

export default Main;
