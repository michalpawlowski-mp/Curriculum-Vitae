import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import Info from "./Info/Info";
import Project from "./Project/Project";
import "../../style/Main.scss";

function Main() {
  return (
    <>
      <main className="h-100 w-auto">
        <Profile />
        <Info />
        <Education />
        <Experience />
        <Project />
      </main>
    </>
  );
}

export default Main;
