import SidebarCategories from "./SidebarCategories";
import SidebarFooter from "./SidebarFooter";
import SidebarTitle from "./SidebarTitle";

function Sidebar() {
  return (
    <section className="w-[312px] flex flex-col text-gray-300 bg-[#323639]">
      <SidebarTitle>SuPer.io</SidebarTitle>
      <SidebarCategories />
      <SidebarFooter />
    </section>
  );
}

export default Sidebar;
