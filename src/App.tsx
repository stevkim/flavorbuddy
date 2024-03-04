import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="bg-secondary min-h-[100vh] w-full">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
