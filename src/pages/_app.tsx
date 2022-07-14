import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { HabitContextProvider } from "../../store/habit-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HabitContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HabitContextProvider>
  );
}

export default MyApp;
