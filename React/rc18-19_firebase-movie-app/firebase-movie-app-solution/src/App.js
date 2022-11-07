import React from "react";
import { userObserver } from "./auth/firebase";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
