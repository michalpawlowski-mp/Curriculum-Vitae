import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import Info from "./Info/Info";
import Project from "./Project/Project";
import "../../style/Main.scss";

function Main() {
  return (
    <>
      <main className="w-auto mx-1">
        <Profile />
        <Info />
        <Project />
        <Experience />
        <Education />
      </main>
    </>
  );
}

export default Main;
