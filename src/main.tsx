import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './ui/RootLayout';
import HomePage from './ui/pages/HomePage';
import InventoryPage from './ui/pages/InventoryPage';
import UploadPage from './ui/pages/UploadPage';
import { loadFromStorage } from './state/character';


loadFromStorage();


const router = createHashRouter([
{
path: '/',
element: <RootLayout />,
children: [
{ index: true, element: <HomePage /> },
{ path: 'inventory', element: <InventoryPage /> },
{ path: 'upload', element: <UploadPage /> },
],
},
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
