import React, { StrictMode} from 'react';
import Main from "./layouts/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {

    CART_PAGE_ROUTE,
    HOME_PAGE_ROUTE,
    STORE_PAGE_ROUTE,
    TEST_PAGE_ROUTE,

} from "./constants";
import Home from "./pages/Home";
import Store from "./pages/Store";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.sass'
import Test from "./pages/Test";
import store from "./redux/store";
import {Provider} from "react-redux";
import {PostListState} from "./context/posts/postListState";
import Cart from "./components/bucket/Cart";
import {CartState} from "./context/cart/CartState";

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
                            path={STORE_PAGE_ROUTE}
                            element={<CartState><Store/></CartState>}
                        />
                        <Route
                            path={TEST_PAGE_ROUTE}
                            element={<PostListState><Test/></PostListState>}
                        />

                        <Route
                            path={CART_PAGE_ROUTE}
                            element={<CartState><Cart/></CartState>}
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

