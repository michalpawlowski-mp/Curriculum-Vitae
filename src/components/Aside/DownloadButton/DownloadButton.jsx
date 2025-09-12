const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV/Curriculum_Vitae-Michal_Pawlowski.pdf";
    link.download = "Michal_Pawlowski_CV.pdf";
    link.click();
  };

  return (
    <button
      type="button"
      id="downloadBtn"
      className="btn btn-outline-dark btn-sm mx-auto mb-2"
      onClick={handleDownload}
    >
      Pobierz CV
    </button>
  );
};

export default DownloadButton;
