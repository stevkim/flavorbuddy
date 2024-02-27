import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <main className="bg-secondary min-h-[100vh] w-full">
      <Outlet />
    </main>
  );
}

export default App;
