import { usePDF } from "../../contexts/PDFContext";

function SidebarItem({ id, icon, text }) {
  const { selected, setSelected } = usePDF();

  return (
    <div
      className={`flex cursor-pointer p-4 rounded-lg hover:bg-green-500 hover:text-gray-200 active:scale-110 duration-75 ${
        selected === id ? "bg-green-500 text-gray-200" : "text-gray-400"
      }`}
      onClick={() => setSelected(id)}
    >
      <div className="w-16 flex flex-none items-center">
        <i className={`${icon}`}></i>
      </div>
      <div className="flex-1 flex items-center">
        <p className="font-bold text-sm">{text}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
