import { useRef } from "react";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const printRef = useRef(null);

  return (
    <div ref={printRef}>
      <div className="d-flex">
        <Aside printRef={printRef} />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
