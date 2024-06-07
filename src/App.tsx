import { useEffect } from "react";
import { DashBoard } from "./pages/dashboard/Dashboard";
import { setTheme } from "./core/theme/Theme";

function App() {
  useEffect(() => {
    setTheme();
  }, []);
  return <DashBoard />;
}

export default App;
