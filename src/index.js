import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import { CuentasPage } from './pages/CuentasPage/CuentasPage';
import { TransferPage } from './pages/TransferPage/TransferPage';
import { PagosPage } from './pages/PagosPage/PagosPage';
import { MonedaPage } from './pages/MonedaPage/MonedaPage';
import { PrestamoPage } from './pages/PrestamoPage/PrestamoPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage></HomePage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/cuentas",
    element: <CuentasPage></CuentasPage>
  },
  {
    path: "/transferencias",
    element: <TransferPage></TransferPage>
  },
  {
    path: "/pagos",
    element: <PagosPage></PagosPage>
  },
  {
    path: "/conversor",
    element: <MonedaPage></MonedaPage>
  },
  {
    path: "/prestamos",
    element: <PrestamoPage></PrestamoPage>
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
