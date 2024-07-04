import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state"; // Importing the global slice reducer
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query"; // Importing setupListeners for RTK Query
import { api } from "state/api"; // Importing the API slice

// Creating the Redux store and configuring it with reducers and middleware
const store = configureStore({
  reducer: {
    global: globalReducer, // Adding the global slice reducer
    [api.reducerPath]: api.reducer, // Adding the API slice reducer
  },
  middleware: (getDefault) => getDefault().concat(api.middleware), // Adding API middleware
});

// Setting up listeners for cache management and refetching in RTK Query
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React application within the Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrapping the App component with Provider to pass the Redux store */}
      <App /> {/* Rendering the main App component */}
    </Provider>
  </React.StrictMode>
);
