import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import "../styles/index.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
   <ReactQueryDevtools initialIsOpen={false} />
    <Component {...pageProps} />
  </>;
};

export default trpc.withTRPC(MyApp);