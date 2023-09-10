function SidebarFooter() {
  return (
    <div className="p-8 flex items-center gap-4">
      <div className="rounded-full overflow-clip aspect-square bg-gradient-to-r from-green-500 to-emerald-500">
        <img src="/portrait.png" alt="me" width="48px" />
      </div>
      <div className="">
        <p className="text-base text-gray-300 font-bold">Made By</p>
        <p className="text-sm/none text-gray-400">Raihan Ghani P.A</p>
      </div>
    </div>
  );
}

export default SidebarFooter;
