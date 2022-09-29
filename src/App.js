import { useEffect } from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="App bg-[#F0EBE3] dark:bg-primaryColor">
      <MainLayout />
    </div>
  );
}

export default App;
