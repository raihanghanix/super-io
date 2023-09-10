import { usePDF } from "../../contexts/PDFContext";

function PDFViewer() {
  const { docUrl } = usePDF();
  return (
    <section className="flex-1 bg-[#242729]">
      <embed src={docUrl} width="100%" height="100%" type="application/pdf" />
    </section>
  );
}

export default PDFViewer;
