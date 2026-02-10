import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="d-flex">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
