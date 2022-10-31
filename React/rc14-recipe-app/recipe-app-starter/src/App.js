import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
