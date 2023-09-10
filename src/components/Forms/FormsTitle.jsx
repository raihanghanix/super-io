function FormsTitle({ children }) {
  return (
    <div className="p-8">
      <h1 className="text-5xl/none tracking-tighter text-gray-300 font-[900] line-clamp-1">
        {children}
      </h1>
    </div>
  );
}

export default FormsTitle;
