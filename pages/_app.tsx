import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/HeaderLayout";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
