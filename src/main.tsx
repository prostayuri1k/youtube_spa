import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AntdProvider from "./Providers/AntdProvider.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Authorization from "./Pages/Authorization.tsx";
import Search from "./Pages/Search/Search.tsx";
import Default from "./Pages/Search/Default/Default.tsx";
import Favourite from "./Pages/Search/Favourite/Favourite.tsx";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
      <BrowserRouter>
          <AntdProvider>
              <Routes>
                  <Route path={"/"} element={<App/>}>
                      <Route path={"authorization"} element={<Authorization/>}/>
                      <Route element={<Search/>}>
                          <Route path={'search'} element={<Default/>}/>
                          <Route path={'favourite'} element={<Favourite/>}/>
                      </Route>
                  </Route>
              </Routes>
              <App />
          </AntdProvider>
      </BrowserRouter>
  // </StrictMode>,
)
