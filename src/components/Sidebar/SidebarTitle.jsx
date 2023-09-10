function SidebarTitle({ children }) {
  return (
    <div className="p-8">
      <h1 className="w-max pr-4 text-5xl/none tracking-tighter bg-gradient-to-r from-green-500 to-emerald-500 font-[900] bg-clip-text text-transparent">
        {children}
      </h1>
    </div>
  );
}

export default SidebarTitle;
