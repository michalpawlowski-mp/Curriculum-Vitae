import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="d-flex h-100 w-100">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
