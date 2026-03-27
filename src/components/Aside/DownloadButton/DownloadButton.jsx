import { useReactToPrint } from "react-to-print";

const DownloadButton = ({ printRef }) => {
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Michal_Pawlowski_CV",
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV/Michal-Pawlowski-Curriculum-Vitae.pdf";
    link.download = "Michal_Pawlowski_Curriculum-Vitae.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex flex-column gap-1 mb-2">
      <button
        type="button"
        className="btn btn-outline-dark btn-sm mx-auto"
        onClick={handleDownload}
      >
        Pobierz CV
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm mx-auto d-print-none"
        onClick={handlePrint}
      >
        Generuj PDF
      </button>
    </div>
  );
};

export default DownloadButton;
