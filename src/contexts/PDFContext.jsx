import { createContext, useContext, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import categories from "../../data/categories";

const PDFContext = createContext();

function PDFProvider({ children }) {
  const [selected, setSelected] = useState(null);
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");

  // Word A4 Config
  let pageWidth = 210,
    lineHeight = 2.25,
    margin = 25.4,
    maxLineWidth = pageWidth - margin * 2,
    fontSize = 12,
    ptsPerInch = 72,
    oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
    doc = new jsPDF({
      unit: "mm",
      lineHeight: lineHeight,
      format: "a4",
    }).setProperties({
      title: selected > 0 ? categories[selected - 1].text : "Title",
    });

  useEffect(
    function () {
      if (selected > 0) {
        setHeading(categories[selected - 1].heading);
        setBody(categories[selected - 1].body);
        setFooter(categories[selected - 1].footer);
      }
    },
    [selected]
  );

  function handleHeading() {
    const text = `${heading}\n\n${body}\n\n${footer}`;

    const textLines = doc
      .setFont("times")
      .setFontSize(fontSize)
      .splitTextToSize(text, maxLineWidth);

    doc.text(textLines, margin, margin + 2 * oneLineHeight);
  }
  handleHeading();

  function handleDownload() {
    doc.save(`${categories[selected - 1].text}.pdf`);
  }

  const docUrl = doc.output("dataurlstring");

  return (
    <PDFContext.Provider
      value={{
        categories,
        docUrl,
        selected,
        setSelected,
        heading,
        setHeading,
        body,
        setBody,
        footer,
        setFooter,
        handleDownload,
      }}
    >
      {children}
    </PDFContext.Provider>
  );
}

function usePDF() {
  const context = useContext(PDFContext);
  if (context === undefined)
    throw new Error("PDFContext was used outside PDFProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PDFProvider, usePDF };
