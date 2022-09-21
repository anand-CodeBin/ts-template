import React from "react";
import "./App.css";
import { store } from "./Redux/store";
import { Provider as ReduxProvider } from "react-redux";
import RootNavigator from "./navigation";

function App() {
  return (
    <ReduxProvider store={store}>
      <RootNavigator />
    </ReduxProvider>
  );
}

export default App;
