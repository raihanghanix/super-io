import { usePDF } from "../../contexts/PDFContext";

function FormsInput() {
  const { heading, setHeading, body, setBody, footer, setFooter } = usePDF();

  return (
    <div className="px-8 py-2 flex-1 flex flex-col gap-4 overflow-y-auto">
      <div className="flex-1">
        <textarea
          className="resize-none w-full h-full p-4 rounded-lg bg-[#323639] text-gray-400 focus:border-2 focus:border-green-500"
          name="heading"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></textarea>
      </div>

      <div className="flex-1">
        <textarea
          className="resize-none w-full h-full p-4 rounded-lg bg-[#323639] text-gray-400 focus:border-2 focus:border-green-500"
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="flex-1">
        <textarea
          className="resize-none w-full h-full p-4 rounded-lg bg-[#323639] text-gray-400 focus:border-2 focus:border-green-500"
          name="footer"
          id="footer"
          value={footer}
          onChange={(e) => setFooter(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default FormsInput;
