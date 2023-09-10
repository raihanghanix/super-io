import { usePDF } from "../../contexts/PDFContext";

function FormsDownload({ children }) {
  const { handleDownload } = usePDF();

  // function handleClick() {
  //   var a = document.createElement("a");
  //   a.href = { docUrl }; // Replace with the actual file URL
  //   a.download = `${categories[selected - 1].text}.pdf`; // Replace with the desired file name
  //   a.click();
  //   window.URL.revokeObjectURL(a.href);
  // }

  return (
    <div className="p-8">
      <button
        className="w-full p-3 bg-gradient-to-r from-green-500 to-emerald-500 font-bold text-gray-200 rounded-lg hover:-rotate-1 active:scale-105 duration-100"
        onClick={() => handleDownload()}
      >
        {children}
      </button>
    </div>
  );
}

export default FormsDownload;
