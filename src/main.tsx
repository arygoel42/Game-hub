import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
