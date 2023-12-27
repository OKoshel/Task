import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';



const accountAppContainer = document.getElementById('root')
createRoot(accountAppContainer).render(
    <StrictMode>
        <App />
    </StrictMode>
);





