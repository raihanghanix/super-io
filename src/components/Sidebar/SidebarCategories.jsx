import { usePDF } from "../../contexts/PDFContext";
import SidebarItem from "./SidebarItem";

function SidebarCategories() {
  const { categories } = usePDF();
  return (
    <div className="px-8 py-2 flex-1 flex flex-col gap-4 overflow-y-auto">
      {categories.map((cat) => (
        <SidebarItem key={cat.id} id={cat.id} icon={cat.icon} text={cat.text} />
      ))}
    </div>
  );
}

export default SidebarCategories;
