import { store } from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import StoreContext from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
renderApp(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderApp(state);
});
