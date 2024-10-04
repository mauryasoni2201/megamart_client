import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import PageNotFound from "./pages/PageNotFound";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./utils/request";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Homepage"));
const Detailspage = lazy(() => import("./pages/Detailspage"));
const Cartpage = lazy(() => import("./pages/Cartpage"));
const Orderspage = lazy(() => import("./pages/Orderspage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <Detailspage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cartpage />
          </Suspense>
        ),
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orderspage />
          </Suspense>
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
