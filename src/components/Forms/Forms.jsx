import { usePDF } from "../../contexts/PDFContext";
import FormsDownload from "./FormsDownload";
import FormsInput from "./FormsInput";
import FormsTitle from "./FormsTitle";

function Forms() {
  const { categories, selected } = usePDF();

  return (
    <section className="flex-1 flex flex-col bg-[#242729]">
      {selected > 0 ? (
        <>
          <FormsTitle>
            {selected > 0 && categories[selected - 1].text}
          </FormsTitle>
          <FormsInput />
          <FormsDownload>Download Dokumen</FormsDownload>
        </>
      ) : null}
    </section>
  );
}

export default Forms;
