import React from 'react';
import './styles/index.scss'
import { store} from "./store";
import {CookiesProvider} from "react-cookie";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {ROUTES_CONFIG} from "./config";
import {AuthProvider, ThemeProvider, LangProvider} from "./hooks";
import "./utils/i18n";

function App() {
  const router = createBrowserRouter(ROUTES_CONFIG);

  return (
    <CookiesProvider>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
            <LangProvider>
              <RouterProvider router={router}/>
            </LangProvider>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </CookiesProvider>
  )
}
export default App;
