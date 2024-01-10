import React, {Component, ReactDOM, StrictMode} from 'react';
import Main from "./layouts/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ACCOUNT_PAGE_ROUTE, HOME_PAGE_ROUTE, TEST_PAGE_ROUTE} from "./constants";
import Home from "./pages/Home";
import Account from "./pages/Account";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.sass'
import Test from "./pages/Test";
import store from "./redux/store";
import {Provider} from "react-redux";
import {PostListState} from "./context/postListState";

function App() {
    return (
        <div>
            <Provider store={store}>
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
                        <Route
                            path={TEST_PAGE_ROUTE}
                            element={<PostListState><Test/></PostListState>}
                        />
                    </Routes>
                </Main>
            </BrowserRouter>
            </Provider>
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

