import React from "react";
import { Provider } from "react-redux";
import "./app.css";
import Routes from "./Routes";
import store from "./redux/store";
import ModalsContainer from "./containers/ModalsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
        <ModalsContainer />
      </div>
    </Provider>
  );
}

export default App;
