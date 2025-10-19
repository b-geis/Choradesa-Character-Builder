// Entry point: renders the Router tree into the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './ui/RootLayout';
import HomePage from './ui/pages/HomePage';
import InventoryPage from './ui/pages/InventoryPage';


// Hash Router avoids 404s on GitHub Pages when refreshing deep links
const router = createHashRouter([
{
path: '/',
element: <RootLayout />,
children: [
{ index: true, element: <HomePage /> },
{ path: 'inventory', element: <InventoryPage /> },
],
},
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
