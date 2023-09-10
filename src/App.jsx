import Forms from "./components/Forms/Forms";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import Sidebar from "./components/Sidebar/Sidebar";
import { usePDF } from "./contexts/PDFContext";

function App() {
  const { selected } = usePDF();
  return (
    <main className="w-screen h-screen flex">
      <Sidebar />
      <Forms />
      {selected > 0 && <PDFViewer />}
    </main>
  );
}
export default App;
