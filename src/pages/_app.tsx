import { AppProps } from 'next/app';
import { useEffect } from "react";
import { useRouter } from "next/router";
import '@/styles/globals.css';
import '@/styles/home.css';
import '@/styles/font.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: any) => {
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
