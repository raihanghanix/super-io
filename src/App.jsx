import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import categories from "../data/categories";

function App() {
  const [selected, setSelected] = useState(null);
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [url, setUrl] = useState("");

  const opt = {
    margin: 1,
    filename: categories[selected - 1]?.text || "file.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
      font: "times",
    },
  };

  const element = document.getElementById("element-to-print");

  useEffect(
    function () {
      if (selected > 0) {
        setHeading(categories[selected - 1].heading);
        setBody(categories[selected - 1].body);
        setFooter(categories[selected - 1].footer);
        setTimeout(() => {
          html2pdf()
            .set(opt)
            .from(element)
            .outputPdf("dataurl")
            .then((data) => setUrl(data));
        }, 10);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );

  function handleApply() {
    setIsDisabled(true);
    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf("dataurl")
      .then((data) => setUrl(data));
    setTimeout(() => setIsDisabled(false), 1000);
  }

  function handleDownload() {
    html2pdf().set(opt).from(element).save();
  }

  return (
    <div className="w-screen h-screen font-sans">
      <main className="w-full h-full flex">
        <section className="flex-1 bg-[#242729] flex">
          <aside className="border-r border-r-[#323639] w-max h-full flex flex-col justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`p-4 bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-[#242729] ${
                  selected === cat.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-[#242729]"
                    : "text-green-500"
                }`}
                onClick={() => setSelected(cat.id)}
              >
                <i className={cat.icon}></i>
              </button>
            ))}
          </aside>
          {selected > 0 ? (
            <div className="w-full h-full flex flex-col">
              <div className="p-4 border-b border-b-[#323639]">
                <h1 className="font-[900] tracking-tighter bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent text-2xl/none text-left line-clamp-1">
                  {categories[selected - 1]?.text || null}
                </h1>
              </div>
              <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                <textarea
                  className="h-full p-4 bg-[#323639] resize-none text-gray-400 text-base rounded-lg"
                  name="heading"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                ></textarea>
                <textarea
                  className="h-full p-4 bg-[#323639] resize-none text-gray-400 text-base rounded-lg"
                  name="body"
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <textarea
                  className="h-full p-4 bg-[#323639] resize-none text-gray-400 text-base rounded-lg"
                  name="footer"
                  id="footer"
                  value={footer}
                  onChange={(e) => setFooter(e.target.value)}
                ></textarea>
              </div>
              <div className="p-4 border-t border-t-[#323639] flex gap-4">
                <button
                  className="text-[#242729] bg-gradient-to-r from-green-500 to-emerald-500 w-full font-bold p-2 rounded-lg"
                  disabled={isDisabled}
                  onClick={() => handleApply()}
                >
                  <i className="fa-solid fa-rotate-right mr-2"></i> Terapkan
                  Perubahan
                </button>
                <button
                  className="text-[#242729] bg-gradient-to-r from-green-500 to-emerald-500 w-full font-bold p-2 rounded-lg"
                  onClick={() => handleDownload()}
                >
                  <i className="fa-solid fa-download mr-2"></i> Download
                </button>
              </div>
            </div>
          ) : (
            <StartMsg />
          )}
        </section>

        {selected > 0 && (
          <section className="flex-1">
            <embed
              src={url}
              width="100%"
              height="100%"
              type="application/pdf"
            />
          </section>
        )}
      </main>
      <ElementToPrint heading={heading} body={body} footer={footer} />
    </div>
  );
}

function ElementToPrint({ heading, body, footer }) {
  return (
    <div id="element-to-print" className="font-serif font-[12px] leading-8">
      <div className="whitespace-pre-wrap">
        <p className="font-bold text-center">{heading}</p>
        <br />
      </div>
      <div className="whitespace-pre-wrap">
        <p className="font-normal text-justify">{body}</p>
        <br />
      </div>
      <div className="whitespace-pre-wrap">
        <p className="font-normal text-right">{footer}</p>
        <br />
      </div>
    </div>
  );
}

function StartMsg() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex flex-col p-6">
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
          <h1 className="pr-4 text-6xl/none tracking-tighter bg-gradient-to-r from-green-500 to-emerald-500 font-[900] bg-clip-text text-transparent">
            SuPer.io
          </h1>
          <p className="font-bold text-gray-400 text-lg/none animate-pulse pr-4">
            Silahkan pilih kategori surat disamping...
          </p>
        </div>
        <div className="text-center flex justify-center items-center gap-4">
          <img
            className="aspect-square rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
            src="/portrait.png"
            alt="portrait"
            width="32px"
          />
          <p className="pr-4 text-sm/none text-gray-500">
            Copyright&copy; Raihan Ghani P.A {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
