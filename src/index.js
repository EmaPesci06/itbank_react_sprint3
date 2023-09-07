import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CuentasPage } from './components/CuentasPage/CuentasPage';
import { TransferPage } from './components/TransferPage/TransferPage';
import { PagosPage } from './components/PagosPage/PagosPage';
import { MonedaPage } from './components/MonedaPage/MonedaPage';
import { PrestamoPage } from './components/PrestamoPage/PrestamoPage';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage></HomePage>
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
