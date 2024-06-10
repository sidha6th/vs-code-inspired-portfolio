import { useEffect } from "react";
import { Provider } from "react-redux";
import setTheme from "./core/theme/Theme";
import store from "./core/store/store";
import { DashBoard } from "./pages/dashboard/Dashboard";

function App() {
  useEffect(setTheme, []);

  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
}

export default App;
