import React, {Component, ReactDOM, StrictMode} from 'react';
import Main from "./layouts/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ACCOUNT_PAGE_ROUTE, HOME_PAGE_ROUTE} from "./constants";
import Home from "./pages/Home";
import Account from "./pages/Account";
import {createRoot} from "react-dom/client";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Main>
                    <Routes>
                        <Route
                            path={HOME_PAGE_ROUTE}
                            element={<Home/>}
                        />
                        <Route
                            path={ACCOUNT_PAGE_ROUTE}
                            element={<Account/>}
                        />
                    </Routes>
                </Main>
            </BrowserRouter>
        </div>
    );
}

export default App;


const accountAppContainer = document.getElementById('root') as Element

createRoot(accountAppContainer).render(
    <StrictMode>
        <App />
    </StrictMode>
);

