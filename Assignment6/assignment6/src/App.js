import "./App.css";
import Pdff from "./image/MihirVoraResume.pdf";
import ReactPDF from "../node_modules/@intelllex/react-pdf";

function App() {
  return (
    <div>
      <ReactPDF       url={Pdff}
      showProgressBar={false}
      showToolbox={false} />

    </div>
  );
}

export default App;
